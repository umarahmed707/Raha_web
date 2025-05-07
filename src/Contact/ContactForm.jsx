import React from 'react'

export default function ContactForm() {
    return (
        <>
           <div className="client2 px-4  max-w-6xl  ">
  <h1 className="font-bold text-3xl text-center mb-8">
    Fill this form to get in touch with us
  </h1>
  <form>
    <div className="flex flex-col md:flex-row gap-5">
      <input
        type="text"
        className="Clientinput1 flex-1"
        placeholder="First Name*"
      />
      <input
        type="text"
        placeholder="Last Name"
        className="Clientinput1 flex-1"
      />
    </div>

    <div className="flex flex-col md:flex-row gap-5 mt-5">
      <input
        type="text"
        className="Clientinput1 flex-1"
        placeholder="Phone Number"
      />
      <input
        type="email"
        placeholder="Email"
        className="Clientinput1 flex-1"
      />
    </div>

    <div className="mt-5">
      <input
        type="text"
        className="Clientinput1 w-full"
        placeholder="Subject"
      />
    </div>

    <div className="mt-5">
      <textarea
        id="message"
        className="Clientinput1 w-full h-[150px]"
        placeholder="Message"
      ></textarea>
    </div>

    <button
      className="text-white font-bold py-3 px-6 mt-5 rounded-md bg-gradient-to-b from-[#1445C2] to-[#587EDB] hover:from-[#ffffff] hover:to-[#DADADA] hover:text-black hover:border border transition"
      type="submit"
    >
      Submit
    </button>
  </form>
</div>

        </>
    )
}
