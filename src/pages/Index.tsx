
import React, { useEffect } from "react";
import { HeroSection } from "@/components/wedding/HeroSection";
import { EventDetails } from "@/components/wedding/EventDetails";
import { OurStory } from "@/components/wedding/OurStory";
import { RsvpSection } from "@/components/wedding/RsvpSection";
import { Footer } from "@/components/wedding/Footer";
import { NavMenu } from "@/components/wedding/NavMenu";

const Index = () => {
  useEffect(() => {
    // Animation for fade-in sections
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach(el => observer.observe(el));
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="wedding-invitation">
      <NavMenu scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <EventDetails />
      <OurStory />
      <RsvpSection />
      <Footer />
    </div>
  );
};

export default Index;
