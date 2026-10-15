import Link from 'next/link';

export default function Home() {
  const commitSha = "b7a9fea";
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to DJ Services</h1>
      <p className="mb-6">Professional DJ, lighting, and photo‑booth packages for any event.</p>
      <Link href="/quote" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Get a Quote
      </Link>
    </div>
  );
}
