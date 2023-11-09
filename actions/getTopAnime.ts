"use server";

export async function getTopAnime() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`, {
    cache: "no-store",
  });

  const anime = await res.json();
  return anime;
}
