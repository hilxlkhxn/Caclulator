console.log("CALCULATRON was built by hilxlkhxn");
let currentInput = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        const buttonValue = e.target.innerHTML;

        if (buttonValue === "=") {
            try {
                currentInput = eval(currentInput).toString();
            } catch {
                currentInput = "Error";
            }
            document.querySelector("input").value = currentInput;
        } else if (buttonValue === "C") {
            currentInput = "";
            document.querySelector("input").value = currentInput;
        } else {
            currentInput += buttonValue;
            document.querySelector("input").value = currentInput;
        }
    });
});
