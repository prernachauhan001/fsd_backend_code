const EventEmitter = require("events");

// Create EventEmitter object
const myEvent = new EventEmitter();

// Simulate DOM click event
myEvent.on("click", (buttonName) => {
    console.log(`${buttonName} button was clicked`);
});

// Simulate login event
myEvent.on("login", (username) => {
    console.log(`${username} logged in`);
});

// Simulate logout event
myEvent.on("logout", (username) => {
    console.log(`${username} logged out`);
});

// Trigger events
myEvent.emit("click", "Submit");
myEvent.emit("login", "Vivek");
myEvent.emit("logout", "Vivek");