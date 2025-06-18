import { useEffect, useState } from "react";
import "./Profile.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface User {
  name: string;
  email: string;
  mobileNumber?: string;
}

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {

        const response = await axios.get("https://fakestoreapi.com/users/1");
        const userToken = response.data;
        if (userToken.token) {
          localStorage.setItem("Token", userToken.token);
        }
        const paerseduser:User={
          name: userToken.userName,
          email:userToken.email,
          mobileNumber:userToken.phone,
        };
        setUser(paerseduser);
    }catch(err){
      console.log("data is loading",err);
      navigate("/login");
    }
    }
    fetchUser();
  },[navigate]);

  if (!user) {
    return <p>Loading user data...</p>;
  }

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <table className="table">
        <tbody>
          <tr>
            <th><strong>Name:</strong></th>
            <td>{user.name}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{user.email}</td>
          </tr>
          {user.mobileNumber && (
            <tr>
              <th>Mobile Number:</th>
              <td>{user.mobileNumber}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
