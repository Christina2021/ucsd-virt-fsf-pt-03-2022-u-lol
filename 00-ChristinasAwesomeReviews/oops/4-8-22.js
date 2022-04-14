// This is a one-line comment
/*

    This is a multi-line comment.
    Yes, this is indeed pretty cool.

*/

// What is Javascript?
  // Think of a house - structure; style; wiring/water
  // We can't see JS. But what if we want to?

// What is the console?
console.log("I'm a string in the console");
console.log(2+2);

// Storing Data: Variables
var userName = "Tanjiro";
//LEAVE SPACE OUT AT FIRST
console.log("Hi " + userName + "!")

var age = 2;
var loggedIn = true;
var posts;

/*
// Primitive Types and Opreators
  String
  Number
  Boolean
  Undefined = no value assigned yet

  console.log(typeof myUserName)

  // Arithmetic operators RETURN NUMBER
  a = 8
  b = 4

  a+b
  a-b
  a*b
  a/b
  a%b

  // Comparison operators RETURN BOOLEAN
  c = "5"
  d = 5

  c == d //true equality
  c != d
  c === d //false strict equality
  c !== d
  c > d
  c >= d
  c < d
  c <= d

  expression 1 && expression 2
  expression 1 || expression 2

*/

// Blocks of Code: Functions and
// Conditional Statements

function addOrSubtract(num1, num2, op) {
  //block of code to do stuff
  if(op === "add") {
      return num1 + num2
  } else if(op ==="subtract") {
      return num1 - num2
  } else {
      return "Yeah.... no...."
  }
}

addOrSubtract(3, 2, "add")
console.log(addOrSubtract(3, 2, "add"))

var addOrSubtractAgain = function (num1, num2, op) {
  if(op === "add") {
      return num1 + num2
  } else if(op ==="subtract") {
      return num1 - num2
  } else {
      return "Yeah.... no...."
  }
}
console.log(addOrSubtractAgain(5,4,"subtract"))
console.log(addOrSubtractAgain(5,4,"multiply"))

//This post
function isLoggedIn(logInStatus) {
  if(logInStatus) {
      console.log("User is logged in. Yay!")
  }

  if(!logInStatus) {
      console.log("User is not logged in....")
      //go to login page
  }
}

isLoggedIn(loggedIn)


// Arrays
// Collection of data
posts = ["I ate all of my treats","I'm the coolest cat around", "Yeehaw"]

// Iterations
for(let i = 0; i < posts.length; i++) {
  console.log(posts[i])
}

// Objects and Methods amd This
var userInfo = {
  userName: "Teemo",
  age: 7,
  loggedIn: true,
  posts: ["I'm a big kitty", "Tanjiro is being crazy", "Meow"],
  whatIsThis: function() {
      console.log(this)
  },
  logFirstPost: function(punc) {
      console.log(this.posts[0]+punc)
  },
  addPost: function(newPost) {
      this.posts.push(newPost)
  }
}
//add in addPost method later

console.log(userInfo.userName)
console.log(userInfo["userName"])

userInfo.whatIsThis()
userInfo.logFirstPost("!")


// The DOM!
// Window Object
console.log(window)
console.log(window.document)
console.log(window.document.body)
console.log(document.body)

// Create-Append and Setting Attributes and Evenet Listeners and Preventing Default
function addPostsToPage() {
  document.querySelector("#all-posts").innerHTML = "";

  for(let j = 0; j < userInfo.posts.length; j++) {
      var postText = document.createElement("p")
      postText.textContent = userInfo.posts[j];
  
      postText.setAttribute("style", "margin-top: 10px; font-weight: bold")
      postText.style.color = "blue";
  
      document.querySelector("#all-posts").appendChild(postText);
  }

}

var newUserPost = document.querySelector("#new-post")
var submitButton = document.getElementById("submit")
console.log(newUserPost)

// userInfo.addPost(newUserPost)
function addNewUserPost(event) {
  console.log("I've been clicked! O.O")
  event.preventDefault()

  console.log(newUserPost.value)
  if(newUserPost.value !== "") {
      userInfo.addPost(newUserPost.value)
      addPostsToPage()
  }
  
}

submitButton.addEventListener("click", addNewUserPost);

addPostsToPage();


// Timer-Intervals



// Keyboard Events
newUserPost.addEventListener("keydown", function(event) {
  console.log(event.key)
})


// Event Bubbling
//Go to activity for this


// Data-Attributes


var timer = document.querySelector("#timer")
var secondsPassed = 0;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft++;
    timer.textContent = secondsPassed + " seconds";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}
