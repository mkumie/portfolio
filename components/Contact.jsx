"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Connect from "./Connect";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState(false);
  const [msgSent, setMsgSent] = useState(false);

  // Check if input fields are not empty so that message div can be controlled (hidden)
  const emptyFields =
    name === "" &&
    phone === "" &&
    email === "" &&
    subject === "" &&
    message === "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, subject, email, phone, message };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful submission (e.g., show a success message)
        setName("");
        setPhone("");
        setEmail("");
        setSubject("");
        setMessage("");
        setMsgSent(true);
      } else {
        // Handle submission error (e.g., show an error message)
        setError(true);
      }
    } catch (error) {
      // Handle any unexpected errors
      setError;
    }
  };

  // Check if form is refilled after message successfully submitted and reset form responses/messages
  useEffect(() => {
    if (!emptyFields && (error || msgSent)) {
      setError(false);
      setMsgSent(false);
    }
  });

  return (
    <div id="contact" className="w-full lg:h-screen pt-10">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt="/"
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  width={600}
                  height={600}
                />
              </div>
              <div className="">
                <h2 className="py-2">Moses</h2>
                <p>Full-Stack Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let's talk.
                </p>
              </div>

              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <Connect />
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-fullpy2" id="email">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    type="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={10}
                    required
                  ></textarea>
                </div>
                <div
                  className={
                    msgSent
                      ? "text-green-400 border-2 p-2 bg-white rounded md:text-xl font-bold"
                      : error
                      ? "text-red-400 border-2 p-2 bg-white rounded md:text-xl font-bold"
                      : !emptyFields
                      ? "hidden"
                      : "hidden"
                  }
                >
                  {msgSent && (
                    <p>
                      Thank you. Your message has been received. We will respond
                      to you in the next 24 hours.
                    </p>
                  )}
                  {error && (
                    <p>
                      Sorry. Your message has NOT been delivered. Please try
                      again later.
                    </p>
                  )}
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp size={30} className="text-[#5651e5]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
