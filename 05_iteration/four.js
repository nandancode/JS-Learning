const myObject = {
    "js" : "javascript",
    "cpp" : "c++",
    "rb" : "ruby on rails",
    "swift" : " swift by apple"
}

// for (const key in myObject) {
//     console.log(`${key} is the shortcut for ${myObject[key]}`)
// }


const programming = ["js", "rb", "py", "java", "cpp"]
//in array the key is index
for (const key in programming) {
    //console.log(programming[key]);
}

const map = new Map()

map.set("In", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")

for (const key in map) {
    console.log(key)
}

//no output, because for in wont work on maps
