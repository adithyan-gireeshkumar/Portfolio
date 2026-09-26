import { CaseStudy1 } from "../../components/case-study1";
import { projects } from "@/data/projects";

function ProjectDetails({ projectId, onBack }) {
  const project = projects.find(
    (project) => project.id === projectId
  );

  return (
    <>
      <div className="px-6 py-6">
        <button
          type="button"
          onClick={onBack}
          className="rounded-md border border-border bg-background px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
        >
          ← Back to projects
        </button>
      </div>

      <CaseStudy1 project={project} />
    </>
  );
}

export { ProjectDetails };