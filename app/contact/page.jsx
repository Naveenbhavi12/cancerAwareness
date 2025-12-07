"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 px-6">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-12">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Reach <span className="text-emerald-400">Out</span> to Us
          </h1>

          <p className="text-slate-300 text-base leading-relaxed">
            Whether you are seeking guidance, emotional support, or information on
            cancer awareness initiatives, we are here to assist you.
            Your message matters to us.
          </p>

          <ul className="space-y-3 text-slate-300 text-sm">
            <li>• Support for patients and survivors</li>
            <li>• Information for caregivers and families</li>
            <li>• Awareness and community outreach</li>
          </ul>

          {/* BACK LINK */}
          <Link
            href="/"
            className="inline-block text-sm text-emerald-400 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>

        {/* FORM */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-8 shadow-xl">
          <h2 className="text-xl font-semibold text-white mb-6">
            Contact Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Name
              </label>
              <Input
                required
                placeholder="Enter your full name"
                className="bg-slate-950 border-slate-800 text-white"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Email
              </label>
              <Input
                type="email"
                required
                placeholder="you@example.com"
                className="bg-slate-950 border-slate-800 text-white"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Message
              </label>
              <Textarea
                required
                rows={4}
                placeholder="Share your message, concern, or enquiry..."
                className="bg-slate-950 border-slate-800 text-white resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full rounded-md bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-700/40"
            >
              Submit Message
            </Button>

            {submitted && (
              <p className="text-sm text-emerald-400 pt-2">
                Thank you for reaching out. Your message has been recorded for this demo.
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
