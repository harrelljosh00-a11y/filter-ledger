import { notFound } from "next/navigation";
import { loadDoc } from "@/lib/content";
import { DocView } from "@/components/DocView";

const doc = loadDoc("pages", "privacy");
export const metadata = doc ? { title: doc.title, description: doc.description } : {};
export default function Page() {
  if (!doc) notFound();
  return <DocView doc={doc} />;
}
