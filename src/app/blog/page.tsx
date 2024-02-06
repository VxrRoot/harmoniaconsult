import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ISimplyBlogCard } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import PageHeroSection from "@/ui/sections/PageHeroSection/PageHeroSection";
import React, { Suspense } from "react";
import heroImg from "../../assets/blog-page-img.jpg";
import Image from "next/image";
import { links } from "@/constants";
import Link from "next/link";
import Frame from "@/ui/atoms/frame";
import { getPosts } from "@/lib/query";
import blogImg from "../../assets/single-blog-post.svg";

export const revalidate = 86400;

const BlogPage = async () => {
  const data: ISimplyBlogCard[] = await getPosts();

  return (
    <section className="">
      <PageHeroSection image={heroImg} title="BLOG" />
      <div className="max-w-7xl mx-auto px-8 my-10 pt-6 relative">
        <div className="absolute top-0 left-2 -rotate-90">
          <Frame />
        </div>
        <div className="border-b pb-8 border-black">
          <h2 className="text-xl max-w-4xl ">
            Witamy na naszym blogu! Publikujemy tu specjalistyczne artykuły z
            obszaru naszej działalności, przydatne skondensowane porady i
            informacje o naszych osiągnięciach.
          </h2>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 lg:gap-4 gap-8">
          {data.map((post) => {
            return (
              <Suspense key={post.id} fallback={<p>Loading...</p>}>
                <Card className="cursor-pointer">
                  <Image
                    src={
                      post.titleImage ? urlFor(post.titleImage).url() : blogImg
                    }
                    alt="Post img"
                    width={500}
                    height={500}
                    className="object-cover w-full rounded-t-lg h-[200px] object-center"
                  />
                  <CardHeader>
                    <CardTitle>{`${post.title.substring(0, 20)}...`}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{`${post.smallDescription.substring(
                      0,
                      140
                    )}...`}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href={`${links.blog}/${post.currentSlug}`}
                      className="underline"
                    >
                      Czytaj więcej
                    </Link>
                  </CardFooter>
                </Card>
              </Suspense>
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default BlogPage;
