import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import axios from "axios";

interface User {
  id: number;
  email: string;
  password: string;
  name: string;
}
const Signup = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUserName] = useState<string>("");
  const [id, setId] = useState<number>();
  const navigate = useNavigate();
  const handleSign = async () => {
    try {
      const response = await axios.post("https://fakestoreapi.com/users", {
        id,
        username,
        password,
        email,
      });
      console.log("signup succesfully");
      alert("sign up succesfully");
      navigate("/");
    } catch (error) {
      console.log("error", error);
      alert(" u cant Sign up");
    }
  };
  return (
    <div className="Signup">
      <div className="image-container">
        <img src="/images/ChatGPT Image Jun 25, 2025, 08_41_20 AM.png" alt="Lady with cart" className="image" />
      </div>

      <div className="form-container">
        <h1>Create an account</h1>
        <h4>Enter your details below</h4>

        <label>
          Name:
          <input type="text" value={username} placeholder="Name" onChange={(e) => setUserName(e.target.value)} />
        </label>

        <label>
          Email:
          <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
          Password:
          <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </label>

        <label>
          ID
          <input
            type="number"
            value={id}
            placeholder="ID"
            onChange={(e) => setId(Number(e.target.value))}
          />
        </label>

        <div className="button">
          <button className="Sign" onClick={handleSign}>
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
