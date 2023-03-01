const KEY_LOCAL_STORAGE = "Chat";
class Storage {
    constructor() {
        this.data = {
            users: [
                { id: 1, username: "admin", login: "admin1", password: "123456" },
                { id: 2, userName: "admin2", login: "admin2", password: "654321" },
            ],
            chat: [],
            authfirst: false,
            authsecond: false,
            text: "test",
        };
        if (!localStorage.getItem(KEY_LOCAL_STORAGE)) {
            this.updateData();
        } else {
            this.data = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE));
            this.updateData;
        }
    }
    addMessage(message=Object) {
        this.data.chat.push(message);
        this.updateData();
    }
    deleteMessage(id) {
        this.chat = this.chat.filter((el) => el.id != id);
        this.updateData();
    }
    updateData() {
        return localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(this.data));
    }
    getUserByLogin(login = "") {
        return this.data.users.find((el) => el.login === login);
    }
    getUserByID(userId) {
        return this.data.users.find((el) => el.id === userId);
    }
    deleteMessage(id) {
        this.data.chat = this.data.chat.filter((el) => el.id != id);
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
export default new Storage();
