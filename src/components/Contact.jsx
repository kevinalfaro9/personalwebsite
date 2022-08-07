import { useState } from "react";
const Contact = () => {

  // This will set the state on form submission hence why the form appears now as empty
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  return (
    <div className="contact-section text-gray-300 bg-[#0a192f] h-screen flex items-center justify-center px-8" id="contact">
      <div className="max-w-[600px] w-full">
        <form method="POST" action="https://getform.io/f/b4bbe49e-3c41-486e-9359-f240adfef022" className="flex flex-col">
          <div className="flex flex-col items-center">
            <p className="font-bold text-4xl sm:text-5xl underline underline-offset-4 decoration-indigo-500">Contact</p>
            <p className="py-4 text-xl sm:text-2xl">Submit the form below to contact me.</p>
          </div>
          <input type="text"  placeholder="Name" name="name" className="bg-[#ccd6f6] p-2 text-black"  value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="email" placeholder="Email" name="email" className="my-4 p-2 bg-[#ccd6f6] text-black" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <textarea name="message" id="" cols="30" rows="10" className="bg-[#ccd6f6] p-2 text-black" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          <button className="border-2 text-white px-4 py-3 mt-3 mx-auto" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact