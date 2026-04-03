function findFriend() {
    const friends = ["Rahul", "Priya", "Amit", "Sneha", "Arjun", "Neha", "Kiran"];
    
    const name = document.getElementById("username").value;

    if (name === "") {
        document.getElementById("result").innerText = "Please enter your name!";
        return;
    }

    const randomFriend = friends[Math.floor(Math.random() * friends.length)];

    document.getElementById("result").innerText =
        name + "'s best friend is " + randomFriend + " 🎉";
}