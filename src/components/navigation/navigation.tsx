import Link from "next/link";

export function Navigation() {
  return (
    <nav className="flex space-x-4 justify-center items-center">
      <Link
        href="/"
        className="text-gray-800 dark:text-gray-200 hover:underline text-sm"
      >
        About Me
      </Link>
      <Link
        href="/projects"
        className="text-gray-800 dark:text-gray-200 hover:underline text-sm"
      >
        Projects
      </Link>
      <Link
        href="/services"
        className="text-gray-800 dark:text-gray-200 hover:underline text-sm"
      >
        Services
      </Link>
      <Link
        href="/contact"
        className="text-gray-800 dark:text-gray-200 hover:underline text-sm"
      >
        Contact
      </Link>
    </nav>
  );
}
