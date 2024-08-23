const express = require("express");


const router = express.Router();


router
  .route("/")
  .get(async (req, res) => {
    const allDbUsers = await User.find({});
    const html = `
    <ul>
    ${allDbUsers
      .map((User) => `<li><b>${User.firstName} - ${User.email}</b></li>`)
      .join("")}
    </ul>`;
    return res.status(200).send(html);
  })
  .post(async (req, res) => {
    const body = req.body;
    console.log(body);
    const newUser = { ...body, id: data.length + 1 };
    data.push(newUser);
    if (
      !body ||
      !body.first_name ||
      !body.last_name ||
      !body.email ||
      !body.gender ||
      !body.ip_address
    ) {
      res.status(400).send("Incomplete attributes.  :(");
    }

    const result = await User.create({
      firstName: body.first_name,
      lastName: body.last_name,
      email: body.email,
      gender: body.gender,
      ipAddress: body.ip_address,
    });
    return res.status(201).send("User Created :)");
  });

router.route("/:id").get(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    return res.send(`
     The name of the user is ${user.firstName} ${user.lastName}
     `);
  } else {
    return res.status(404).send("User not found");
  }
});

module.exports = router;
