/*
 * Title: Main Script file
 * Description: A vanilla JS Implementation of a simple Counter that adds 1 to each user click
 */

let number = 0;

const display = document.querySelector("#display");
const button = document.querySelector("#button");

button.addEventListener("click", () => {
    number++;
    display.textContent = number;
})