import Link from "next/link";

export default function Logo() {
  return (
    <div className="relative">
      <h1 className="font-dx text-4xl">ACKSHITA</h1>
      <Link href="/" className="absolute inset-0" />
    </div>
  );
}
