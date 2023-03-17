import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import TrustedBy from "../TrustedBy/TrustedBy";

function Header() {
  return (
    <header className="flex flex-col justify-evenly gap-10 bg-gradient-to-b from-white to-gray-50 md:h-screen md:max-h-[900px]">
      <Navbar />
      <Hero />
      <TrustedBy />
    </header>
  );
}

export default Header;
