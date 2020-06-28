// import styles from "./style.css";
import Manager from "./src/Manager.js";

console.log("Hello World");
const manager = new Manager({
  element: document.querySelector(".board"),
  notes: [
    {
      title: "Write the Title Here",
      description: "Here is where you write the body of the note ",
    },
  ],
});

const addNoteBtn = document.querySelector("#addNote");
addNoteBtn.onclick = () => {
  manager.addNote();
};
