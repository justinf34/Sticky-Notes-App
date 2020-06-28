export default class Note {
  constructor({ title, description }, manager) {
    this.title = title;
    this.description = description;
    this.manager = manager;
    this.el = null;
  }

  createNote() {
    let template = `        
      <div class="note">
        <div class="note-header">
            <button class="note-delete"><i class="fa fa-close"></i></button>
        </div>
        <div class="note-title">{{title}}</div>
        <div class="note-description">{{description}}</div>
    </div>`;

    const tmp = document.createElement("div");
    tmp.innerHTML = template
      .replace("{{title}}", this.title)
      .replace("{{description}}", this.description);

    this.el = tmp.children[0];

    return this.el;
  }
}
