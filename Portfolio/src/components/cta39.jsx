import { cn } from "cn";
import { Button } from "@/components/ui/button";

const GitHubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-4 w-4"
    fill="currentColor"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.112.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.468-2.382 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23A11.49 11.49 0 0 1 12 5.844c1.02 0 2.047.138 3.006.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.653.242 2.873.118 3.176.77.838 1.235 1.91 1.235 3.22 0 4.61-2.807 5.623-5.48 5.922.43.37.815 1.104.815 2.226 0 1.606-.015 2.898-.015 3.293 0 .32.217.693.825.575C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12Z" />
  </svg>
);

const defaultProps = {
  heading: "Let’s Connect",
  description:
    "I build products, experiments, and learning projects across web, AI, and software engineering.",
  buttons: {
    primary: {
      text: "My Projects",
      url: "#projects",
    },
    secondary: {
      text: "GitHub",
      url: "https://github.com/adithyan-gireeshkumar/",
      icon: true,
    },
  },
};

const Cta39 = (props) => {
  const {
    heading,
    description,
    buttons,
    className,
    onPrimaryClick,
  } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section
      className={cn("w-full py-32", className)}
      style={{
        background: "linear-gradient(35deg, #ff0015 0%, #d6d329 50%, #ffffff 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto rounded-xl border border-dashed p-8 md:p-12 lg:p-16">
          <div className="flex flex-col items-center gap-4 text-center lg:gap-6">
            <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
              {heading}
            </h2>
            <p className="max-w-2xl text-muted-foreground lg:text-lg">
              {description}
            </p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              {buttons?.primary && (
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-black/90"
                  onClick={onPrimaryClick}
                >
                  {buttons.primary.text}
                </Button>
              )}
              {buttons?.secondary && (
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white bg-white text-black hover:bg-white/90"
                  render={
                    <a
                      href={buttons.secondary.url}
                      target="_blank"
                      rel="noreferrer"
                    />
                  }
                  nativeButton={false}
                >
                  <GitHubIcon />
                  {buttons.secondary.text}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta39 };
