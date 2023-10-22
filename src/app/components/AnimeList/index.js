import Image from "next/image";
const AnimeList = ({ title, images }) => {
  return (
    <div className="">
      <Image
        src={images}
        width={350}
        height={350}
        alt="..."
        className="w-full max-h-72 object-cover"
      />
      <h3 className="font-bold md:text-xl font-md p-4">{title}</h3>
    </div>
  );
};

export default AnimeList;
