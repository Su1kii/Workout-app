import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-white">
      <div className="container max-w-3xl m-0 px-3 py-10 flex item-center justify-between font-extrabold text-3xl">
        <Link href="/">
          <h1>Workout buddy</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
