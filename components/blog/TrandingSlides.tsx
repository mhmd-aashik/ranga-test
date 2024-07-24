import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { TrendingBlogs } from "@/lib/fetchBlogs";
import TrendBlogId from "./TrendBlogId";

const TrandingSlides = async () => {
  const result = await TrendingBlogs();
  const product = result?.data?.data;

  return (
    <>
      <div className="relative mx-auto max-w-[1150px] py-20">
        <div>
          <h2 className="mb-6 text-[30px] font-medium text-white sm:text-[38px]">
            Trending topics this week
          </h2>
        </div>

        {product.length > 0 ? (
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="mx-auto flex max-w-[1150px] gap-5">
              {product?.map((item: any) => (
                <CarouselItem
                  key={item.id}
                  className="z-10 max-w-[350px] rounded-xl bg-gradient-to-r from-[#C946FB] via-[#C946FB] to-[#6161FB] p-[1px]"
                >
                  <TrendBlogId key={item.id} item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className=" relative mx-auto mt-10 flex max-w-[2px] items-center justify-center">
              <CarouselPrevious className="absolute   border-white hover:bg-[#332E32] text-white  hover:text-white" />
              <CarouselNext className="absolute left-2 border-white hover:bg-[#332E32] text-white  hover:text-white" />
            </div>
          </Carousel>
        ) : (
          <div className="col-span-4 flex h-[40vh] flex-col items-center justify-center">
            <h4 className="text-center text-3xl text-white">
              No service data found
            </h4>
          </div>
        )}
      </div>
    </>
  );
};

export default TrandingSlides;
