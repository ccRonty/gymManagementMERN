const memberModel = require('../Models/member');
const membershipModel = require('../Models/membership');

exports.getAllMembers = async (req, res) => {
  try {
    const { skip, limit } = req.query;
    const members = await memberModel.find({ gym: req.gym._id });
    const totalFetchedMembers = members.length;

    //now fetch members using limit & fetch for frontend pagination
    const limitedMembers = await memberModel.find({ gym: req.gym._id }).sort({ createdAt: -1 }).skip(skip).limit(limit);
    res.status(200).json({
      success: true,
      message: members.length ? "Fetched Members successfully" : "No members registered yet",
      members: limitedMembers,
      totalmembers: totalFetchedMembers
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "server error"
    })
  }
}

function addMonthsToDate(months, joinDate) {
  let today = joinDate;
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth(); // month is 0 indexed
  const currentDay = today.getDate();

  //calculate new month & year
  const futureMonth = currentMonth + months;
  const futureYear = currentYear + Math.floor(futureMonth / 12)

  //calculate the correct future month (modulas for month)
  const adjustedMonth = futureMonth % 12;

  //set the date to first of the future month
  const futureDate = new Date(futureYear, adjustedMonth, 1);

  //get last day of future month
  const lastDayOfFutureMonth = new Date(futureYear, adjustedMonth + 1, 0).getDate();

  //adjust the day if current day exceeds the number of days in the new month
  const adjustedDay = Math.min(currentDay, lastDayOfFutureMonth)

  //set the final adjusted day
  futureDate.setDate(adjustedDay)

  return futureDate;

}

exports.addMember = async (req, res) => {
  try {
    const { name, phone, address, joiningDate, profilePic, membership } = req.body;
    const member = await memberModel.findOne({ gym: req.gym._id, phone });
    if (member) {
      return res.status(409).json({
        success: false,
        message: "Member already registered with this mobile number"
      })
    }
    // console.log('gym id', req.gym._id)
    const memberShips = await membershipModel.findOne({ _id: membership, gym: req.gym._id });
    // console.log(memberShips)
    const membershipMonths = memberShips.months;
    if (memberShips) {
      let joining_Date = new Date(joiningDate);
      const nextBillDate = addMonthsToDate(membershipMonths, joining_Date);
      let newMember = new memberModel({ name, phone, address, joiningDate, profilePic, membership, gym: req.gym._id, nextBillDate })
      await newMember.save();
      res.status(200).json({
        success: true,
        message: "Member added succefully",
        newMember
      })
    } else {
      return res.status(409).json({
        success: false,
        message: "No such membership found"
      })
    }

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "server error"
    })
  }
}

exports.searchMember = async (req, res) => {
  try {
    const { seachTerm } = req.query;
    // console.log("seachTerm", seachTerm)
    const member = await memberModel.find({
      gym: req.gym._id,
      $or: [
        { name: { $regex: '^' + seachTerm, $options: 'i' } },
        { phone: { $regex: '^' + seachTerm, $options: 'i' } }
      ]
    });
    res.status(200).json({
      success: true,
      message: member.length ? "Fetched member successfully" : "No member found",
      members: member,
      totalMembers: member.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "server error",
      error: error
    })
  }
}

exports.monthlyJoinedMembers = async (req, res) => {
  try {
    const now = new Date();
    //get the first day of current month 
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);

    // console.log(startOfMonth, lastOfMonth)

    const members = await memberModel.find({
      gym: req.gym._id,
      createdAt: {
        $gte: startOfMonth, //greater than or equal to the first date of current month
        $lte: lastOfMonth  //less than or equal to the first date of current month
      }
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: members.length ? "Fetched member successfully" : "No member found",
      members: members,
      totalMembers: members.length
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "server error",
      error: error
    })
  }
}

exports.expiringWithin3Days = async (req, res) => {
  try {
    const today = new Date();
    const next3Days = new Date();
    next3Days.setDate(today.getDate() + 3)

    const members = await memberModel.find({
      gym: req.gym._id,
      nextBillDate: {
        $gte: today,
        $lte: next3Days
      }
    })

    res.status(200).json({
      success: true,
      message: members.length ? "Fetched member successfully" : "No member found expiring within 3 days",
      members: members,
      totalMembers: members.length
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "server error",
      error: error
    })
  }
}

exports.expiringWithin4to7Days = async (req, res) => {
  try {
    const today = new Date();
    const next4Days = new Date();
    next4Days.setDate(today.getDate() + 4)
    const next7Days = new Date();
    next7Days.setDate(today.getDate() + 7)

    const members = await memberModel.find({
      gym: req.gym._id,
      nextBillDate: {
        $gte: next4Days,
        $lte: next7Days
      }
    })

    res.status(200).json({
      success: true,
      message: members.length ? "Fetched member successfully" : "No member found expiring within 4-7 days",
      members: members,
      totalMembers: members.length
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "server error",
      error: error
    })
  }
}

exports.expiredMembers = async (req, res) => {
  try {
    const today = new Date();

    const members = await memberModel.find({
      gym: req.gym._id,
      status: "Active",
      nextBillDate: {
        $lt: today
      }
    })

    res.status(200).json({
      success: true,
      message: members.length ? "Fetched member successfully" : "No expired member found",
      members: members,
      totalMembers: members.length
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "server error",
      error: error
    })
  }
}

exports.inactiveMembers = async (req, res) => {
  try {
    const members = await memberModel.find({
      gym: req.gym._id,
      status: "Pending"
    })
    res.status(200).json({
      success: true,
      message: members.length ? "Fetched member successfully" : "No such inactivate member found",
      members: members,
      totalMembers: members.length
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "server error",
      error: error
    })
  }
}

exports.getMemberDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const member = await memberModel.findOne({
      gym: req.gym._id,
      _id: id,
    });
    if (!member) {
      return res.status(400).json({
        success: false,
        message: "No such member found"
      })
    }
    res.status(200).json({
      success: true,
      member: member
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "server error",
      error: error
    })
  }
}

exports.changeMemberStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const member = await memberModel.findOne({
      gym: req.gym._id,
      _id: id,
    });
    if (!member) {
      return res.status(400).json({
        success: false,
        message: "No such member found"
      })
    }
    member.status = status;
    await member.save();
    res.status(200).json({
      success: true,
      message: "Status changed successfully"
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "server error",
      error: error
    })
  }
}

exports.renewMember = async (req, res) => {
  try {
    const { id } = req.params;
    const { membership } = req.body;
    const memberShips = await membershipModel.findOne({
      gym: req.gym._id,
      _id: membership
    })
    if (memberShips) {
      let getMembershipMonth = memberShips.months;
      let today = new Date();
      let nextBillDate = addMonthsToDate(getMembershipMonth, today);

      const member = await memberModel.findOne({
        gym: req.gym._id,
        _id: id
      });
      if (!member) {
        return res.status(409).json({ success: false, message: "No such member found" })
      }
      member.nextBillDate = nextBillDate;
      member.lastPayment = today;

      await member.save();
      res.status(200).json({
        success: true,
        message: "Member renewed successfully",
        member
      })

    } else {
      return res.status(409).json({ success: false, message: "No such memberhip found" })
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "server error",
      error: error
    })
  }
}