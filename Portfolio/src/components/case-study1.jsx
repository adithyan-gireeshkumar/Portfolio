import { ExternalLink, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const CaseStudy1 = ({ project, className }) => {
  if (!project) {
    return (
      <section className="py-32">
        <div className="container">
          <h1 className="text-3xl font-bold">Project not found</h1>
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
          <header className="max-w-4xl">
            <Badge variant="secondary" className="mb-6">
              {project.category}
            </Badge>

            <h1 className="text-5xl font-extrabold tracking-tight text-pretty md:text-6xl lg:text-7xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-muted-foreground">
              {project.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.projectUrl && (
                <Button asChild>
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                    <ExternalLink />
                  </a>
                </Button>
              )}
            </div>
          </header>

          <Separator className="my-12" />

          {/* Project metadata */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-sm font-semibold">Context</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {project.context}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold">Type</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {project.type}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold">Team</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {project.team}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold">Year</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {project.published}
              </p>
            </div>
          </div>

          {/* Main content */}
          <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_280px]">

            {/* Article */}
            <div className="max-w-3xl space-y-14">

              {/* Overview */}
              <section>
                <h2 className="text-3xl font-bold tracking-tight">
                  Project Overview
                </h2>

                <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
                  <p>
                    PhobiaVR was developed during an AR/VR workshop as an
                    exploration of immersive virtual environments and their
                    potential use in exposure-oriented experiences.
                  </p>

                  <p>
                    Rather than presenting a single static VR scene, the
                    project organizes its experiences around different
                    phobias. Each experience contains three progressively
                    more intense scenarios, allowing the user to move through
                    increasing levels of difficulty.
                  </p>

                  <p>
                    The project was developed collaboratively by a team of
                    ten participants and was experienced using the Meta Quest
                    3S.
                  </p>
                </div>
              </section>

              {/* Concept */}
              <section>
                <h2 className="text-3xl font-bold tracking-tight">
                  The Concept
                </h2>

                <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
                  <p>
                    The central idea behind PhobiaVR is to use immersive
                    environments to represent situations associated with
                    different fears. Virtual reality makes it possible to
                    construct environments that would be difficult,
                    impractical, or unsafe to reproduce physically.
                  </p>

                  <p>
                    The experience therefore focuses on controlled virtual
                    scenarios rather than simply placing the user inside a
                    conventional game environment.
                  </p>
                </div>
              </section>

              {/* Progressive system */}
              <section>
                <h2 className="text-3xl font-bold tracking-tight">
                  Progressive Intensity
                </h2>

                <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
                  <p>
                    A major part of the experience is the three-level
                    progression system. Every therapy session begins with a
                    lower-intensity scenario and progresses toward a more
                    demanding environment.
                  </p>

                  <p>
                    This structure gives the project a clear progression
                    instead of treating each VR scene as an isolated
                    experience.
                  </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl border p-5">
                    <p className="font-semibold">Level 1</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Introduction to the scenario
                    </p>
                  </div>

                  <div className="rounded-xl border p-5">
                    <p className="font-semibold">Level 2</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Increased environmental intensity
                    </p>
                  </div>

                  <div className="rounded-xl border p-5">
                    <p className="font-semibold">Level 3</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Highest-intensity scenario
                    </p>
                  </div>
                </div>
              </section>

              {/* Sessions */}
              <section>
                <h2 className="text-3xl font-bold tracking-tight">
                  The Four Experiences
                </h2>

                <div className="mt-8 space-y-6">

                  <div className="rounded-2xl border p-6">
                    <h3 className="text-xl font-semibold">
                      Social Anxiety
                    </h3>

                    <p className="mt-3 leading-7 text-muted-foreground">
                      The Social Anxiety experience progresses through an
                      interrogation room, a live television broadcast, and
                      finally a World Arena Summit involving an increasingly
                      public and socially demanding environment.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <Badge variant="outline">
                        Level 1 · Interrogation Room
                      </Badge>

                      <Badge variant="outline">
                        Level 2 · Live TV Broadcast
                      </Badge>

                      <Badge variant="outline">
                        Level 3 · World Arena Summit
                      </Badge>
                    </div>
                  </div>

                  <div className="rounded-2xl border p-6">
                    <h3 className="text-xl font-semibold">
                      Acrophobia
                    </h3>

                    <p className="mt-3 leading-7 text-muted-foreground">
                      The Acrophobia experience focuses on increasingly
                      extreme situations involving height. The progression
                      moves from a collapsing skyscraper to a volcanic
                      environment and eventually a space-station scenario.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <Badge variant="outline">
                        Level 1 · Collapsing Skyscraper — 300m
                      </Badge>

                      <Badge variant="outline">
                        Level 2 · Volcano Rim — 3,700m
                      </Badge>

                      <Badge variant="outline">
                        Level 3 · Space Station — 400km
                      </Badge>
                    </div>
                  </div>

                  <div className="rounded-2xl border p-6">
                    <h3 className="text-xl font-semibold">
                      Aquaphobia
                    </h3>

                    <p className="mt-3 leading-7 text-muted-foreground">
                      The Aquaphobia scenarios progressively move the user
                      from an approaching tsunami toward an underwater
                      shipwreck and finally the extreme depth represented by
                      the Mariana Trench.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <Badge variant="outline">
                        Level 1 · Tsunami Approach
                      </Badge>

                      <Badge variant="outline">
                        Level 2 · Shipwreck Abyss — 120m
                      </Badge>

                      <Badge variant="outline">
                        Level 3 · Mariana Trench — 10,916m
                      </Badge>
                    </div>
                  </div>

                  <div className="rounded-2xl border p-6">
                    <h3 className="text-xl font-semibold">
                      Nyctophobia
                    </h3>

                    <p className="mt-3 leading-7 text-muted-foreground">
                      The Nyctophobia experience uses darkness and limited
                      visibility as its central environmental element. The
                      progression moves through an abandoned hospital,
                      underground catacombs, and finally an environment
                      referred to as The Void.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <Badge variant="outline">
                        Level 1 · Abandoned Hospital
                      </Badge>

                      <Badge variant="outline">
                        Level 2 · Underground Catacombs
                      </Badge>

                      <Badge variant="outline">
                        Level 3 · The Void
                      </Badge>
                    </div>
                  </div>

                </div>
              </section>

              {/* Acrophobia */}
              <section>
                <h2 className="text-3xl font-bold tracking-tight">
                  Inside the Acrophobia Experience
                </h2>

                <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
                  <p>
                    The Acrophobia session provides a good example of how
                    PhobiaVR turns an abstract fear into an interactive
                    virtual scenario.
                  </p>

                  <p>
                    In the recorded experience, the user begins in an
                    elevated environment. The surrounding structure and open
                    space establish the sensation of height before the
                    scenario becomes more intense.
                  </p>

                  <p>
                    As the sequence progresses, the environment introduces a
                    falling event. The experience changes visually during the
                    fall and eventually reaches a high-intensity state
                    accompanied by a falling indicator and a restart
                    interaction.
                  </p>

                  <p>
                    This sequence demonstrates that the project is not simply
                    a collection of 3D environments. The scenes are designed
                    around sequences of events that guide the user's
                    experience.
                  </p>
                </div>
              </section>

              {/* Team */}
              <section>
                <h2 className="text-3xl font-bold tracking-tight">
                  Building It as a Team
                </h2>

                <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
                  <p>
                    PhobiaVR was created by a ten-member team during the
                    Young Innovator&apos;s Lab AR/VR workshop at CUSAT.
                  </p>

                  <p>
                    The project was developed collaboratively, with the team
                    working together across the different parts of the
                    experience. Because the project was a shared workshop
                    effort, individual ownership of specific components is not
                    being retrospectively assigned to a single team member.
                  </p>

                  <p>
                    For my portfolio, I am therefore documenting PhobiaVR as
                    a collaborative team project rather than claiming
                    ownership of a particular subsystem that I cannot
                    accurately attribute.
                  </p>
                </div>
              </section>

              {/* Workshop */}
              <section>
                <h2 className="text-3xl font-bold tracking-tight">
                  Workshop Context
                </h2>

                <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
                  <p>
                    The project was developed as part of an AR/VR workshop
                    conducted through the Young Innovator&apos;s Lab at CUSAT.
                    The workshop provided the context for exploring immersive
                    technologies and building a working project around them.
                  </p>

                  <p>
                    One of the most valuable aspects of the project was the
                    opportunity to move beyond learning about VR concepts and
                    actually create and deploy an interactive experience.
                  </p>
                </div>
              </section>

              {/* Lessons */}
              <section>
                <h2 className="text-3xl font-bold tracking-tight">
                  What I Learned
                </h2>

                <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
                  <p>
                    Working on PhobiaVR provided practical exposure to the
                    design of immersive experiences and the importance of
                    thinking about a user's experience as a sequence rather
                    than as a collection of isolated features.
                  </p>

                  <p>
                    The project also highlighted the importance of
                    collaboration when building an experience involving
                    multiple environments, scenarios, and interaction
                    sequences.
                  </p>

                  <p>
                    Most importantly, it gave me an opportunity to work with
                    AR/VR technology in a hands-on setting and experience the
                    process of turning an idea into a deployable project.
                  </p>
                </div>
              </section>

              {/* Future */}
              <section>
                <h2 className="text-3xl font-bold tracking-tight">
                  Future Improvements
                </h2>

                <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
                  <p>
                    A future version could expand the number of environments
                    and introduce more detailed interaction within each
                    scenario.
                  </p>

                  <p>
                    Additional progression controls, session tracking,
                    configurable intensity, and richer environmental feedback
                    could also make the experience more adaptable to
                    different users.
                  </p>

                  <p>
                    Any real therapeutic deployment would additionally
                    require appropriate clinical validation, safety
                    considerations, and professional oversight.
                  </p>
                </div>
              </section>

            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-8 lg:h-fit">

              <div className="rounded-2xl border p-6">

                <p className="text-sm font-semibold">
                  Project Information
                </p>

                <div className="mt-6 space-y-5">

                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      Project
                    </p>
                    <p className="mt-1 font-medium">
                      {project.title}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      Category
                    </p>
                    <p className="mt-1 font-medium">
                      {project.category}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      Team
                    </p>
                    <p className="mt-1 font-medium">
                      {project.team}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      Platform
                    </p>
                    <p className="mt-1 font-medium">
                      Meta Quest 3S
                    </p>
                  </div>

                </div>

                <Separator className="my-6" />

                {project.projectUrl && (
                  <Button asChild className="w-full">
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open PhobiaVR
                      <ArrowUpRight />
                    </a>
                  </Button>
                )}

              </div>

            </aside>

          </div>
        </div>
      </div>
    </article>
  );
};

export { CaseStudy1 };
