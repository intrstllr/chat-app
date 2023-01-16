const user1 ={
    id:0,
    login:"admin",
    password:"12345",
    username:"firstUser",
    status:false
}
const user2 ={
    id:1,
    login:"admin2",
    password:"67890",
    username:"secondUser",
    status:false
}
let strUsers = JSON.stringify(this.user1,this.user2);
localStorage.setItem("messages", strUsers);