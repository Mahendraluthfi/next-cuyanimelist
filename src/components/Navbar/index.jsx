import InputSearch from "./InputSearch";
const { default: Link } = require("next/link");

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col gap-2 justify-between md:items-center p-4">
        <Link href="/" className="md:text-2xl text-xl text-white font-bold">
          CUYANIMELIST
        </Link>
        <InputSearch></InputSearch>
      </div>
    </header>
  );
};

export default Navbar;
