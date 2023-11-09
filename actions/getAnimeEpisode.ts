"use server";

export async function getAnimeVideos(mal_id: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${mal_id}/videos`,
    {
      cache: "no-store",
    }
  );

  const anime = await res.json();
  return anime;
}
