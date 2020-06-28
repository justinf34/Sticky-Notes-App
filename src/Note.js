/**
 * A note object which can be edited, deleted
 * and created
 */
export default class Note {
  constructor({ title, description }, manager) {
    this.title = title;
    this.description = description;
    this.manager = manager;
    this.element = null;
  }

  /**
   * Create a note div element with
   * the proper title and description
   */
  createNote() {
    let template = `        
      <div class="note">
        <div class="note-header">
            <button class="note-delete"><i class="fa fa-close"></i></button>
        </div>
        <div class="note-title" contenteditable>{{title}}</div>
        <div class="note-description" contenteditable>{{description}}</div>
    </div>`;

    const tmp_div = document.createElement("div");
    tmp_div.innerHTML = template
      .replace("{{title}}", this.title)
      .replace("{{description}}", this.description);

    this.element = tmp_div.children[0];
    this.attachEventListeners();
    return this.element;
  }

  attachEventListeners() {
    const dltNote = this.element.querySelector(".note-delete");
    dltNote.onclick = () => {
      console.log("Attempting to delete note");
      this.manager.deleteNote(this);
    };
  }
}
