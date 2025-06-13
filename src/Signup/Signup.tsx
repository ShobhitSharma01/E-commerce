import { useState } from "react";
import "./Signup.css"
interface User{
  email:string;
  password:any;
  name:string;
}
const Signup=()=>{
    const [email,setEmail]=useState<string>("")
    const [password,setPassword]=useState<any>("")
    const [name,setName]=useState<string>("")
 const handleSubmit = () => {
    const userData: User = {
      email,
      password,
      name,
    };
    console.log("User Data:", userData);
    alert("User data submitted! Check the console.");
  };

    return(
   
 <div className="Signup">
         <div className="image-container">
    <img src="/images/cart.jpg" alt="Lady with cart" className="image" />
  </div>
  

        <div className="form-container">
          <h1>Create an account</h1>
          <h4>Enter your details below</h4>

<label>Name
<input type="text" value={name}   placeholder="email" onChange={(e)=>setName(e.target.value)}/>
</label>

<label>Email
<input type="text" value={email}   placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
</label>
<label>Password:
<input type="text" value={password}  placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
</label>
<div className="button">
    <button className="Sign" onClick={handleSubmit}>Create account</button>
</div>
        </div>
         </div>
        
    )
}

export default Signup;