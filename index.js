function register() {
    const newUsername = document.getElementById('newUsername').value.trim();
    const newPassword = document.getElementById('newPassword').value.trim();
    const registerMessageDiv = document.getElementById('registerMessage');

    if (newUsername && newPassword) {
        if (users.some(user => user.username === newUsername)) {
            registerMessageDiv.innerHTML = "用戶名已存在！";
        } else {
            users.push({ username: newUsername, password: newPassword });
            userPoints[newUsername] = 0; // 新用戶初始點數為0
            userRedemptionCodes[newUsername] = []; // 初始化用戶的兌換碼數組
            userInbox[newUsername] = []; // 初始化用戶的收件夾
            saveData(); // 儲存資料
            registerMessageDiv.innerHTML = "註冊成功！";
            document.getElementById('newUsername').value = '';
            document.getElementById('newPassword').value = '';
        }
    } else {
        registerMessageDiv.innerHTML = "請填寫所有欄位！";
    }
}

function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const messageDiv = document.getElementById('customerMessage');

    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        toggleVisibility('loginContainer', false);
        toggleVisibility('customerContainer', true);
        messageDiv.innerHTML = '';
    } else {
        messageDiv.innerHTML = "用戶名或密碼錯誤！";
    }
}
