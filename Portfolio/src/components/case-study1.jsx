import { ExternalLink, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ProjectSection } from "../assets/project-content/ProjectSection";

const CaseStudy1 = ({ project, className }) => {
  const content = project?.content;

  if (!project) {
    return (
      <section className="py-32">
        <div className="container">
          <h1 className="text-3xl font-bold">
            Project not found
          </h1>

          <p className="mt-3 text-muted-foreground">
            The requested project could not be found.
          </p>
        </div>
      </section>
    );
  }

  return (
    <article className={cn("py-20 lg:py-28", className)}>
      <div className="container">
        <div className="mx-auto max-w-6xl">

          {/* Hero */}
          <header>
            <div className="flex flex-wrap items-center gap-3">
              {project.category && (
                <Badge variant="secondary">
                  {project.category}
                </Badge>
              )}

              {project.type && (
                <Badge variant="outline">
                  {project.type}
                </Badge>
              )}
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight lg:text-7xl">
              {project.title}
            </h1>

            {project.summary && (
              <p className="mt-6 max-w-3xl text-xl leading-8 text-muted-foreground">
                {project.summary}
              </p>
            )}

            {/* Primary Project Link */}
            {project.links?.[0] && (
              <div className="mt-8">
                <Button asChild>
                  <a
                    href={project.links[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.links[0].label}

                    <ExternalLink className="ml-2 size-4" />
                  </a>
                </Button>
              </div>
            )}
          </header>

          {/* Metadata */}
          <div className="mt-12 grid gap-6 border-y py-8 sm:grid-cols-2 lg:grid-cols-4">

            {project.published && (
              <div>
                <p className="text-sm text-muted-foreground">
                  Published
                </p>

                <p className="mt-1 font-medium">
                  {project.published}
                </p>
              </div>
            )}

            {project.team && (
              <div>
                <p className="text-sm text-muted-foreground">
                  Team
                </p>

                <p className="mt-1 font-medium">
                  {project.team}
                </p>
              </div>
            )}

            {project.context && (
              <div>
                <p className="text-sm text-muted-foreground">
                  Context
                </p>

                <p className="mt-1 font-medium">
                  {project.context}
                </p>
              </div>
            )}

            {project.category && (
              <div>
                <p className="text-sm text-muted-foreground">
                  Category
                </p>

                <p className="mt-1 font-medium">
                  {project.category}
                </p>
              </div>
            )}

          </div>

          {/* Main Content */}
          <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_280px]">

            {/* Article */}
            <div className="max-w-3xl space-y-14">
              {content?.sections?.map((section, index) => (
                <ProjectSection
                  key={index}
                  section={section}
                />
              ))}
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-8">
                <div className="space-y-6">

                  {/* Project */}
                  <div>
                    <p className="text-sm font-semibold">
                      Project
                    </p>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {project.title}
                    </p>
                  </div>

                  <Separator />

                  {/* Category */}
                  {project.category && (
                    <div>
                      <p className="text-sm font-semibold">
                        Category
                      </p>

                      <p className="mt-2 text-sm text-muted-foreground">
                        {project.category}
                      </p>
                    </div>
                  )}

                  {/* Team */}
                  {project.team && (
                    <div>
                      <p className="text-sm font-semibold">
                        Team
                      </p>

                      <p className="mt-2 text-sm text-muted-foreground">
                        {project.team}
                      </p>
                    </div>
                  )}

                  {/* Context */}
                  {project.context && (
                    <div>
                      <p className="text-sm font-semibold">
                        Context
                      </p>

                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {project.context}
                      </p>
                    </div>
                  )}

                  {/* Project Links */}
                  {project.links?.length > 0 && (
                    <>
                      <Separator />

                      <div className="space-y-3">
                        <p className="text-sm font-semibold">
                          Project Links
                        </p>

                        <div className="space-y-2">
                          {project.links.map((link) => (
                            <a
                              key={link.url}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-center text-sm font-medium"
                            >
                              {link.label}

                              <ArrowUpRight className="ml-1 size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                </div>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </article>
  );
};

export { CaseStudy1 };
