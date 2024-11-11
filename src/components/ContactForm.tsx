'use client'


import React, { FormEvent, useState } from 'react';

const ContactForm = () => {

  const [isMsgSent, setIsMsgSent] = useState(false)
  const [sendButtonText, setSendButtonText] = useState("Send Message")


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    setTimeout(() => {
      setIsMsgSent(true)
    }, 800);

    setSendButtonText("Sending...")

  };



  return (
    <div className="w-full max-w-2xl mx-auto p-4">

      {isMsgSent && <h4 className='capitalize text-4xl sm:text-5xl font-bold py-20 text-center leading-[4rem]'> Thank you for getting in touch</h4>
      }

      {!isMsgSent &&
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 outline-none transition-all"
              required
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 outline-none transition-all"
              required
            />
          </div>

          <div>
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 outline-none transition-all resize-none"
              required
            />
          </div>

          <div className='text-center'>
            <button
              type="submit"
              className=" w-full sm:w-auto px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200"
            >
              {sendButtonText}
            </button>
          </div>
        </form>}
    </div>
  );
};

export default ContactForm;