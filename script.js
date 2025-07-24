const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    const box = document.getElementsByClassName("box")[0];

    // Check if the element exists
    if (box) {
        box.style.backgroundColor = randomCode;
    }
};
document.querySelector("#btn1").addEventListener(
    "click",
    getColor
)
