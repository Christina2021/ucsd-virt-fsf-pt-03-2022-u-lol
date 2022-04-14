// This is a one-line comment
/*

    This is a multi-line comment.
    Yes, this is indeed pretty cool.

*/

// What is Javascript?
  // Think of a house - structure; style; wiring/water
  // We can't see JS. But what if we want to?

// What is the console?
// console.log("I'm a string in the console");
// console.log(2+2)

// Storing Data: Variables
var userName = "Tanjiro"
//console.log("Hi " + userName + "!")

var age = 2;
var loggedIn = true;
var posts;

// Primitive Types and Opreators
    //String
    //Numbers
    //Booleans - True/False
    // Undefined - have a variable but no assigned value

/*
    // Arithmetic operators RETURN NUMBER
    var a = 8;
    var b = 4;

    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
    console.log(a%b) -moduler
*/

/*
    // Comparison operators RETURN BOOLEAN
    var c = "5"
    var d = 5
    var e = 6

    // console.log(c == d)
    // console.log(c != d)
    // console.log(c === d)
    // console.log(c !== d)
    // console.log(e > d)
    // console.log(e >= d)
    // console.log(e < d)
    // console.log(e <= d)

    expression 1 && expression 2
    expression 1 || expression 2

*/

/*
// Blocks of Code: Functions and
// Conditional Statements

function addOrSubtract(num1, num2, op) {
    op = op.toLowerCase()
    num1 = parseInt(num1)

    //block of code to do stuff
    if(op === "add") {
        return num1 + num2
    } else if (op === "subtract") {
        return num1 - num2
    } else {
        return "Yeah.... not gonna work"
    }

}

addOrSubtract(3, 2, "add")
addOrSubtract(9, 5, "subtract")
console.log(addOrSubtract("3", 2, "Add"))
*/

/* 

// Arrays
// Collection of data
posts = ["I ate all of mmy treats", "I'm the coolest cat around", "Yeahhhh"]

// to add to the end of an array
// arrayName.push(content to add)
var string1 = "this is a string"
var string2 = 'this is also a string'
var string3 = `this is also also a string`

// Iterations
// for(var i = 5; i > 3; i*2) {
//     //block of code here
//     console.log(i)
// }

for(var i = 0; i < posts.length; i++) {
    console.log(posts[i])
}

*/

/*
// Objects and Methods amd This
var userInfo = {
    userName: "Teemo",
    age: 7,
    loggedIn: true,
    posts: ["I'm a big kitty", "Tanjiro isn't cool", "Meow"],
    whatIsThis: function() {
        console.log(this)
    },
    logFirstPost: function(punc) {
        console.log(this.posts[0]+punc)
    }
}

console.log(userInfo.userName)
console.log(userInfo["userName"])

userInfo.logFirstPost("!");
*/


// The DOM!
// Window Object
// console.log(window)
// console.log(window.document)
// console.log(window.document.body)
// console.log(document.body)
// console.log("I'm a string")

// Create-Append and Setting Attributes and Evenet Listeners and Preventing Default
var userInfo = {
    userName: "Teemo",
    age: 7,
    loggedIn: true,
    posts: ["I'm a big kitty", "Tanjiro isn't cool", "Meow"],
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

// userInfo.logFirstPost("?")

function addPostsToPage() {
    var postsArea = document.querySelector("#all-posts")

    postsArea.innerHTML = "";

    for(let i = 0; i < userInfo.posts.length; i++) {
        var postText = document.createElement("p");
        postText.textContent = userInfo.posts[i];

        postText.setAttribute("style", "margin-top: 10px; font-weight: bold")
        postText.style.color = "blue"

        postsArea.appendChild(postText)
    }
    
}

addPostsToPage();

var newUserPost = document.querySelector("#new-post")
var submitButton = document.getElementById("submit")
// console.log(newUserPost)

function addNewUserPost(event) {
    event.preventDefault()

    //console.log(newUserPost.value)
    if(newUserPost.value !== "") {
        userInfo.addPost(newUserPost.value);
        addPostsToPage();
    }
}

submitButton.addEventListener("click", addNewUserPost)


// Keyboard Events
newUserPost.addEventListener("keydown", function(event) {
    console.log(event.key)
})


// Timer-Intervals
var timer = document.querySelector("#timer")

var startTime = 0;

function timeCounting() {
    
    var timeInterval = setInterval(
        function() {
            timer.textContent = startTime;
            startTime++

            // console.log("I'm going going going")

            if(startTime === 60) {
                clearInterval(timeInterval)
                timer.textContent = "More than a minute"
            }


        }
    , 1000)

}

timeCounting();


// Event Bubbling



// Data-Attributes














document.querySelector("#idName"); 

document.getElementById("idName")
