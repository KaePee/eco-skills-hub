import Logo from "@/components/Header/Logo";
import Link from "next/link";
import { FaInstagramSquare, FaFacebook, FaLinkedinIn, FaSun } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Header = () => {
  return (
    <header className="w-full p-4 px-6 md:px-10 flex flex-col md:flex-row items-center justify-between bg-white shadow-md">
      <Logo />

      {/* Navigation Bar */}
      <nav className="w-full md:w-max sm:w-3/4 px-4 py-2 border border-solid border-dark rounded-full text-black font-medium capitalize flex items-center justify-center fixed top-6 left-1/2 transform -translate-x-1/2 bg-light/80 backdrop-blur-sm opacity-100 transition-opacity duration-500 ease-in-out will-change-transform z-20">
      <Link href="/" className="mx-2 text-base md:text-lg hover:text-primary transition-colors">
        Home
      </Link>
      <Link href="/about" className="mx-2 text-base md:text-lg hover:text-primary transition-colors">
        About
      </Link>
      <Link href="/contact" className="mx-2 text-base md:text-lg hover:text-primary transition-colors">
        Contact
      </Link>
      {/* <button className="ml-4 text-base md:text-lg hover:text-primary transition-colors">
        <FaSun className="w-6 h-6" />
      </button> For Dark/lightmode later */}
    </nav>

      {/* Social Media Icons */}
      <div className="flex mt-4 md:mt-0 space-x-4">
        <a href="https://www.instagram.com/eko_skills_ghana?igsh=ajhlaWk0NnhwYWow" className="w-6 h-6 text-gray-600 hover:text-gray-800 transition-colors">
          <FaInstagramSquare className="w-full h-full" />
        </a>
        <a href="https://x.com/EkoSkills?t=i_bnskZGva2cM3ij680dHQ&s=08" className="w-6 h-6 text-gray-600 hover:text-gray-800 transition-colors">
          <BsTwitterX className="w-full h-full" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100089025216850&mibextid=ngobeXctTp5pD3Zm" className="w-6 h-6 text-gray-600 hover:text-gray-800 transition-colors">
          <FaFacebook className="w-full h-full" />
        </a>
        <a href="https://www.linkedin.com/in/eko-skills-ghana-156762318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="w-6 h-6 text-gray-600 hover:text-gray-800 transition-colors">
          <FaLinkedinIn className="w-full h-full" />
        </a>
      </div>
    </header>
  );
}

export default Header;
