/*
filename: complex_code.js
content: This code implements a complex messaging system using classes and object-oriented programming concepts.
*/

// Define the Message class
class Message {
  constructor(sender, receiver, content) {
    this.sender = sender;
    this.receiver = receiver;
    this.content = content;
    this.timestamp = new Date();
  }
  
  getFormattedTimestamp() {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return this.timestamp.toLocaleDateString('en-US', options);
  }
  
  display() {
    console.log(`[${this.getFormattedTimestamp()}] ${this.sender} -> ${this.receiver}: ${this.content}`);
  }
}

// Define the User class
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.messages = [];
  }
  
  sendMessage(receiver, content) {
    const message = new Message(this.name, receiver, content);
    this.messages.push(message);
    message.display();
  }
  
  checkMessages() {
    console.log(`== Inbox of ${this.name} ==`);
    
    if (this.messages.length === 0) {
      console.log("No messages.");
    } else {
      for (const message of this.messages) {
        message.display();
      }
    }
    
    console.log("===========================");
  }
}

// Usage example
const user1 = new User("John", "john@example.com");
const user2 = new User("Alice", "alice@example.com");

user1.sendMessage(user2.name, "Hello Alice! How are you?");
user2.sendMessage(user1.name, "Hey John! I'm doing great. How about you?");

user1.checkMessages();
user2.checkMessages();