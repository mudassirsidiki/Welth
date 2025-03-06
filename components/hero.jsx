"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";

const HeroSection = () => {
    const imageRef = useRef()

    useEffect(() => {
        const imageElement = imageRef.current;
    
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          const scrollThreshold = 100;
    
          if (scrollPosition > scrollThreshold) {
            imageElement.classList.add("scrolled");
          } else {
            imageElement.classList.remove("scrolled");
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);


  return (


    // YEH HUMARA HERO SECTION HAI AUR ISS MEIN 4 COMPONENTS HAIN 1-HEADING 2-PARAGRAPH 3-BUTTONS(2) 4-MOVEABLE IMAGE
    <section className="pt-40 pb-20 px-4">
    <div className="container mx-auto text-center">



    {/* 1- THIS PART REPRESENTS OUR HEADING */}
      <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
        Manage Your Finances <br /> with Intelligence
      </h1>



    {/* 2- THIS PART REPRESENTS OUR PARAGRAPH BELOW THE HEADING */}
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        An AI-powered financial management platform that helps you track,
        analyze, and optimize your spending with real-time insights.
      </p>



    {/* 3- THIS PART REPRESENTS OUR TWO BUTTONS 1-GET STARTED 2-WATCH DEMO. LINK TAG MEIN RAKHNE KA MAKSAD YEH HAI K ISSKE href MEIN HUM JO CHEZ RAKHIEN GE TW BUTTON P CLICK KRNE K BAD USER WAHIN REDIRECT HOGA */}
      <div className="flex justify-center space-x-4">
        <Link href="/dashboard">
          <Button size="lg" className="px-8">
            Get Started
          </Button>
        </Link>
        <Link href="https://www.youtube.com/roadsidecoder">
          <Button size="lg" variant="outline" className="px-8">
            Watch Demo
          </Button>
        </Link>
      </div>




    {/* 4- THIS PART REPRESENTS OUR HERO IMAGE WHICH IS MOVING WHEN WE ARE SCROLLING DOWN. ACHA YAHAN P MOVE KRWANE KA CODE NH DIKHE GA KU K HUMNE USEREF KA ISTEMAL KIA HAI AUR USKA PORA CODE UPR MOJOOD HAI AUR YAHAN HUMNE SIRF KAHA HAI K UPR WALAY CODE KA REFERENCE USE KARO */}
      <div className="hero-image-wrapper mt-5 md:mt-0">
        <div ref={imageRef} className="hero-image">
          <Image
            src="/banner.jpeg"
            width={1280}
            height={720}
            alt="Dashboard Preview"
            className="rounded-lg shadow-2xl border mx-auto"
            priority
          />
        </div>
      </div>



    </div>
  </section>
  );
};

export default HeroSection;
