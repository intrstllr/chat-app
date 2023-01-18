export default (() => {
    const KEY_FOR_LOCAL_STORAGE = "CHAT";

    let data = null;

    if (!localStorage.getItem(KEY_FOR_LOCAL_STORAGE)) {
        data = {
            users: [
                {
                    id: 1,
                    login: "admin",
                    password: "123456",
                    username: "First Admin",
                    status: false,
                    userChats: [Date.now()],
                    isAuthorized: false,
                },
                {
                    id: 2,
                    login: "admin2",
                    password: "654321",
                    username: "Second Admin",
                    status: false,
                    userChats: [Date.now()],
                    isAuthorized: false,
                },
            ],
            chats: [
                {
                    id: Date.now(),
                    messages: [],
                },
            ],
            firstPage: {
                authUserId: null
            },
            secondPage: {
                authUserId: null
            },
        };
        updateLocalStorage();
    } else {
        data = JSON.parse(localStorage.getItem(KEY_FOR_LOCAL_STORAGE));
    }

    function addMessage(msg) {
        data.chats.find((el) => el.id === chatId).messages.push(msg);
        updateLocalStorage();
    }
    function getUserById(userId) {
        return data.users.find((el) => el.id === userId);
    }

    function getChatById(chatId) {
        return data.chats.find((el) => el.id === chatId);
    }

    function getUserByLogin(login = "") {
        return data.users.find((el) => el.login === login);
    }

    function updateLocalStorage() {
        localStorage.setItem(KEY_FOR_LOCAL_STORAGE, JSON.stringify(data));
    }

    function updateFirstPageAuth(userId = null) {
        data.firstPage.authUserId = userId;
        if (userId !== null) {
            getUserById(userId).status = true;
        }
        updateLocalStorage();
    }

    function updateSecondPageAuth(userId = null) {
        data.secondPage.authUserId = userId;
        if (userId !== null) {
            getUserById(userId).status = true;
        }
        updateLocalStorage();
    }

    function logOutFirstPage(userId) {
        updateFirstPageAuth();
        getUserById(userId).status = false;
        updateLocalStorage();
    }
    function logOutSecondPage(userId) {
        updateSecondPageAuth();
        getUserById(userId).status = false;
        updateLocalStorage();
    }

    return {
        data,
        addMessage,
        getUserById,
        getChatById,
        getUserByLogin,
        updateFirstPageAuth,
        updateSecondPageAuth,
        logOutFirstPage,
        logOutSecondPage,
    };
})();
