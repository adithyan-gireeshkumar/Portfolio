import { ArrowRight } from "lucide-react";
import { cn } from "cn";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const Blog7 = ({
  tagline = "Latest Updates",
  heading = "Blog",
  description = "Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.",

  posts = [
    {
      id: "post-1",
      title: "PhobiaVR",
      summary:
        "Explore the world of virtual reality and how it can be used to help people overcome their fears..",
      label: "Project",
      author: "Team Reality Forges",
      published: "26 sep 2026",
      url: "#",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "post-2",
      title: "Building Accessible Web Applications",
      summary:
        "Explore how to create inclusive web experiences using shadcn/ui's accessible components. Discover practical tips for implementing ARIA labels, keyboard navigation, and semantic HTML.",
      label: "Accessibility",
      author: "Marcus Rodriguez",
      published: "1 Jan 2024",
      url: "#",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "post-3",
      title: "Modern Design Systems with Tailwind CSS",
      summary:
        "Dive into creating scalable design systems using Tailwind CSS and shadcn/ui. Learn how to maintain consistency while building flexible and maintainable component libraries.",
      label: "Design Systems",
      author: "Emma Thompson",
      published: "1 Jan 2024",
      url: "#",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
  ],
  onTitleClick,
  className
}) => {
  const handlePostClick = (event, post) => {
    if (post.id === "post-1" && onTitleClick) {
      event.preventDefault();
      onTitleClick();
    }
  };

  return (
    <section className={cn("py-32", className)} style={{
      background: "linear-gradient(302deg, #7fe1de 0%, #0f85fa 50%, #0fe7fa 100%)",
    }}>
      <div className="container mx-auto flex flex-col items-center gap-8">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6">
            {tagline}
          </Badge>
          <h2 className="mb-3 text-5xl tracking-tighter text-pretty md:mb-4 lg:mb-6 lg:max-w-3xl lg:text-7xl">
            {heading}
          </h2>
          <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            {description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="grid grid-rows-[auto_auto_1fr_auto] overflow-hidden pt-0"
            >
              <div className="aspect-video w-full">
                <a
                  href={post.url}
                  target="_blank"
                  onClick={(event) => handlePostClick(event, post)}
                  className="transition-opacity duration-200 fade-in hover:opacity-70"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover object-center"
                  />
                </a>
              </div>
              <CardHeader>
                <h3 className="text-xl hover:underline md:text-xl">
                  <a
                    href={post.url}
                    target="_blank"
                    onClick={(event) => handlePostClick(event, post)}
                  >
                    {post.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm font-semibold text-foreground/80">
                  {post.author} · {post.published}
                </p>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  {post.summary}
                </p>
              </CardContent>
              <CardFooter>
                <a
                  href={post.url}
                  target="_blank"
                  onClick={(event) => handlePostClick(event, post)}
                  className="flex items-center text-muted-foreground hover:underline"
                >
                  Read more
                  <ArrowRight className="ml-1 size-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog7 };
