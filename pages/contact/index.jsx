import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { fadeIn } from "../../variants";
import { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);

    formData.append("access_key", "99818e9f-1467-4270-9d09-6f6c311c6940");  // 🔥 Replace this

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = await res.json();

    if (result.success) {
      alert("Message sent successfully! ✅");
      e.target.reset();
    } else {
      alert("Failed to send message ❌");
      console.error(result);
    }

    setIsLoading(false);
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">

          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>

          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input type="text" name="name" placeholder="Name" className="input" required />

              <input type="email" name="email" placeholder="E-mail" className="input" required />
            </div>

            <input type="text" name="subject" placeholder="Subject" className="input" required />

            <textarea name="message" placeholder="Message..." className="textarea" required></textarea>

            <button
              type="submit"
              disabled={isLoading}
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group relative"
            >
              {isLoading ? (
                "Sending..."
              ) : (
                <>
                  <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                    Let&apos;s talk
                  </span>

                  <BsArrowRight
                    className="-translate-y-[120%] opacity-0 group-hover:opacity-100 group-hover:-translate-y-0 transition-all duration-300 absolute text-[22px]"
                  />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
