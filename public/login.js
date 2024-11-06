import axios from "axios"

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const Password = document.getElementById('password').value;

    // Simple validation
    if (email && Password) {
        document.getElementById('message').innerText = `Welcome!`;
    } else {
        document.getElementById('message').innerText = 'Please fill in all fields.';
    }
});
await axios.post("http://localhost:3000/user/login",userInfo)
        .then((res)=>{
            console.log(res.data)
            if (res.data){
            alert("Login succesfull")}

        })
        .catch((err) =>{
            if(err.resonse){
                console.log(err);
                alert("Error: "), err.response.data.message
            }})