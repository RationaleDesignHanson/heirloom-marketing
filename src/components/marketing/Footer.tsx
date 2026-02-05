import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[var(--cream)]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-black/70">
            <span className="font-semibold text-black">Heirloom</span> — Recipe Box
          </div>
          <div className="flex gap-5 text-sm text-black/70">
            <Link className="hover:text-black" href="/support">
              Support
            </Link>
            <Link className="hover:text-black" href="/privacy">
              Privacy
            </Link>
            <Link className="hover:text-black" href="/terms">
              Terms
            </Link>
            <Link className="hover:text-black" href="/community">
              Community
            </Link>
          </div>
        </div>
        <div className="mt-6 text-xs text-black/60">
          © {new Date().getFullYear()} Heirloom Recipe Box.
        </div>
      </div>
    </footer>
  );
}
