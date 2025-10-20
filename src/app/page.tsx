import Link from "next/link";
import Header from "./Header";
import Logo from "./Logo";
import Home from "./public/Home.png";
import Publications from "./public/Publications.png";
import Events from "./public/Events.png";
import OurTeam from "./public/Our_Team.png";
import Blog from "./public/Blogs.png";

export default function App1() {
      const items = [
    {
      label: "Home",
      bgImage: Home,
      textColor: "#fff",
      href: "/",
      // links: [
      //   { label: "Company", ariaLabel: "About Company" },
      //   { label: "Careers", ariaLabel: "About Careers" }
      // ]
    },
    {
      label: "Events", 
      bgImage: Events,
      textColor: "#fff",
      href: "/Events",
      // links: [
      //   { label: "Featured", ariaLabel: "Featured Projects" },
      //   { label: "Case Studies", ariaLabel: "Project Case Studies" }
      // ]
    },
    {
      label: "Publications",
      bgImage: Publications,
      textColor: "#fff",
      href: "/Publications",
      // links: [
      //   { label: "Email", ariaLabel: "Email us" },
      //   { label: "Twitter", ariaLabel: "Twitter" },
      //   { label: "LinkedIn", ariaLabel: "LinkedIn" }
      // ]
    },
    {
      label: "Our Team",
      bgImage: OurTeam,
      textColor: "#fff",
      href: "/Our-Team",
      // links: [
      //   { label: "Email", ariaLabel: "Email us" },
      //   { label: "Twitter", ariaLabel: "Twitter" },
      //   { label: "LinkedIn", ariaLabel: "LinkedIn" }
      // ]
    },
    {
      label: "Blog",
      bgImage: Blog,
      textColor: "#fff",
      href: "/Blogs",
      // links: [
      //   { label: "Email", ariaLabel: "Email us" },
      //   { label: "Twitter", ariaLabel: "Twitter" },
      //   { label: "LinkedIn", ariaLabel: "LinkedIn" }
      // ]
    }
  ];
  return (
    <div className="relative h-screen w-screen">
      {/* <nav className="absolute top-4 right-4 z-10 flex space-x-15 px-4 py-2 rounded">
        <Link
          href="/"
          className="font-family:Inter, sans-serif; text-white hover:text-blue-400 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          href="/Events"
          className="text-white hover:text-blue-400 transition-colors duration-200"
        >
          Events
        </Link>
        <Link
          href="/Our-Team"
          className="text-white hover:text-blue-400 transition-colors duration-200"
        >
          Team
        </Link>
        <Link
          href="/Publications"
          className="text-white hover:text-blue-400 transition-colors duration-200"
        >
          Publications
        </Link>
        <Link
          href="/Blogs"
          className="text-white hover:text-blue-400 transition-colors duration-200"
        >
          Blogs
        </Link>
      </nav> */}
    <Header
      logo={<Logo />}
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
      {/* Iframe */}
      <iframe
        src="https://cube-animations.vercel.app"
        className="w-full h-full border-none"
        title="Cube Animations"
      />
    </div>
  );
}
