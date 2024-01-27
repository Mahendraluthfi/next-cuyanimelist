import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "./libs/api-libs";

const Page = async () => {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  // );
  // const topAnime = await response.json();
  const topAnime = await getAnimeResponse("top/anime","limit=8")

  return (
    <>
      <section>
        <Header
          title="Paling Populer"
          linkHref="/populer"
          linkTitle="Lihat Semua"
        ></Header>
        <AnimeList api={topAnime}></AnimeList>
      </section>
      <section>
        <Header
          title="Paling Terbaru"
          linkHref="/newest"
          linkTitle="Ikuti Sekarang"
        ></Header>
        <AnimeList api={topAnime}></AnimeList>
      </section>
    </>
  );
};

export default Page;
