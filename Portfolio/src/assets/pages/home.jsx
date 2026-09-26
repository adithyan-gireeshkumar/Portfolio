import Blogpost2 from "../../components/blogpost2";
import { Cta39 } from "@/components/cta39";

export default function Home({ onOpenProjects }) {
  return (
    <div className="w-full">
      <Blogpost2 />
      <Cta39 onPrimaryClick={onOpenProjects} />
    </div>
  );
}