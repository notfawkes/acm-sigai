import Link from "next/link";

export default function App2() {
  return (
    <div className="relative h-screen w-screen">
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
