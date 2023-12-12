import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const topAnime = await response.json();

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
