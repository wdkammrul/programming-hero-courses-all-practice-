console.log("This is separate JS file");
// option: 1 directly set on the html element
//<button onclick="console.log(65)">Another btn</button>

//  onclick = এটা একটা ফাংশনের মধ্যেও ব্যবহার করা যাবে পরে বাটনকে কল দিলে কাজ করবে ।
//<button onclick="makeRed()">Make Red</button>
// option:2
// (এটা আমরা ইউজ করবো )
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option:3 onclick = বাটনকে document.getElementById এর মাধ্যেমেও খুজে পেতে পারি ।
const makeBlueButton = document.getElementById("make-blue");
// console.log(makeBlueButton)
makeBlueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// option: 3 another
const purpleButton = document.getElementById("make-purple");
// console.log(purpleButton)
purpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

// option: 4
const pinkButton = document.getElementById("make-pink");
// console.log(pinkButton)
pinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

// option: 4 another
const greenButton = document.getElementById("make-green");
// console.log(pinkButton)
greenButton.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

// ********(এটা আমরা ইউজ করবো )
// option: 4 final (এটা আমি সবসময় ইউজ করবো ।)
document
  .getElementById("make-goldenrod")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenrod";
  });
