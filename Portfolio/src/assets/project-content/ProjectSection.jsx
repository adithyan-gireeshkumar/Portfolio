import { TextSection } from "./TextSection";
import { FeatureGridSection } from "./FeatureGridSection";
import { ImageSection } from "./ImageSection";

function ProjectSection({ section }) {
  switch (section.type) {
    case "text":
      return <TextSection section={section} />;

    case "feature-grid":
      return <FeatureGridSection section={section} />;

    case "image":
      return <ImageSection section={section} />;

    default:
      return null;
  }
}

export { ProjectSection };