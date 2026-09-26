import { Blog7 } from "@/components/blog7";

function Projects({ onBack }) {
  return (
    <div>
      <div className="px-6 pt-6">
        <button
          type="button"
          onClick={onBack}
          className="rounded-md border border-border bg-background px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
        >
          ← Back to home
        </button>
      </div>
      <Blog7 />
    </div>
  );
}

export { Projects };