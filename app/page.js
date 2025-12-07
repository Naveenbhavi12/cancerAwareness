"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let intervalId;

    const fetchQuote = async () => {
      try {
        const res = await fetch("/api/quotes");
        const data = await res.json();
        setQuote(data.quote);
      } catch (error) {
        setQuote(
          "Hope is stronger than fear, and together we are stronger than cancer."
        );
      } finally {
        setLoading(false);
      }
    };

    // Fetch first quote
    fetchQuote();

    // Fetch new quote every 3 seconds
    intervalId = setInterval(fetchQuote, 3000);

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3279197/pexels-photo-3279197.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* 60% DARK OVERLAY */}
        <div className="absolute inset-0 bg-slate-950/80" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl w-full px-6 flex flex-col items-center text-center space-y-10">
          {/* HEADING */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
              Cancer <span className="text-emerald-400">Awareness</span> &{" "}
              <span className="text-emerald-400">Support</span>
            </h1>

            <p className="max-w-3xl mx-auto text-base md:text-lg text-slate-200">
              Promoting{" "}
              <span className="text-emerald-400 font-medium">
                early detection
              </span>
              , providing{" "}
              <span className="text-emerald-400 font-medium">
                emotional support
              </span>
              , and encouraging{" "}
              <span className="text-emerald-400 font-medium">
                informed care
              </span>{" "}
              for individuals and families affected by cancer.
            </p>
          </div>

          {/* CTA BUTTON */}
          <Link href="/contact">
            <Button
              size="lg"
              className="rounded-md px-10 py-6 text-lg bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-700/40"
            >
              Contact Us
            </Button>
          </Link>

          {/* FULL-WIDTH QUOTE */}
          <div className="w-screen px-6 pt-12">
            <p className="text-4xl md:text-5xl font-semibold text-white text-center leading-tight">
              {loading
                ? "Loading words of strength..."
                : `“${quote}”`}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
