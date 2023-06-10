import React, { useRef } from "react";
import EmailJs from "@emailjs/browser";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  const form = useRef();

  const sendMessage = (e) => {
    e.preventDefault();

    EmailJs.sendForm(
      "service_1ngyhhi",
      "template_9qhona3",
      form.current,
      "JnFxK-CY3LAOE0Q8h"
    ).then(
      (result) => {
        console.log(result.text);
        console.log("Message sent successfully");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <section className="contact">
      <div className="row">
        <div className="col">
          <form ref={form} onSubmit={sendMessage}>
            <h3>Send us a message</h3>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="user_name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="user_email" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea name="message" rows={4}></textarea>
            </div>

            <button type="submit" name="send">
              Send message
            </button>
          </form>
          <div className="contact-icons">
            <span>
              <Link to="https://github.com/BertinKimberly/bible-website">
                <FaGithub size={30} />
              </Link>
            </span>
            <span>
              <Link to="https://www.facebook.com/bertin.iradukunda.7">
                <FaFacebook size={30} />
              </Link>
            </span>
            <span>
              <Link to="https://www.linkedin.com/feed/">
                <FaLinkedin size={30} />
              </Link>
            </span>
          </div>
        </div>
        <div className="col contact-img">
          <h2>Contact Us</h2>
        </div>
      </div>
    </section>
  );
};

export default Contact;
