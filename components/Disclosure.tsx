import Link from "next/link";
export function Disclosure() {
  return (
    <p className="note text-sm my-4" role="note">
      We earn a commission if you buy through links on this page. It never changes our verdicts.{" "}
      <Link href="/disclosure/" className="underline">How we make money →</Link>
    </p>
  );
}
