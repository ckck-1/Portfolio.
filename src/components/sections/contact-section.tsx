"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

            const emailData = {
                title: "New Contact Message",
                name: formData.name,
                email: formData.email,
                message: formData.message,
                reply_to: formData.email,
            };

            await emailjs.send(serviceId, templateId, emailData, publicKey);

            setSubmitStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Email send failed:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="bg-black text-white py-20">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Ready to collaborate? Send me a message and let's bring your ideas to life.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-lg"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-200">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-200">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                                placeholder="your@email.com"
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-200">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent resize-none"
                            placeholder="Tell me about your project or just say hi!"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/30 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>

                    {submitStatus === "success" && (
                        <p className="mt-4 text-gray-200 text-center">
                            Message sent successfully! I'll get back to you soon.
                        </p>
                    )}
                    {submitStatus === "error" && (
                        <p className="mt-4 text-red-400 text-center">
                            Failed to send message. Please try again or contact me directly.
                        </p>
                    )}
                </motion.form>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-400 mb-4">Or reach out directly:</p>
                    <div className="flex justify-center space-x-8">
                        <a href="mailto:ckckclare@gmail.com" className="text-gray-200 hover:text-white transition-colors">
                            Email
                        </a>
                        <a href="https://linkedin.com/in/yourprofile" className="text-gray-200 hover:text-white transition-colors">
                            LinkedIn
                        </a>
                        <a href="https://github.com/yourusername" className="text-gray-200 hover:text-white transition-colors">
                            GitHub
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
