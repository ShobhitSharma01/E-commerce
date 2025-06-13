import { useState } from "react";
import "./Login.css";

interface User {
  email: string;
  password: any;
  mobileNumber: number;
}

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<any>("");
  const [mobileNumber, setMobileNumber] = useState<number>();

  const handleSubmit = () => {
    const userData: User = 
    {

      email,
      password,
      mobileNumber: mobileNumber ?? 0,
    };
    console.log("user data is ", userData);
    alert("user data is submitted, check the console");
  };

  return (
    <div className="login">
         <div className="image-container">
    <img src="/images/cart.jpg" alt="Lady with cart" className="image" />
  </div>
  <div className="form-container">
    
    <h1>Log in to Bin.Mart</h1>
    <h3>Enter your details below</h3>

    <label>
      Email:
      <input
        type="text"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
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

    <label>
      Mobile Number:
      <input
        type="text"
        value={mobileNumber ?? ""}
        placeholder="Mobile Number"
        onChange={(e) => setMobileNumber(Number(e.target.value))}
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
