import Link from "next/link";
import Header from "../Header";
import Logo from "../Logo";
  const items = [
    {
      label: "Home",
      bgImage: "/Home.png",
      textColor: "#fff",
      href: "/",
    },
    {
      label: "Events", 
      bgImage: "/Events.png",
      textColor: "#fff",
      href: "/Events",
    },
    {
      label: "Publications",
      bgImage: "/Publications.png",
      textColor: "#fff",
      href: "/Publications",
    },
    {
      label: "Our Team",
      bgImage: "/Our_Team.png",
      textColor: "#fff",
      href: "/Our-Team",
    },
    {
      label: "Blog",
      bgImage: "/Blogs.png",
      textColor: "#fff",
      href: "/Blogs",
    }
  ];
export default function App2() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
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
      <nav className="absolute top-4 right-4 z-10 flex space-x-15 px-4 py-2 rounded">
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
      </nav>

      {/* Iframe */}
      <iframe
        src="https://leaders-animation.vercel.app"
        className="w-full h-full border-none"
        title="Leaders Animation"
      />
    </div>
  );
}
