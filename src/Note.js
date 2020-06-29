/**
 * A note object which can be edited, deleted
 * and created
 */
export default class Note {
  constructor({ title, description, color }, manager, number) {
    this.title = title;
    this.description = description;
    this.manager = manager;
    this.element = null;
    this.number = number;
    this.color = color;
  }

  /**
   * Create a note div element with
   * the proper title and description
   */
  createNote() {
    let template = `        
      <div class="note" style="background-color: {{color}};">
        <div class="note-header">
            <button class="note-delete"><i class="fa fa-close"></i></button>
            
            <div class="dropdown">
              <button class="dropbtn">
              <i class="fas fa-palette"></i>
              </button>
              <div id="{{noteID}}" class="dropdown-content">
                <a class="yellow">Yellow</a>
                <a class="blue">Blue</a>
                <a class="green">Green</a>
                <a class="pink">Pink</a>
              </div>
            </div>

        </div>
        <div class="note-title" contenteditable>{{title}}</div>
        <div class="note-description" contenteditable>{{description}}</div>
    </div>`;

    const tmp_div = document.createElement("div");
    tmp_div.innerHTML = template
      .replace("{{title}}", this.title)
      .replace("{{description}}", this.description)
      .replace("{{noteID}}", "note" + this.number)
      .replace("{{color}}", this.color);

    this.element = tmp_div.children[0];
    this.attachEventListeners();
    // this.attachMenuEventListeners();
    return this.element;
  }

  attachEventListeners() {
    const dltNote = this.element.querySelector(".note-delete");
    dltNote.onclick = () => {
      console.log("Attempting to delete note");
      this.manager.deleteNote(this);
    };

    const chngColour = this.element.querySelector(".dropbtn");
    chngColour.onclick = () => {
      console.log("Attempting to change note colour");

      this.manager.openDrpDwnMenu("#note" + this.number);
    };

    const yellowBtn = this.element.querySelector(".yellow");
    yellowBtn.onclick = () => {
      this.color = "#f0c806";
      this.manager.showNotes();
    };

    const greenBtn = this.element.querySelector(".green");
    greenBtn.onclick = () => {
      this.color = "#5cf006";
      this.manager.showNotes();
    };

    const blueBtn = this.element.querySelector(".blue");
    blueBtn.onclick = () => {
      this.color = "#06f0ec";
      this.manager.showNotes();
    };

    const pinkBtn = this.element.querySelector(".pink");
    pinkBtn.onclick = () => {
      this.color = "#f006e4";
      this.manager.showNotes();
    };
  }
}
