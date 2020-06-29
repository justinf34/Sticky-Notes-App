import Note from "./Note.js";

/**
 * Handles the editing of notes, deleteion,
 * and creation
 */
export default class Manager {
  constructor({ element, notes }) {
    this.element = element; //<board>
    this.notes = notes.map((note) => new Note(note, this, notes.length));

    this.showNotes();
  }

  /**
   * Render the notes in the page
   */
  showNotes() {
    this.element.innerHTML = "";
    this.notes.forEach((element) => {
      this.element.appendChild(element.createNote());
    });
  }

  deleteNote(note) {
    this.notes.splice(this.notes.indexOf(note), 1);
    this.showNotes();
  }

  addNote() {
    this.notes.push(
      new Note(
        {
          title: "Title Here",
          description: "Description Here",
          color: "#f0c806",
        },
        this,
        this.notes.length + 1
      )
    );
    this.showNotes();
  }

  openDrpDwnMenu(noteID) {
    console.log(noteID);
    this.closeDrpDwnMenu();
    const click = this.element.querySelector(noteID);
    click.classList.toggle("show");
  }

  closeDrpDwnMenu() {
    let openDD = this.element.getElementsByClassName("dropdown-content");
    for (let element of openDD) {
      if (element.classList.contains("show")) {
        element.classList.remove("show");
      }
    }
  }
}
