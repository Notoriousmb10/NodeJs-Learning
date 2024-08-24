const User = require("../models/user");

async function getAllUsers(req, res) {
  try {
    const allDbUsers = await User.find({});
    const html = `
      <ul>
      ${allDbUsers
        .map((user) => `<li><b>${user.firstName} - ${user.email}</b></li>`)
        .join("")}
      </ul>`;
    return res.status(200).send(html);
  } catch (error) {
    return res.status(500).send("Error fetching users");
  }
}

async function createUser(req, res) {
  const body = req.body;
  
  if (!body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.ip_address
  ) {
    return res.status(400).send("Incomplete attributes. :(");
  }

  try {
    // Create a new user
    const result = await User.create({
      firstName: body.first_name,
      lastName: body.last_name,
      email: body.email,
      gender: body.gender,
      ipAddress: body.ip_address,
    });
    return res.status(201).send("User Created :)");
  } catch (error) {
    return res.status(500).send("Error creating user");
  }
}

async function findUser(req, res) {
  try {
    const user = await User.findById(req.params.id);

    if (user) {
      return res.send(`
        The name of the user is ${user.firstName} ${user.lastName}
      `);
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    return res.status(500).send("Error finding user");
  }
}

module.exports = {
  getAllUsers,
  createUser,
  findUser,
};
