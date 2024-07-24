import ContactUs from "@/components/home/ContactUs";
import Hero from "@/components/home/Hero";
import Review from "@/components/home/Review";
import Service from "@/components/home/Service";
import TrendBlog from "@/components/home/TrendBlog";
import Blog from "@/components/home/TrendingBlog/Blog";
import { fetchRatings, fetchSingleBlog } from "@/lib/fetchBlogs";
import Image from "next/image";

export const revalidate = 0;

export default async function Home() {
  const results = await fetchSingleBlog();
  const ratings = await fetchRatings();

  return (
    <main className="w-full mx-auto">
      <div className="relative w-4xl w-full mx-auto">
        <div className="absolute top-0 right-0 -z-40">
          <Image
            src="/assets/vector/vector1.png"
            alt="vector1"
            width={212}
            height={270}
            draggable="false"
          />
        </div>
        <div className="absolute top-20 left-0 -z-40">
          <Image
            src="/assets/vector/vector2.png"
            alt="vector2"
            width={212}
            height={270}
          />
        </div>
        <div className="absolute -top-[200px] left-0 -z-40">
          <Image
            src="/assets/vector/vector4.png"
            alt="vector3"
            width={1408}
            height={93}
            draggable="false"
          />
        </div>
        <div className="absolute top-[700px] right-0">
          <Image
            src="/assets/vector/vector5.png"
            alt="vector5"
            width={526}
            height={393}
            draggable="false"
          />
        </div>

        <div>
          <Hero />
          <Review ratings={ratings} />
          <Blog results={results} />
          <TrendBlog />
          <Service />
          <ContactUs />
        </div>
      </div>
    </main>
  );
}
