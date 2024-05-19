const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const fetchuser = require("../middleware/Userfetch");
const { body, validationResult } = require("express-validator");

//note fetch
router.get("/fetchuser", fetchuser, async (req, res) => {
  const note = await Note.find({ user: req.notes.id });
  // console.log(note);
  res.json(note);
});

// create note
router.post(
  "/createnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Enter a valid description").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // if error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.send({ errors: result.array() });
    }
    try {
      const { title, description } = req.body;
      const note = new Note({
        title,
        description,
        user: req.notes.id,
      });
      const savenote = await note.save();
      res.json(savenote);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send("internal server error");
    }
  }
);

// update note
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  try {
    const { title, description } = req.body;

    const newnote = {};
    if (title) {
      newnote.title = title;
    }
    if (description) {
      newnote.description = description;
    }

    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("not found");
    }
    if (note.notes && note.notes.toString() !== req.notes.id) {
      return res.status(401).send("not allowed");
    }
    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newnote },
      { new: true }
    );

    console.log(note);
    res.send(note);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("internal server error");
  }
});

// delete note
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    //finding
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("not found");
    }
    //allow to delete who belong to id
    if (note.notes && note.notes.toString() !== req.notes.id) {
      return res.status(401).send("not allowed");
    }
    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ success: "user deleted of id ", note: note });

    console.log(note);
    res.send(note);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("internal server error");
  }
});

router.get("/notes", fetchuser, async (req, res) => {
  try {
    const userId = req.notes._id;

    const notes = await Note.find({ user: userId });

    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
