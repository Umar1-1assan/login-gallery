const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');
const switchLinks = document.querySelectorAll('.switch-link');

switchLinks.forEach(link => 
{
    link.addEventListener('click', () => 
    {
        loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
        signupForm.style.display = signupForm.style.display === 'block' ? 'none' : 'block';
    });
});

function LogOut()
{
    removeCookie("User:");
    window.location.href = "login.html"
}

function LogIn() 
{
    const username = document.getElementById("l_username").value;
    const password = document.getElementById("l_password").value;

    if (getCookie(username) === password) 
    {
        setCookie("User:", username, 1);
        alert("Login Successful");
        window.location.href = "home.html";
    } 
    else 
    {
        alert("Login Failed");
    }
}

function SignUp() {
    const username = document.getElementById("s_username").value;
    const password = document.getElementById("s_password").value;
    const confirmPassword = document.getElementById("s_r_password").value;

    if (password !== confirmPassword) 
    {
        alert("Passwords do not match!");
        return;
    }

    if (!getCookie(username)) 
    {
        setCookie(username, password, 7);
        alert("SignUp Successful");
    } 
    else 
    {
        alert("User already exists!!!!");
    }
}

function setCookie(name, value, days) 
{
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

function getCookie(name) 
{
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) 
    {
        let [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) 
        {
            return cookieValue;
        }
    }
    return "";
}

function removeCookie(name) 
{
    setCookie(name, "", -1);
}
