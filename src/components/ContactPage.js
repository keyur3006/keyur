import React, { useState } from "react";
import emailjs from "emailjs-com"; // << Import EmailJS

const ContactPage = () => {
  const [name, setName] = useState("Keyur divan");
  const [email, setEmail] = useState("keyurdivan@gmail.com");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID",       // 🔁 તમારું EmailJS Service ID મૂકો
        "template_n0dfzbv",      // 🔁 Template ID
        templateParams,
        "JSlXTgKtm8AYHhAh5"      // 🔁 Public Key (User ID)
      )
      .then(
        () => {
          alert(`Thank you, ${name}! Your message has been sent.`);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow-lg bg-white">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border p-2 rounded w-full"
            placeholder="Your full name"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border p-2 rounded w-full"
            placeholder="your.email@example.com"
          />
        </label>
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="border p-2 rounded w-full"
            placeholder="Write your message here"
          />
        </label>
        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
