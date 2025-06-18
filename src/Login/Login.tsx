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
  const handleSubmit = async () => {
    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username,
        password
      });
      const token = response.data.token;
      console.log("login successful", token)

        localStorage.setItem("Token", token);
      alert("login successfully");
      navigate("/");
    }
    catch (error) {
      console.log("error", error);
      alert("u'cant login");
    }
  };
  return (
    <div className="login">
      <div className="image-container">
        <img src="/images/log.avif" alt="user login" className="image" />
      </div>
      <div className="form-container">
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
          <button className="forgot">Forgot password?</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
