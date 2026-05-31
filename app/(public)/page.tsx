"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import Footer from "@/components/layout/Footer";
import TutorsSection from "@/components/tutor/TutorsSection";

interface Tutor {
  name: string;
  subject: string;
}

export default function Home() {
  const [currentView, setCurrentView] = useState<'hero' | 'tutors'>('hero');
  const [tutors, setTutors] = useState<Tutor[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTutors = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/tutors", { cache: "no-store" });
      const data = await res.json();
      setTutors(data.tutors || []);
    } catch (error) {
      console.error("Error fetching tutors:", error);
      setTutors([]);
    } finally {
      setLoading(false);
    }
  };

  const showTutors = () => {
    if (currentView !== 'tutors') {
      fetchTutors();
      setCurrentView('tutors');
    }
  };

  const showHero = () => {
    setCurrentView('hero');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onTutorsClick={showTutors} onHomeClick={showHero} />
      <main className="grow">
        {currentView === 'hero' ? (
          <Hero onFindTutorsClick={showTutors} />
        ) : (
          <div>
            {loading ? (
              <div className="container mx-auto px-4 py-20 text-center">
                <p className="text-gray-600">Loading tutors...</p>
              </div>
            ) : (
              <TutorsSection tutors={tutors} />
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}