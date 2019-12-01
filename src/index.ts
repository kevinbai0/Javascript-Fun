import State from "./State";
import { addClassName } from "./utils";

const button = <HTMLButtonElement> document.getElementById("start-button");

const buttonState = new State(0);
buttonState.bind("listener", newValue => {
    if (newValue > 5) {
        button.className = addClassName(button.className, "hidden");
    }
});
buttonState.bind(button, value => button.innerHTML = "Count: " + value);

button.onclick = _ => buttonState.update(buttonState.value + 1);