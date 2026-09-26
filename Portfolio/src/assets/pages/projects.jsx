import { Blog7 } from "@/components/blog7";

function Projects({ onBack, onOpenProject }) {
  return (
    <div>
      <div className="flex justify-start px-6 py-6">
        <button
          type="button"
          onClick={onBack}
          className="rounded-md border border-border bg-background px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
        >
          ← Back to home
        </button>
      </div>

      <Blog7 onTitleClick={onOpenProject} />
    </div>
  );
}

export { Projects };