let a = 300
const b = 400
var c = 500

if(true){
    let a = 30
    const b = 40
    var c = 50
    // console.log("Inner ", a)
}

// console.log(a)
// console.log(b)
// console.log(c)


function one(){
    const username = "nandan"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

console.log(addone(5))

function addone(num){
    return num + 1
}

//console.log(addtwo(5)) will give error

const addtwo = function(num){
    return num + 2
}

console.log(addtwo(5))