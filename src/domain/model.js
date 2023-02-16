const KEY_LOCAL_STORAGE = "Chat";
class storage {
    constructor(data) {
        this.data = data;
        if (!localStorage.getItem(KEY_LOCAL_STORAGE)) {
            this.updateData();
        } else {
            data = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE));
        }
    }
    addMessage(msg) {
        data.chat.push(msg);
        this.updateData();
    }
    updateData() {
        return localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(this.data));
    }
    getUserByLogin(login = "") {
        return data.users.find((el) => el.login === login);
    }
    getUserByID(userId) {
        return data.users.find((el) => el.id === userId);
    }
    deleteMessage(id) {
        data.chat = data.chat.filter((el) => el.id != id);
        this.updateData();
    }
    complieteAuthFirst() {
        data.authfirst = true;
        this.updateData();
    }
    complieteAuthSecond() {
        data.authsecond = true;
        this.updateData();
    }
    logOut() {
        data.authfirst = false;
        this.updateData();
    }
}

let data = {
    users: [
        { id: 1, username: "admin", login: "admin1", password: "123456" },
        { id: 2, userName: "admin2", login: "admin2", password: "654321" },
    ],
    chat: [],
    authfirst: false,
    authsecond: false,
    text: "test",
};
export default new storage(data);
