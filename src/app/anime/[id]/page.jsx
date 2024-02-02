import { getAnimeResponse } from "@/libs/api-libs";
import VIdeoPlayer from "@/components/Utilities/VIdeoPlayer";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);

  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-color-primary text-2xl">
          {anime.data.title} - {anime.data.year}
        </h3>
      </div>
      <div className="pt-4 px-4 text-color-primary flex gap-2 overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary bg-color-secondary p-2">
            <h3>Peringkat</h3>
            <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary bg-color-secondary p-2">
            <h3>Skor</h3>
            <p>{anime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary bg-color-secondary p-2">
            <h3>Members</h3>
            <p>{anime.data.members}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary bg-color-secondary p-2">
            <h3>Episodes</h3>
            <p>{anime.data.episodes}</p>
        </div>
      </div>
      <div className="pt-4 px-4 flex gap-2 text-color-primary sm:flex-nowrap flex-wrap">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full rounded object-cover"
        />
        <p className="text-justify text-xl">{anime.data.synopsis}</p>
      </div>
      <VIdeoPlayer youtubeId={anime.data.trailer.youtube_id}/>
    </>
  );
};

export default Page;
