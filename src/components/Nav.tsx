import Link from "next/link";

const Nav = () => {
  return (
    <header>
      <nav
        className="flex items-center justify-between p-6 lg:px-8 h-20 border border-t0 border-l-0 border-r-0 border-b-gray-600"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            Next.js Authentication
          </a>
        </div>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
};

export default Nav;
