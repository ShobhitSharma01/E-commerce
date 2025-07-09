import { useState } from "react";
import "./contact.css";
import { useNavigate } from "react-router-dom";

interface User {
  email: string;
  name: string;
  mobileNumber: number;
  message: any;
}

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState<number>();
  const [message, setMessage] = useState("");

  const navigate=useNavigate();
  const handleSubmit = () => {
    const userData: User = {
      email,
      name,
      mobileNumber: mobileNumber ?? 0,
      message,
    };
    console.log("Message data is", userData);
  };

  return (
        <div className="page-wrapper2">
    <div className="back-inside-wrapper">
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
    <div className="contact">

      <div  id="contactContainer" className="contact-info">
     
        <div className="info-block">
          <h3>Call To Us</h3>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
        </div>
        <hr />
        <div className="info-block">
          <h3>Write To Us</h3>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Email
            : customer@bin.mart.com</p>
          <p>Email
            : support@bin.mart.com</p>
        </div>
      </div>

      <div className="form-container3">
        <div className="input-row">
          <input
            type="text"
            value={name}
            placeholder="Your Name *"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={email}
            placeholder="Your Email *"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={mobileNumber ?? ""}
            placeholder="Your Phone *"
            onChange={(e) => setMobileNumber(Number(e.target.value))}
          />
        </div>

        <div className="message">
          <textarea
            value={message}
            placeholder="Your Message *"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="button-group">
          <button className="Message" onClick={handleSubmit}>
            SEND MESSAGE
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
