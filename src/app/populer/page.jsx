"use client"

import React, { useEffect, useState } from "react";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import AnimeList from "@/components/AnimeList";

const Page = async () => {

  const [page, setPage] = useState(1)
  const [topAnime, settopAnime] = useState([])
  const fecthData = async() => {    
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
    );
    const data = await response.json();
    settopAnime(data)
  }

  useEffect(() => {
    fecthData()
  }, [page])

  return (
    <>
    <HeaderMenu title={`Anime Terpopuler #${page}`}/>
    <AnimeList api={topAnime}/>
    <Pagination 
    page={page} 
    lastPage={topAnime.pagination?.last_visible_page} 
    setPage = {setPage}/>

    </>
  );
};

export default Page;
