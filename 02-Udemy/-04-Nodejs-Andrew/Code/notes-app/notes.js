// import * as fs from "node:fs";
const fs = require("fs");
// import chalk from "chalk";
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  // const duplicatedNotes = notes.filter((note) => note.title === title);
  const duplicatedNote = notes.find((note) => note.title === title);

  if (!duplicatedNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log("New note added!");
  } else {
    console.log("Note title taken!");
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const newNotes = notes.filter((note) => note.title !== title);

  if (notes.length > newNotes.length) {
    console.log(chalk.green.inverse("Note removed!"));
    saveNotes(newNotes);
  } else {
    console.log(chalk.red.inverse("Note not found!"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const listAllNotes = () => {
  const notes = loadNotes();
  console.log(chalk.bgGray("Your notes:"));

  notes.forEach((note) => {
    console.log(chalk.blue(note.title) + ": " + chalk.cyan(note.body));
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((n) => n.title === title);

  if (note) {
    console.log(chalk.red(note.title + ": " + note.body));
  } else {
    console.log(chalk.bgRed("not found!"));
  }
};

module.exports = {
  addNote,
  removeNote,
  listAllNotes,
  readNote,
};
