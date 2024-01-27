import { getAnimeResponse } from "@/app/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);  
  const searchAnime = await getAnimeResponse("anime",`q=${decodeKeyword}`)
  return (
    <>
      <section>
        <Header title={`Pencarian untuk ${decodeKeyword}...`}></Header>
        <AnimeList api={searchAnime}></AnimeList>
      </section>
    </>
  );
};

export default Page;
