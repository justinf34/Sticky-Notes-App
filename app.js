// import styles from "./style.css";
import Manager from "./src/Manager.js";

console.log("Hello World");
const manager = new Manager({
  el: document.querySelector(".board"),
  notes: [
    {
      title: "Note Title1",
      description: "This is a test note1",
    },
    {
      title: "Note Title1",
      description: "This is a test note1",
    },
  ],
});
