import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center h-[700px] p-10">
      <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
      <p className="text-lg text-muted-foreground mb-8 text-center">
        We're working hard to bring you this feature. Stay tuned!
      </p>
      <Link href="/" className="text-blue-400 hover:underline">
        Go back home
      </Link>
    </div>
  );
}
