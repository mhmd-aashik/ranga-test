import TrandingSlides from "@/components/blog/TrandingSlides";
import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Social from "@/components/shared/Social";

export async function generateMetadata({ params }: any) {
  const result = await fetch(
    `${process.env.BACKEND}/blogs?trend-blogs[slug][$eq]=${params.id}&populate=*`
  );

  const data = await result.json();

  const dataResult = data.data;

  const { attributes } = dataResult[0];

  const { metatitle, metaauthor, metakeyword, metadescription } = attributes;
  const imageData = attributes.desktopView.data.attributes.formats;
  const imageUrl = imageData?.medium?.url;

  const fullImageUrl = `${process.env.NEXT_PUBLIC_IMAGE_FILE}${imageUrl}`;

  return {
    title: metatitle,
    description: metadescription,
    type: "website",
    applicationName: "Ranga Technology",
    authors: [{ name: metaauthor }],
    keywords: [metakeyword],

    images: [
      {
        url: fullImageUrl,
        width: 1200,
        height: 630,
        alt: metatitle,
      },
    ],
    openGraph: {
      title: metatitle,
      description: metadescription,
      type: "website",
      applicationName: "Ranga Technology",
      authors: [{ name: metaauthor }],
      keywords: [metakeyword],
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: metatitle,
        },
      ],
    },
    og: {
      title: metatitle,
      description: metadescription,
      type: "website",
      applicationName: "Ranga Technology",
      authors: [{ name: metaauthor }],
      keywords: [metakeyword],
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: metatitle,
        },
      ],
    },
  };
}

export const revalidate = 0;

const SingleProduct = async ({ params }: any) => {
  const result = await fetch(
    `${process.env.BACKEND}/trend-blogs?filters[slug][$eq]=${params.id}&populate=*`
  );

  const data = await result.json();

  const dataResult = data.data;

  const { attributes } = dataResult[0];

  const { title, description } = attributes;
  const imageData = attributes.desktopView.data.attributes.formats;
  const imageUrl = imageData?.large?.url;

  if (!attributes || !imageUrl) {
    return;
  }

  return (
    <div className="w-full mx-auto">
      <div className="relative w-4xl h-full w-full mx-auto">
        <div className="absolute bottom-0 right-0 ">
          <Image
            src="/assets/vector/vector7.png"
            alt="vector8"
            width={312}
            height={270}
            draggable="false"
          />
        </div>
        <div className="mx-auto max-w-[1150px] gap-10 bg-[#020000] px-5 pb-5">
          <div className="mt-5 rounded-3xl outline outline-1 outline-[#C946FB]">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${imageUrl}`}
              alt={title}
              width={1130}
              height={440}
              draggable="false"
              className="max-h-[440px] rounded-t-3xl bg-center object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between full">
                <h2 className="h-full pb-8 font-extrabold text-[#40E9FD] sm:text-[20px] font-poppins">
                  {title}
                </h2>
                <Social />
              </div>
              <div className="prose prose-lg font-poppins prose-invert max-h-full overflow-auto text-white">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]} // Enable HTML parsing
                >
                  {description}
                </ReactMarkdown>
              </div>
            </div>
          </div>

          <TrandingSlides />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
