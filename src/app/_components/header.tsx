import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="text-bionutri--4 hover:underline text-bionutri--3">
        BioNutri
      </Link>
      .
    </h2>
  );
};

export default Header;
