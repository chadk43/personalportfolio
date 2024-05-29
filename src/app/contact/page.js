"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ContactForm from "../components/Contact.js";

export default function Contact() {
  const [tooltip, setTooltip] = useState({ message: "", type: "", visible: false });
  const router = useRouter();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const message = event.target.message.value;

    if (!validateEmail(email)) {
      setTooltip({ message: "Invalid email", type: "error", visible: true });
      return;
    }

    try {
      const formData = new FormData(event.target);

      const response = await fetch("https://formspree.io/f/mayrzvok", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setTooltip({ message: "Email sent successfully", type: "success", visible: true });
        setTimeout(() => {
          router.push("/");
        }, 2000); // Redirect after 2 seconds
      } else {
        setTooltip({ message: "Failed to send email", type: "error", visible: true });
      }
    } catch (error) {
      setTooltip({ message: "Failed to send email", type: "error", visible: true });
    }
  };

  return (
    <div className="grid place-items-center">
      <article className="prose text-center text-2xl ">
        <h1>Contact</h1>
        <ContactForm onSubmit={handleSubmit} tooltip={tooltip} />
      </article>
    </div>
  );
}
