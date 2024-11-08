const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function(val){
//     console.log(val)
// })

// coding.forEach((item) => {
//     console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach((arr, item, index) => {
//     console.log(arr, item, index)
// })


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )