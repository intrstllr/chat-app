const KEY_FOR_LOCAL_STORAGE = "Chat";
class Storage {
    constructor() {
        let data = null;
        if (!localStorage.getItem(KEY_FOR_LOCAL_STORAGE)) {
            data = {
                users: [
                    { id: 1, username: "admin", login: "admin1", password: "123456" },
                    { id: 2, userName: "admin2", login: "admin2", password: "654321" },
                ],
                chat: [],
                authfirst: false,
                authsecond: false,
                text: "test",
            };
            updateData();
        } else {
            data = JSON.parse(localStorage.getItem(KEY_FOR_LOCAL_STORAGE));
        }
        function addMessage(msg) {
            data.chat.push(msg);
            updateData();
        }
        function updateData() {
            return localStorage.setItem(KEY_FOR_LOCAL_STORAGE, JSON.stringify(data));
        }
        function getUserByLogin(login = "") {
            return data.users.find((el) => el.login === login);
        }
        function getUserByID(userId) {
            return data.users.find((el) => el.id === userId);
        }
        function deleteMessage(id) {
            data.chat = data.chat.filter((el) => el.id != id);
            updateData();
        }
        function complieteAuthFirst() {
            data.authfirst = true;
            updateData();
        }
        function complieteAuthSecond() {
            data.authsecond = true;
            updateData();
        }
        function logOut() {
            data.authfirst = false;
            updateData();
        }
        return {
            data,
            addMessage,
            updateData,
            logOut,
            complieteAuthSecond,
            complieteAuthFirst,
            deleteMessage,
            getUserByID,
            getUserByLogin,
        };
    }
}
export default new Storage();
