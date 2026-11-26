import Link from "next/link";
export default function NotFound() {
  return <div className="max-w-xl"><h1 className="font-serif text-3xl mb-3">Page not found</h1><p><Link href="/" className="underline text-ledger">Back to the home page</Link></p></div>;
}
