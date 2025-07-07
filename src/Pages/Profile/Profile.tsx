import { useEffect, useState } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

interface User {
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
  phone: string;
}

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="page-wrapper">
      <div className="back-inside-wrapper">
        <button onClick={() => navigate(-1)}>Back</button>
      </div>

      <div className="profile-card">
        <button className="edit">Edit</button>
        <h2>User Profile</h2>
        <img src="/images/user.avif" alt="User" />

        <div className="profile-item">
          <h5>Full Name:</h5>
          <p>{user.name.firstname} {user.name.lastname}</p>
        </div>

        <div className="profile-item">
          <h5>Email:</h5>
          <p>{user.email}</p>
        </div>

        <div className="profile-item">
          <h5>Phone:</h5>
          <p>{user.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
