const friends = ["Sudhir", "Akash", "Swapnil", "Sneha", "Arjun", "Neha", "Kiran"];
const messages = [
    "Looks like destiny chose this friend!",
    "You guys are a perfect match 😄",
    "Friendship goals unlocked!",
    "This is your lucky bestie!",
    "Great choice by the universe ✨"
];

const usernameEl = document.getElementById("username");
const resultEl = document.getElementById("result");
const messageEl = document.getElementById("message");

let lastFriend = "";

function findFriend() {
    const name = usernameEl.value.trim();

    if (name === "") {
        resultEl.innerText = "";
        messageEl.innerText = "Please enter your name!";
        return;
    }

    let randomFriend;

    // Avoid repeating same friend twice
    do {
        randomFriend = friends[Math.floor(Math.random() * friends.length)];
    } while (randomFriend === lastFriend);

    lastFriend = randomFriend;

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    resultEl.innerText = `${name}'s best friend is ${randomFriend} 🎉`;
    messageEl.innerText = randomMessage;
}

document.getElementById("findBtn").addEventListener("click", findFriend);
usernameEl.addEventListener("keypress", (e) => { if (e.key === "Enter") findFriend(); });