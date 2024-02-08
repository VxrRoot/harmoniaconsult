import { links } from "@/constants";
import { IFullBlogPost, ISimplyBlogCard } from "@/lib/interface";
import { getPosts, getSinglePost } from "@/lib/query";
import { urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import blogImg from "../../../assets/single-blog-post.svg";
import { notFound } from "next/navigation";

export const revalidate = 600;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data: IFullBlogPost = await getSinglePost(params.slug);

  return {
    title: data?.title,
    description: data?.smallDescription,
    // openGraph: {
    //   images: [urlFor(data.titleImage).url()],
    // },
  };
}

export async function generateStaticParams() {
  const data: ISimplyBlogCard[] = await getPosts();

  return data.map(({ currentSlug }) => currentSlug).slice(0, 10);
}

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const data: IFullBlogPost = await getSinglePost(params.slug);

  if (!data) {
    notFound();
  }

  return (
    <section className="h-full pt-40 pb-20 mx-auto max-w-7xl relative lg:min-h-[500px] min-h-[300px] ">
      <Link href={links.blog} className="underline flex px-4">
        <ArrowLeftIcon className="w-4 mr-2" /> Wróć
      </Link>
      <Image
        alt={`${data?.title}-zdjecie`}
        src={data?.titleImage ? urlFor(data.titleImage).url() : blogImg}
        width={1000}
        height={1000}
        priority
        className="lg:h-[500px] mt-8 max-w-7xl w-full h-[300px] object-cover object-center lg:rounded-xl"
      />
      <h1 className="text-4xl px-4 pt-10 font-semibold">{data?.title}</h1>
      <div className="mt-16 prose px-4 prose-blue prose-md w-full max-w-7xl flex flex-col ">
        <PortableText value={data?.content} components={components} />
      </div>
    </section>
  );
};

// Komponent dla obrazów
const ImageComponent = ({ value }: any) => {
  return <img src={urlFor(value).url()} alt={value.alt || " "} />;
};

// Mapowanie komponentów
const components = {
  types: {
    image: ImageComponent,
  },
};

export default BlogPostPage;
