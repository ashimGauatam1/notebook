const express = require("express");
const router = express.Router();
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/Userfetch");
const JWT_SCRT = "ashim$gautam";

//routes /api/auth/createuser
// routes to create user
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be minimum 5 length").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // if error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.send({ errors: result.array() });
    }
    //check weather email exist or not
    try {
      let notes = await Notes.findOne({ email: req.body.email });
      if (notes) {
        return res.status(400).json({ error: "sorry user already exits" });
      }
      //hash password
      const salt = await bcrypt.genSalt(10);
      const secpass = await bcrypt.hash(req.body.password, salt);

      //create a new user
      notes = await Notes.create({
        name: req.body.name,
        password: secpass,
        email: req.body.email,
      });
      // user lai chinna deko token
      const data = {
        notes: {
          id: notes.id,
        },
      };
//      console.log(data);
      //jwt token
      const authenticate = jwt.sign(data, JWT_SCRT);
      
      // console.log(authenticate);
      res.json({ authenticate });
    } catch (errors) {
      return res.status(500).json("internal server error");
    }
  }
);
// route for login
// notes ma vako email ra password user ma rakni ani user lai ra password lai check garni
// if sabai data thik xa vane user lai yeuta token diyea aagadi badauni

router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot  be empty").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.send({ errors: result.array() });
    }
    const { email, password } = req.body;
    try {
      let notes = await Notes.findOne({ email }); // aba notes ko sabai data user ma aayo
      if (!notes) {
        return res.status(400).json("enter valid data");
      }
      const authpass = await bcrypt.compare(password, notes.password); // user ma sabai data vayera user.pass vako
      if (!authpass) {
        return res.status(400).json("enter valid data");
      }
      const data = {
        notes:{
          id:notes.id,
        },
      };
      
      console.log(data);
      //jwt token
      const authenticated = jwt.sign(data, JWT_SCRT);
      res.json(authenticated);
    } catch (errors) {
      console.error(errors.message);
      return res.status(500).send("internal server error");
    }
  }
);

// logged user /api/auth/logged
router.post("/getuser", fetchuser, async (req, res) => {
try {
    const userId = req.notes.id;
    //console.log(userId);
    const notes = await Notes.findById(userId).select("-password")
  //  console.log(notes);
    //res.json({"hi":"user"});
    res.send(notes)
  }
   catch (error) {
    console.error(error.message);
    return res.status(500).send("internal server error");
  }
});

module.exports = router;
