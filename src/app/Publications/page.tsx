import "next/image";
import Header from "../Header";
import Logo from "../Logo";

export default function App4() {
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
      <iframe
        src="https://sigai-publications.vercel.app/"
        style={{ width: "100%", height: "100%", border: "none" }}
        title="Leaders Animation"
      />
    </div>
  );
}
