"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  mal_id: number;
  href: string;
  title: string;
  imageUrl: string;
  author: string;
  authorImage: string;
};

function DataCard({
  mal_id,
  href,
  title,
  imageUrl,
  author,
  authorImage,
}: Props) {
  return (
    <Link href={`anime/${mal_id}`}>
      <Card className="rounded-lg shadow-sm">
        <CardHeader className="relative w-full bg-red-500 h-40 rounded-lg mb-4">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
        </CardHeader>
        <CardFooter className="h-14">
          <div className="w-full h-full flex items-center gap-4">
            <div className="relative h-8 w-8 rounded-full">
              <Image
                src={authorImage}
                alt={title}
                fill
                className="object-cover rounded-full"
              />
              {/* <RxAvatar /> */}
            </div>
            <div className="flex-1">
              <CardTitle className="line-clamp-2 text-sm">{title}</CardTitle>
              <CardDescription className="line-clamp-1">
                {author}
              </CardDescription>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default DataCard;
