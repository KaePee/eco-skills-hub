"use client"

import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';


export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailAddress = 'ekoskillsghana@gmail.com';
    const subject = `Message from ${name}`;
    const body = encodeURIComponent(`
      New message from your website:

      Message: ${message}
    `);

    const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    setIsSubmitted(true);
  };

  return (
    <>
      <main className="flex flex-col items-center justify-center my-10">
        <h1 className="text-3xl font-bold mb-5">Contact Us</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
          <div className="bg-slate-300/70 rounded-lg shadow-lg p-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Email Us</h2>
            {isSubmitted ? (
              <div>
                <p className="mb-2">Thank you for your message!</p>
                <a
                  href={`mailto:${email}?subject=Message from ${name}&body=${encodeURIComponent(
                    message
                  )}`}
                  className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 mt-4"
                >
                  Open in email
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full">
                <label htmlFor="name" className="block mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
                  required
                />
                <label htmlFor="email" className="block mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
                  required
                />
                <label htmlFor="message" className="block mb-2">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
                  rows={4}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
                >
                  Send
                </button>
              </form>
            )}
          </div>
          <div className="bg-slate-300/70 rounded-lg shadow-lg p-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-center">Call Us</h2>
            <p className="mb-2 text-center font-medium">Phone: +233 558 450 901</p>
            <p className="text-center font-medium">Office: Ayeduase Newsite opposite AMS Medical Consult</p>
          </div>
          <div className="bg-slate-300/70 rounded-lg shadow-lg p-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Connect with Us</h2>
            <div className="flex space-x-4 text-2xl">
              <a href="https://www.facebook.com/profile.php?id=100089025216850&mibextid=ngobeXctTp5pD3Zm" target="_blank" className="text-blue-500 hover:text-blue-600">
                <FaFacebook />
              </a>
              <a href="https://x.com/EkoSkills?t=i_bnskZGva2cM3ij680dHQ&s=08" target="_blank" className="text-blue-400 hover:text-blue-500">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/in/eko-skills-ghana-156762318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="text-blue-700 hover:text-blue-800">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/eko_skills_ghana?igsh=ajhlaWk0NnhwYWow" target="_blank" className="text-pink-500 hover:text-pink-600">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}