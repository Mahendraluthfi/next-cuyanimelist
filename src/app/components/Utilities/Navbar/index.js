const { default: Link } = require("next/link");

const Navbar = () => {
  return (
    <header className="bg-indigo-500">
      <div className="flex md:flex-row flex-col gap-2 justify-between p-4">
        <Link href="/" className="md:text-2xl text-xl text-white">
          CUYANIMELIST
        </Link>
        <input placeholder="Cari Anime ..." />
      </div>
    </header>
  );
};

export default Navbar;
