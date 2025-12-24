import Link from "next/link";
import Header from "./Header";
import Logo from "./Logo";

export default function App1() {
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
  return (
    <div className="relative h-screen w-screen">
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
        src="https://sigai-home-nu.vercel.app/"
        className="w-full h-full border-none"
        title="Cube Animations"
      />
    </div>
  );
}
