import React, { useState } from 'react';
import "../../sass/__contact.scss";
import tel from "../../assets/tel.png";
import email from "../../assets/email.png";

const Contact: React.FC = () => {
  interface LoginForm {
    name: string;
    email: string;
    message: string;
  }

  const initialState: LoginForm = {
    name: "",
    email: "",
    message: ""
  };

  const [formData, setFormData] = useState<LoginForm>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialState); // Formani yuborganingizdan keyin inputlarni tozalaydi
  };

  return (
    <div className='contact__wrapper'>
      <div className="container">
        <div className="contact__section">
          <div className="contact__section-one">
            <div>
              <h1>Contact us</h1>
              <p>Send us your request and we will get in touch with you as soon as possible</p>
            </div>
            <div className='contact__tel'>
              <article>
                <img src={tel} alt="Telephone" />
                <h3>+380 98 782 82 23</h3>
              </article>
              <article>
                <img src={email} alt="Email" />
                <h3>mailmail@gmail.com</h3>
              </article>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <label>
              <p>Name</p>
              <input
                type="text"
                name="name"
                placeholder='Your name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              <p>E-mail</p>
              <input
                type="email"
                name="email"
                placeholder='Your email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              <p>Message</p>
              <textarea
                name="message"
                placeholder='Your message'
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </label>
            <div>
              <button type="submit">Send request</button>
              <p>By sending a request you agree to our Privacy & Policy</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
