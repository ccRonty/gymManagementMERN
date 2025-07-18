const memberShipModel = require('../Models/membership');

exports.addMembership = async (req, res) => {
  try {
    const { months, price } = req.body;
    const membership = await memberShipModel.findOne({ gym: req.gym._id, months }); //need to get data from currently logged in gym
    if (membership) {
      membership.price = price;
      await membership.save();
      res.status(200).json({
        success: true,
        message: "Data updated successfully"
      })
    } else {
      const newMembership = new memberShipModel({ price, months, gym: req.gym._id });
      await newMembership.save();
      res.status(200).json({
        success: true,
        message: "Data added successfully"
      })
    }
  } catch (error) {
    // console.log(error)
    res.status(500).json({
      success: false,
      message: "Server Error",
      error,
    })
  }
}

exports.getMembership = async (req, res) => {
  try {
    const loggedInGymId = req.gym._id; //coming from auth
    const membership = await memberShipModel.find({ gym: loggedInGymId })
    res.status(200).json({
      success: true,
      message: "Membership fetched successfully",
      membership: membership
    })
  } catch (error) {
    // console.log(error)
    res.status(500).json({
      success: false,
      message: "Server Error",
      error,
    })
  }
}