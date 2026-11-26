export function VerifiedDate({ date }: { date?: string }) {
  if (!date) return null;
  return <span className="text-sm text-slate-600">Last verified <time dateTime={date}>{date}</time></span>;
}
