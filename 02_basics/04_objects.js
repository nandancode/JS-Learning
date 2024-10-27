//const tindUser = new Object()

const tindUser = {}

tindUser.id = "123abc"
tindUser.name = "abhinandan"
tindUser.isLoggedIn = false

// console.log(tindUser)


const regUser = {
    email : "abc@gmail.com",
    fullName : {
        userFullname : {
            firstname : "Abhinandan",
            lastname : "Singh"
        }
    }
}

// console.log(regUser.fullName.userFullname.lastname)

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}
const obj4 = {5 : "e", 6 : "f"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}

// console.log(obj3)

// console.log(tindUser)

// console.log(Object.keys(tindUser))
// console.log(Object.values(tindUser))
// console.log(Object.entries(tindUser))


const User = [
    {
        id : 1,
        email : "a@gmail.com"
    },
    {
        id : 2,
        email : "b@gmail.com"
    }
]

// console.log(User[1].email)

// console.log(tindUser.hasOwnProperty("isLoggedIn"))

const course = {
    description : "js in hindi",
    price : 500,
    courseInstructor : "Abhinandan"
}

//course.courseInstructor

// const {courseInstructor} = course

// console.log(courseInstructor)


const {courseInstructor : instructor} = course

console.log(instructor)