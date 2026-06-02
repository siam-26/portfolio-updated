"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rq3nasi", // আপনার Service ID
        "template_xzfbmd8", // এখানে আপনার Template ID বসান
        form.current,
        "-UZ-To9OgSkGiJrdI" // এখানে আপনার Public Key বসান
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div>
  <h2 className="text-5xl lg:text-7xl font-bold">Let's Work Together</h2>

  {/* Mail */}
  <div className="mt-8">
    <p className="text-sm text-gray-400">Mail</p>
    <p className="text-sm text-white mt-1">
      siamshahriar390@gmail.com
    </p>
  </div>

  {/* Address */}
  <div className="mt-6">
    <p className="text-sm text-gray-400">Address</p>
    <p className="text-sm text-white mt-1">
      Dhaka, Bangladesh
    </p>
  </div>
</div>

          {/* RIGHT SIDE FORM */}
          <div className="lg:border-l lg:border-white/20 lg:pl-12">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="name" // আপনার টেমপ্লেটে {{name}} আছে, তাই এখানে 'name' দিন
                placeholder="Your Name"
                className="w-full p-3 bg-zinc-900 text-white border border-white/10 rounded"
                required
              />

              <input
                type="email"
                name="email" // আপনার টেমপ্লেটে {{email}} আছে, তাই এখানে 'email' দিন
                placeholder="Your Email Address"
                className="w-full p-3 bg-zinc-900 text-white border border-white/10 rounded"
                required
              />

              <textarea
                name="message" // আপনার টেমপ্লেটে {{message}} আছে
                placeholder="Message"
                rows="5"
                className="w-full p-3 bg-zinc-900 text-white border border-white/10 rounded"
                required
              />

              <button
                type="submit"
                className="w-full bg-[#cb450c] text-white hover:bg-white  hover:text-black py-3 rounded-full font-medium cursor-pointer"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}