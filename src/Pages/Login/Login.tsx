import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
interface User {
  password: string;
  name: string;
}
const Login = () => {
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
//   const handleSubmit = async () => {
//   try {
//     const response = await axios.post("https://fakestoreapi.com/auth/login", {
//       username,
//       password
//     });

//     const token = response.data.token;

//     if (token) {
//       const userResponse = await axios.get(`https://fakestoreapi.com/users`);
//       const matchedUser = userResponse.data.find((u: any) => u.username === username);

//       localStorage.setItem("Token", token);
//       localStorage.setItem("isLoggedIn", "true");
//       localStorage.setItem("user", JSON.stringify(matchedUser));

//       alert("Login successful");
//       setTimeout(()=>{
//  navigate("/");
//       },2000);
     
//     }
//   } catch (error) {
//     alert("Login failed");
//     console.log(error);
//   }
// };
const handleSubmit = async () => {
  try {
    const response = await axios.post("https://fakestoreapi.com/auth/login", {
      username,
      password
    });

    const token = response.data.token;

    if (token) {
      const userResponse = await axios.get(`https://fakestoreapi.com/users`);
      const matchedUser = userResponse.data.find((u: any) => u.username === username);

      localStorage.setItem("Token", token);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(matchedUser));

      alert("Login successful");

      setTimeout(() => {
        navigate("/");
        window.location.reload();
      },1000);
    }
  } catch (error) {
    alert("Login failed");
    console.log(error);
  }
};

  return (
    <div  id="loginContainer"  className="login">
      <div className="image-container">
        <img src="/images/log.avif" alt="user login" className="image" />
      </div>
      <div className="form-container2">
        <h1>Log in to Bin.Mart</h1>
        <h3>Enter your details below</h3>

        <label>
          Name:
          <input
            type="text"
            value={username}
            placeholder="User Name"
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <div className="button-group">
          <button className="Log" onClick={handleSubmit}>LOG IN</button>
            </div>
            <div className="forget">
            <h1>FORGOT PASSWORD</h1>
           </div>
          
      </div>
    </div>
  );
};

export default Login;
