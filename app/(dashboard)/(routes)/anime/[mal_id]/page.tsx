import { getAnimeVideos } from "@/actions/getAnimeEpisode";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    mal_id: number;
  };
};

async function EpisodePage({ params }: Props) {
  const video = await getAnimeVideos(params.mal_id);
  const descendingData = video.data.episodes.slice().reverse();
  return (
    <div className="flex flex-col gap-4 mt-16">
      {descendingData.map((episode: any) => (
        <Link href={episode.url} key={episode.mal_id}>
          <Card>
            <div className="flex items-center gap-4">
              <Image
                src={episode.images.jpg.image_url}
                alt={episode.title}
                width={200}
                height={200}
                className="rounded-l-md"
              />
              <div className="w-full flex flex-col h-full p-4">
                <h1 className="font-bold text-slate-700 text-xl">
                  {episode.episode}
                </h1>
                <span className="font-[500] text-slate-600 text-lg">
                  {episode.title}
                </span>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default EpisodePage;
