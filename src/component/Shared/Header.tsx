"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import dynamic from "next/dynamic";
import { useAppSelector } from "@/redux/hook";

const Auth = dynamic(() => import("../Auth/Auth"), { ssr: false });

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false); 
  const { user } = useAppSelector((store) => store.auth);
  
  const logoImage = "https://html.rrdevs.net/zummi/assets/imgs/logo/logo.svg";
  const role = user?.role;

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Food Menu", href: "/menu" },
    { name: "Shop", href: "/shop" },
    { name: "Chef", href: "/chef" },
    { name: "Blog", href: "/blog" },
    { name: "Checkout", href: "/checkout" },
  ];

  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50 py-4 px-4  uppercase">
      <div className="max-w-[1500px] mx-auto flex justify-between items-center text-white">
        <Link href="/">
          <Image
            height={40}
            width={120}
            src={logoImage}
            alt="Logo"
            priority
          />
        </Link>

        <div
          className={`absolute md:static bg-black md:bg-transparent left-0 top-[72px] w-full md:w-auto flex flex-col md:flex-row items-center transition-all duration-500 ease-in-out ${
            isOpen ? "h-screen opacity-100" : "h-0 md:h-auto opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto overflow-hidden"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-6 py-4 md:py-2 text-[13px] font-bold tracking-widest hover:text-yellow-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {mounted && user && (
            <Link
              href={`/dashboard/${role}`}
              onClick={() => setIsOpen(false)}
              className="px-6 py-4 md:py-2 text-[13px] font-bold text-yellow-500"
            >
              Dashboard
            </Link>
          )}

          {/* Mobile Auth/Register */}
          <div className="md:hidden mt-4">
            {mounted && (user ? <Auth /> : (
              <Link href="/register" className="text-yellow-500 font-bold">Register</Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            {mounted && <Auth />}
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg"
          >
            {isOpen ? <AiOutlineClose size={26} /> : <FaBars size={26} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;