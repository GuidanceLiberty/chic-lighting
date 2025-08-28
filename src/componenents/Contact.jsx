import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const send = (e) => {
    e.preventDefault();
    if (!name || !email || !msg) {
      alert("Please complete the form.");
      return;
    }
    alert("✅ Thanks! For demo purposes the message is not sent to a server.");
    setName("");
    setEmail("");
    setMsg("");
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center" id="contact">
        <div className="col-lg-8">
          {/* Section Header */}
          <h2 className="fw-bold text-center mb-4">Contact Us</h2>
          <p className="text-center text-muted mb-4">
            Have questions or need assistance? Fill out the form below, and we’ll
            get back to you shortly.
          </p>

          {/* Contact Info */}
          <div className="mb-4 text-center">
            <p>
              <strong>Address:</strong> 105 Allen Ave, Ikeja Lagos.
            </p>
            <p>
              <strong>Phone:</strong> 09112524812 &nbsp; | &nbsp;{" "}
              <strong>Email:</strong> hello@chiclighting.demo
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={send} className="card shadow-sm p-4 border-0 rounded-3">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="4"
                placeholder="Your Message"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              ></textarea>
            </div>
            <div className="text-center">
              <button className="btn btn-warning fw-bold px-4 py-2" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
