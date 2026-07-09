import { useState } from "react";

function Contact() {
  // keeping form data in one object instead of separate states
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // no backend yet, just logging it for now
    console.log(formData);
    setSent(true);
  }

  return (
    <div className="px-6 py-16 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

      {sent ? (
        <p className="text-center text-[#B5651D] font-medium">
          Thanks! I'll get back to you soon (probably lol).
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-[#EADBC8] rounded-lg px-4 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-[#EADBC8] rounded-lg px-4 py-2"
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="border border-[#EADBC8] rounded-lg px-4 py-2"
          />
          <button
            type="submit"
            className="bg-[#B5651D] text-white px-6 py-2 rounded-full hover:bg-[#8f4e17] transition"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
}

export default Contact;
