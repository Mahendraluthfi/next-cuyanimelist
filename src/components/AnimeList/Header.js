import Link from "next/link";
const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="p-4 flex justify-between">
      <h1 className="text-xl font-bold">{title}</h1>
      {linkHref && linkTitle ? (
        <Link href={linkHref} className="underline gap2 text-xl">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
