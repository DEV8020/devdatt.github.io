export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80">
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="text-xs text-gray-500 dark:text-gray-500">
          © {year} Devdatt Datar. All rights reserved.
        </span>

        <span className="text-xs text-gray-400">
          Built with React, Tailwind, and a lot of ☕.
        </span>
      </div>
    </footer>
  );
}
