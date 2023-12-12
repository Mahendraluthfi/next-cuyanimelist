import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );
  const searchAnime = await response.json();

  return (
    <>
      <section>
        <Header title={`Pencarian untuk ${keyword}...`}></Header>
        <AnimeList api={searchAnime}></AnimeList>
      </section>
    </>
  );
};

export default Page;
