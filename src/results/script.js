console.log("ayo the scripts here");

function setIQ(amount) {
    iq = amount;
    localStorage.setItem("iq", amount);
}

function learn(amount) {
    setIQ(iq + amount);
    iqCallout.textContent = `Your IQ is ${iq}.`;
    if (iq >= 25)
        iqDescription.innerHTML = "That's higher than <b>100%</b> of Beatles.";
}

let iq = +(localStorage.getItem("iq") ?? 0);

const coolButton = document.querySelector("#cool-button");
const iqCallout = document.querySelector("#iq-callout");
const iqDescription = document.querySelector("#iq-description");

coolButton.addEventListener("click", async () => {
    learn(1);
});

learn(0);
