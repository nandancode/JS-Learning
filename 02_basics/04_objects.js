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

console.log(tindUser)

console.log(Object.keys(tindUser))

