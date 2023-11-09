import { getTopAnime } from "@/actions/getTopAnime";
import DataCard from "./_components/data-card";

async function DasboardPage() {
  const anime = await getTopAnime();
  // console.log("[anime]", anime.data);
  // console.log('[producer mal_id]', anime.data.[0].producers.mal_id);
  return (
    <section>
      <h2 className="font-semibold my-2 md:my-4">Populer</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
        {anime.data.map((item: any) => (
          <>
            <DataCard
              key={item.id}
              mal_id={item.mal_id}
              title={item.title}
              imageUrl={item.images.webp.image_url}
              author={item.title_japanese}
              authorImage={item.images.webp.small_image_url}
              href={item.trailer.url ? item.trailer.url : item.url}
            />
          </>
        ))}
      </div>
    </section>
  );
}

export default DasboardPage;
