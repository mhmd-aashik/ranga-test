import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import BlogBanner from "./BlogBanner";

const Blog = ({ results }: any) => {
  const data = results.data.data;

  return (
    <>
      {data.length > 0 ? (
        <div className="mx-auto max-w-[1150px] pt-10 ">
          {data.slice(0, 1).map((item: any) => {
            return (
              <BlogBanner key={item.id} id={item.id} {...item.attributes} />
            );
          })}
        </div>
      ) : (
        <div className="mx-auto flex-col gap-2 max-w-[1150px] px-5 pt-10 flex items-center justify-center">
          <h3 className="text-center text-white text-2xl font-bold ">
            oops No data found
          </h3>
          <Link href="/blog">
            <Button className="text-center text-white text-sm bg-blue-600">
              Go to blog
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Blog;
