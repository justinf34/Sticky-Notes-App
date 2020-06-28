import Note from "./Note.js";

export default class Manager {
  constructor({ el, notes }) {
    this.el = el; //<board>
    this.notes = notes.map((note) => new Note(note, this));

    this.showNotes();
  }

  showNotes() {
    this.el.innerHTML = "";
    this.notes.forEach((element) => {
      this.el.appendChild(element.createNote());
    });
  }
}
