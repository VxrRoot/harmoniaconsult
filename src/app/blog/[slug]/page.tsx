import { IFullBlogPost } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 86400;

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

async function getData(slug: string) {
  const query = `*[_type == 'blog' && slug.current == '${slug}'] {
      "currentSlug": slug.current,
            title,
            content,
            titleImage
      }[0]`;

  const data = await client.fetch(query);

  return data;
}

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const data: IFullBlogPost = await getData(params.slug);

  return (
    <section className="h-full pt-40 mx-auto max-w-7xl relative lg:min-h-[500px] min-h-[300px] ">
      <Image
        alt={`${data.title}-zdjecie`}
        src={urlFor(data.titleImage).url()}
        width={800}
        height={800}
        priority
        className="lg:h-[500px]  max-w-7xl w-full h-[300px] object-cover  object-center lg:rounded-xl"
      />
      <div className="mt-16 prose px-4 prose-blue prose-lg w-full max-w-7xl flex flex-col">
        <PortableText value={data.content} components={components} />
      </div>
    </section>
  );
};

export default BlogPostPage;
