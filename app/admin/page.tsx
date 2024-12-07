import Image from "next/image";
import Link from "next/link";

function Admin() {
  return (
    <div className="max-auto flex max-w-7xl flex-col space-y-14 ">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo-full.svg"
            height={32}
            width={32}
            alt="logo"
            className="h-8 w-fit"
          />
        </Link>
        <p className="text-16-semibold">Admin Dashboard</p>
      </header>
      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">
            Start the day with managing appointment
          </p>
        </section>

        <section className="admin-stat"></section>
      </main>
    </div>
  );
}

export default Admin;
