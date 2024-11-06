import axios from "axios";
// const js = async(req,res) => {
document.addEventListener('DOMContentLoaded', () => {
const registrationForm = document.getElementById('registration-form');

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const Fullname = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const Password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // checking if any entry is missing
    if (!Fullname || !email || !Password || !confirmPassword) {
        document.getElementById('error-message').innerHTML = 'Some form fields are missing.';
        return;
    }
    console.log(Fullname, email, Password, confirmPassword);

    if (password !== confirmPassword) {
        document.getElementById('error-message').innerHTML = 'Passwords do not match.';
        return;
    }
        const userInfo = {
            Fullname:Fullname,
            email:email,
            Password:Password
            
        }
        
        axios.post("http://localhost:3000/user/signup",userInfo)
        .then((res)=>{
            console.log(res)
            if (res){
            alert("Login succesfull")}

        })
        .catch((err) =>{
            if(err.response){
                console.log(err);
                alert("Error: "), err.response.data.message
            }})
        }

)
})
// }
// export default js ;