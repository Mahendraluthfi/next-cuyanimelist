import Link from "next/link";
const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="p-4 flex justify-between text-color-primary">
      <h1 className="text-xl font-bold">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="md:text-xl text-sm underline gap2 transition-all hover:text-color-accent"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
