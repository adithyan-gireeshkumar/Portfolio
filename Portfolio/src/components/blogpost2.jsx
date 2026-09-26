import { ChevronUp } from "lucide-react";
import { cn } from "cn";

import avatarImage from "../assets/1786373699126.jpeg";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

function Blogpost2({ className }) {
  return (
    <section
      className={cn("py-32 mt-0", className)}
      style={{
        background: "linear-gradient(35deg, #0f23fa 0%, #0f85fa 50%, #0fe7fa 100%)",
      }}
    >
      <div className="container mt-0 ml-3">
        <div className="relative flex flex-col justify-between gap-10 lg:flex-row">
          <aside className="top-10 h-fit flex-shrink-0 lg:sticky lg:w-[300px] xl:w-[400px]">
            <a
              className="mb-5 flex items-center gap-1 text-muted-foreground hover:text-primary"
              href="#"
            >
              <ChevronUp className="h-full w-4" />
              Return to top
            </a>
            <h1 className="mb-5 text-3xl font-bold text-balance lg:text-4xl">
              Take a look into my Portfolio.
            </h1>
            <div className="flex gap-3">
              <Avatar className="size-7 rounded-full">
                <AvatarImage src={avatarImage} alt="Adithyan Gireeshkumar" />
              </Avatar>
              <div>
                <h2 className="font-semibold">Adithyan Gireeshkumar</h2>
                
              </div>
            </div>
          </aside>

          <article className="">
            <img
              src="https://pbs.twimg.com/profile_images/2036799891708715008/dCGXex_z_400x400.jpg"
              alt="placeholder"
              className="mt-0 mb-8 aspect-video w-full rounded-lg object-cover"
            />
            <div className="prose dark:prose-invert">
            

<p>
  I didn't start learning software engineering with a grand plan.
  I started by being curious about how things worked.
</p>

<p>
  That curiosity slowly turned into a habit of building things, breaking them,
  fixing them, and then wondering how they could be built better.
</p>

<p>
  Today, I'm a B.Tech Information Technology student at CUSAT, exploring the
  intersection of <strong>software engineering, artificial intelligence,
  and product development</strong>.
</p>

<p>
  My journey so far has taken me from writing simple web pages to building
  full-stack applications, experimenting with AI systems, and learning how
  different technologies can come together to solve real problems.
</p>

<h2>It Started With the Web</h2>

<p>
  My first serious interest in software development came through the web.
</p>

<p>
  HTML and CSS taught me how interfaces are constructed. JavaScript introduced
  me to programming in the browser. Eventually, I started exploring modern
  frontend frameworks and discovered React.
</p>

<p>
  React changed the way I thought about frontend development.
</p>

<p>
  Instead of treating a website as a collection of separate pages, I began
  thinking in terms of <strong>components, state, reusable systems, user
  experience, and application architecture</strong>.
</p>

<p>
  Working with Vite alongside React also gave me experience with the modern
  JavaScript development workflow — development servers, builds, dependencies,
  modules, and deployment.
</p>

<h2>Building Something Real: Peedika</h2>

<p>
  One of the projects that represents this stage of my journey is
  <a
    href="https://peedika-one.vercel.app"
    target="_blank"
    rel="noreferrer"
  >
    Peedika
  </a>
  .
</p>

<p>
  Peedika is an e-commerce application that I have been continuously building
  and refining. What started as a web-development project gradually became an
  opportunity to understand how a real application is structured.
</p>

<p>
  I worked on things such as:
</p>

<ul>
  <li>Product interfaces and product detail pages</li>
  <li>Reusable React components</li>
  <li>Application navigation</li>
  <li>Responsive layouts</li>
  <li>Frontend architecture</li>
  <li>Deployment and production builds</li>
</ul>

<p>
  The most valuable part wasn't simply making the interface look good.
  It was discovering what happens when a project becomes complicated.
</p>

<blockquote>
  "The moment a project becomes real is usually the moment things start
  breaking."
</blockquote>

<p>
  Dependencies conflict. Routes stop working. A build fails. Something works
  perfectly on a development machine but behaves differently after deployment.
</p>

<p>
  Those problems taught me something that tutorials rarely can:
  <strong>software engineering is as much about solving problems as it is
  about writing code.</strong>
</p>

<h2>From Frontend to Backend</h2>

<p>
  Eventually, building interfaces wasn't enough.
</p>

<p>
  I wanted to understand what happened behind them.
</p>

<p>
  That led me toward Python and Django.
</p>

<p>
  Backend development introduced me to a completely different side of
  application development — business logic, databases, authentication,
  APIs, server-side processing, and application architecture.
</p>

<p>
  I became particularly interested in API-driven applications and Django REST
  because modern software is rarely a single application running in isolation.
</p>

<p>
  A typical system might look something like:
</p>

<ul>
  <li><strong>React</strong> handling the user interface</li>
  <li><strong>Django</strong> handling application logic</li>
  <li><strong>REST APIs</strong> connecting the frontend and backend</li>
  <li><strong>PostgreSQL or another database</strong> storing application data</li>
  <li><strong>Cloud infrastructure</strong> running the application</li>
</ul>

<p>
  Understanding how these pieces communicate changed the way I approached
  development.
</p>

<h2>Then I Started Exploring AI</h2>

<p>
  While learning software engineering, another field kept attracting my
  attention: artificial intelligence.
</p>

<p>
  Large language models made software feel different.
</p>

<p>
  Traditionally, we write explicit instructions for a computer. With modern
  AI systems, we can build applications that can interpret natural language,
  reason over information, retrieve knowledge, and interact with external
  tools.
</p>

<p>
  That opened an entirely new area for me to explore.
</p>

<p>
  I started experimenting with concepts such as
  <strong>LLMs, RAG, vector databases, Ollama, AI agents, and tool
  orchestration</strong>.
</p>

<p>
  But I quickly realized that the interesting part isn't simply using an AI
  model.
</p>

<p>
  The interesting part is building a system around it.
</p>

<blockquote>
  "The model is only one part of an intelligent application."
</blockquote>

<p>
  Give a model access to the right data, APIs, tools, memory, and workflows,
  and it can become part of a much larger software system.
</p>

<h2>Where Software Engineering Meets AI</h2>

<p>
  This is where my interests currently overlap.
</p>

<p>
  I don't want to choose between software engineering and AI. I want to
  understand how they can work together.
</p>

<p>
  A useful AI application still needs many of the things that traditional
  software requires:
</p>

<ul>
  <li>A good user interface</li>
  <li>A reliable backend</li>
  <li>Well-designed APIs</li>
  <li>Data storage</li>
  <li>Authentication and security</li>
  <li>Deployment infrastructure</li>
  <li>Monitoring and error handling</li>
</ul>

<p>
  On top of that, AI applications introduce another layer:
</p>

<ul>
  <li>Language models</li>
  <li>Retrieval systems</li>
  <li>Embeddings and vector databases</li>
  <li>Tool calling</li>
  <li>Agents and workflows</li>
  <li>Evaluation and reliability</li>
</ul>

<p>
  The combination of these two worlds is what I find particularly exciting.
</p>

<h2>Learning by Breaking Things</h2>

<p>
  A significant part of my learning has come from things going wrong.
</p>

<p>
  I've encountered dependency problems, broken imports, configuration errors,
  routing issues, backend errors, deployment problems, and plenty of situations
  where the solution wasn't immediately obvious.
</p>

<p>
  At first, errors felt like interruptions.
</p>

<p>
  Eventually, I started seeing them differently.
</p>

<p>
  Every error is a question:
  <em>Why did this happen?</em>
</p>

<p>
  Finding the answer often teaches more than simply following a tutorial.
</p>

<p>
  That's why I prefer building projects while learning. A project gives
  concepts somewhere to live.
</p>

<p>
  Instead of learning React as a list of concepts, I can learn it while
  building an application. Instead of learning APIs theoretically, I can
  create one and make another application consume it. Instead of reading
  about RAG, I can try to build a system that actually retrieves information.
</p>

<h2>I'm Still Early in the Journey</h2>

<p>
  I don't consider myself a finished engineer.
</p>

<p>
  There are still many technologies I haven't mastered, systems I haven't
  designed, and problems I haven't encountered yet.
</p>

<p>
  And that's something I actually enjoy.
</p>

<p>
  Being early in the journey means there is still a huge amount of room to
  experiment.
</p>

<p>
  I can learn a new framework, rebuild an old project, explore a completely
  different programming language, or spend an evening trying to understand
  how a technology works internally.
</p>

<h2>What I'm Exploring Next</h2>

<p>
  My focus going forward is less about collecting technologies and more about
  understanding how to combine them.
</p>

<p>
  I'm particularly interested in becoming stronger in:
</p>

<ul>
  <li>Full-stack application architecture</li>
  <li>Backend and API engineering</li>
  <li>System design</li>
  <li>Artificial intelligence and LLM applications</li>
  <li>RAG and AI agent architectures</li>
  <li>Cloud deployment and infrastructure</li>
  <li>Building reliable production software</li>
</ul>

<p>
  Ultimately, I want to build software that does more than demonstrate a
  technology.
</p>

<p>
  I want to build things that are actually useful.
</p>

<h2>The Philosophy I'm Building Around</h2>

<p>
  Looking back, my journey can be summarized pretty simply.
</p>

<p>
  I find something interesting.
</p>

<p>
  I try to build it.
</p>

<p>
  It breaks.
</p>

<p>
  I figure out why.
</p>

<p>
  I rebuild it.
</p>

<p>
  And then I start thinking about the next thing.
</p>

<blockquote>
  "Build. Break. Learn. Improve. Repeat."
</blockquote>

<p>
  That's where I am right now.
</p>

<p>
  Still learning. Still experimenting. Still building.
</p>

<p>
  And hopefully, with every project, becoming a better engineer.
</p>

<h2>Explore My Work</h2>

<p>
  If you'd like to see what I'm currently building, you can explore my work on
  <a
    href="https://github.com/adithyan-gireeshkumar/"
    target="_blank"
    rel="noreferrer"
  >
    GitHub
  </a>
  or connect with me on
  <a
    href="https://www.linkedin.com/in/adithyan-gireeshkumar-0b4015412/"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn
  </a>
  .
</p>



            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Blogpost2;
