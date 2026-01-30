"use client";
import Button from "@/component/Button/Button";
import CommonDesign from "@/component/Common/CommonDesign";
import Image from "next/image";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="absolute top-10 left-0 w-full flex justify-between px-10 pointer-events-none">
        <Image
          className="animate-bounce opacity-50 hidden lg:block"
          src="https://i.ibb.co.com/J7ywFTt/shape-1.png"
          width={80}
          height={80}
          alt="deco"
        />
        <Image
          className="animate-pulse opacity-50 hidden lg:block"
          src="https://i.ibb.co.com/wNFQT5z/shape-2.png"
          width={80}
          height={80}
          alt="deco"
        />
      </div>

      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center lg:justify-start pt-10"
        >
          {/* Main Large Image */}
          <div className="relative h-[400px] w-[300px] md:h-[500px] md:w-[400px] rounded-2xl overflow-hidden shadow-2xl z-0 border-8 border-white dark:border-gray-900">
            <Image
              src="https://i.ibb.co.com/Pt7YKXJ/premium-photo-1661883237884-263e8de8869b.jpg"
              fill
              className="object-cover"
              alt="Restaurant Interior"
            />
          </div>

          {/* Overlapping Small Image */}
          <div className="absolute -bottom-10 -right-4 md:-right-10 lg:right-0 xl:-right-10 h-[250px] w-[200px] md:h-[300px] md:w-[250px] rounded-2xl overflow-hidden shadow-2xl z-10 border-8 border-white dark:border-gray-900 hidden sm:block">
            <Image
              src="https://html.rrdevs.net/zummi/assets/imgs/about-us/about-us-2.jpg"
              fill
              className="object-cover"
              alt="Delicious Food"
            />
          </div>
          
          {/* Experience Badge */}
          <div className="absolute top-0 left-0 bg-yellow-500 p-6 rounded-2xl shadow-xl z-20 text-center text-white rotate-[-10deg]">
            <p className="text-3xl font-bold">15+</p>
            <p className="text-xs uppercase font-medium">Years Experience</p>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="inline-block">
             <CommonDesign>Our Background</CommonDesign>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black leading-tight text-gray-900 dark:text-white uppercase">
            Simply Flawless! <br />
            <span className="text-yellow-600 italic">Deliciously Fresh</span> & Lush Flavors.
          </h2>

          <div className="space-y-4 text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            <p>
              Praesent varius erat ut pulvinar consectetur. Vivamus euismod luctus
              ligula, facilisis dignissim lacus. Maecenas eleifend rhoncus justo.
              Sed ornare vestibulum ex, a fermentum magna sodales nec.
            </p>
            <p className="font-medium text-gray-800 dark:text-gray-200 border-l-4 border-yellow-500 pl-4 italic">
              "Cooking is an art, but all art requires knowing something about the techniques and materials."
            </p>
          </div>

          {/* Action Area */}
          <div className="flex flex-wrap items-center gap-10 pt-4">
            <Button className="px-10 py-4 shadow-lg hover:shadow-yellow-500/20 transition-all">
              Read More
            </Button>
            
            <div className="flex items-center gap-4 group">
              <div className="h-14 w-14 rounded-full bg-yellow-500 flex justify-center items-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform">
                <FiPhoneCall className="animate-pulse" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-semibold">Call us anytime</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white transition-colors group-hover:text-yellow-600">
                  +888 578 754 547
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;