import { ArrowRight } from "lucide-react";
import { cn } from "cn";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const Blog7 = ({
  tagline = "Latest Updates",
  heading = "Projects",
  description = "Explore the projects I have built, contributed to, and experimented with.",
  className,
  onTitleClick,
}) => {

  const handlePostClick = (event, project) => {
    event.preventDefault();
    onTitleClick(project.id);
  };

  return (
    <section
      className={cn("py-32", className)}
      style={{
        background:
          "linear-gradient(302deg, #7fe1de 0%, #0f85fa 50%, #0fe7fa 100%)",
      }}
    >
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

          {projects.map((project) => (

            <Card
              key={project.id}
              className="grid grid-rows-[auto_auto_1fr_auto] overflow-hidden pt-0"
            >

              <div className="aspect-video w-full">
                <a
                  href="#"
                  onClick={(event) => handlePostClick(event, project)}
                  className="transition-opacity duration-200 fade-in hover:opacity-70"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-center"
                  />
                </a>
              </div>

              <CardHeader>

                <h3 className="text-xl hover:underline md:text-xl">
                  <a
                    href="#"
                    onClick={(event) => handlePostClick(event, project)}
                  >
                    {project.title}
                  </a>
                </h3>

                <p className="mt-2 text-sm font-semibold text-foreground/80">
                  {project.category} · {project.published}
                </p>

              </CardHeader>

              <CardContent>

                <p className="leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>

              </CardContent>

              <CardFooter>

                <a
                  href="#"
                  onClick={(event) => handlePostClick(event, project)}
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