export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Unified App Portal</h1>
      <ul className="space-y-4">
        <li><a href="/app1" className="text-blue-400 hover:underline">Project 1</a></li>
        <li><a href="/app2" className="text-blue-400 hover:underline">Project 2</a></li>
        <li><a href="/app3" className="text-blue-400 hover:underline">Project 3</a></li>
        <li><a href="/app4" className="text-blue-400 hover:underline">Project 4</a></li>
        <li><a href="/app5" className="text-blue-400 hover:underline">Project 5</a></li>
      </ul>
    </main>
  );
}
