let lastFriend = "";

function findFriend() {
    const friends = ["Rahul", "Priya", "Amit", "Sneha", "Arjun", "Neha", "Kiran"];
    const messages = [
        "Looks like destiny chose this friend!",
        "You guys are a perfect match 😄",
        "Friendship goals unlocked!",
        "This is your lucky bestie!",
        "Great choice by the universe ✨"
    ];

    const name = document.getElementById("username").value;

    if (name === "") {
        document.getElementById("result").innerText = "";
        document.getElementById("message").innerText = "Please enter your name!";
        return;
    }

    let randomFriend;

    // Avoid repeating same friend twice
    do {
        randomFriend = friends[Math.floor(Math.random() * friends.length)];
    } while (randomFriend === lastFriend);

    lastFriend = randomFriend;

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    document.getElementById("result").innerText =
        name + "'s best friend is " + randomFriend + " 🎉";

    document.getElementById("message").innerText = randomMessage;
}

// Enter key support
function handleKey(event) {
    if (event.key === "Enter") {
        findFriend();
    }
}