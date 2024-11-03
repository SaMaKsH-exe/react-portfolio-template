"use client";

import { useState } from "react";
import { sendEmail } from "../api/email";
import { EmailResponse } from "../types/email";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: "" });

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address",
      });
      return;
    }

    try {
      const response: EmailResponse = await sendEmail(formData);

      if (response.success) {
        setStatus({
          type: "success",
          message: "Message sent successfully!",
        });
        // Clear form
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: response.message || "Failed to send message",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "An error occurred while sending the message",
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-light text-center mb-12">Get in Touch</h1>
      {status.type && (
        <div
          className={`mb-6 p-4 rounded ${
            status.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status.message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border-b border-gray-300 dark:border-gray-700 bg-transparent focus:border-black dark:focus:border-white outline-none transition-colors"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border-b border-gray-300 dark:border-gray-700 bg-transparent focus:border-black dark:focus:border-white outline-none transition-colors"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-3 py-2 border-b border-gray-300 dark:border-gray-700 bg-transparent focus:border-black dark:focus:border-white outline-none transition-colors resize-none"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent text-sm font-medium text-white bg-black dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
