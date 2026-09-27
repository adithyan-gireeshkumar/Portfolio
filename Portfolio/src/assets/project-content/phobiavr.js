import phobiaVRImage from "./phobiavr/Pasted image.png";
export const phobiavrContent = {
  sections: [
    {
      type: "text",
      title: "Project Overview",
      image: phobiaVRImage,
      paragraphs: [
        "PhobiaVR is an immersive virtual reality project developed during the AR/VR Workshop at Young Innovator's Lab, CUSAT.",
        "The project explores how virtual environments can be used to represent progressively intense scenarios associated with different phobias.",
        "Our team of 10 members worked collaboratively to develop the experience and deploy a working prototype for demonstration.",
      ],
    },

    {
      type: "text",
      title: "The Concept",
      paragraphs: [
        "The central idea behind PhobiaVR is to place the user inside controlled virtual environments representing situations that may trigger different fears.",
        "Instead of presenting every scenario at the same intensity, the experiences are structured into three progressively more intense levels.",
        "The project currently includes four different experiences: Social Anxiety, Acrophobia, Aquaphobia, and Nyctophobia.",
      ],
    },

    {
      type: "feature-grid",
      title: "The Four Experiences",
      items: [
        {
          title: "Social Anxiety",
          description:
            "A progression of social situations designed around increasingly challenging public and interpersonal environments.",
          levels: [
            "Level 1 — Interrogation Room",
            "Level 2 — Live TV Broadcast",
            "Level 3 — World Arena Summit",
          ],
        },
        {
          title: "Acrophobia",
          description:
            "A progression of high-altitude environments representing increasingly extreme heights.",
          levels: [
            "Level 1 — Collapsing Skyscraper — 300m",
            "Level 2 — Volcano Rim — 3,700m",
            "Level 3 — Space Station — 400km",
          ],
        },
        {
          title: "Aquaphobia",
          description:
            "An underwater progression moving from an approaching tsunami to extreme ocean depths.",
          levels: [
            "Level 1 — Tsunami Approach",
            "Level 2 — Shipwreck Abyss — 120m",
            "Level 3 — Mariana Trench — 10,916m",
          ],
        },
        {
          title: "Nyctophobia",
          description:
            "A progression through increasingly dark and unfamiliar environments.",
          levels: [
            "Level 1 — Abandoned Hospital",
            "Level 2 — Underground Catacombs",
            "Level 3 — The Void",
          ],
        },
      ],
    },

    {
      type: "text",
      title: "Progressive Intensity",
      paragraphs: [
        "One of the main design ideas behind PhobiaVR is progressive intensity.",
        "Each experience contains three levels rather than presenting the most intense scenario immediately. This gives the project a structured progression from a comparatively accessible environment toward a much more extreme scenario.",
        "The progression is particularly visible in the Acrophobia experience, where the environments move from a high-rise setting to extreme-altitude scenarios.",
      ],
    },

    {
      type: "text",
      title: "Inside the Acrophobia Experience",
      paragraphs: [
        "The Acrophobia experience was one of the scenarios demonstrated during the project.",
        "The first level places the user in a high-altitude environment involving a collapsing skyscraper. The experience allows the user to look around the environment before the scenario becomes more intense.",
        "During the falling sequence, the visual environment changes as the user continues to descend. The experience eventually reaches a highly intense visual state before providing an option to retry the scenario.",
        "The experience demonstrates how environmental changes, movement, height, and visual progression can be combined to create an immersive VR scenario.",
      ],
    },

    {
      type: "text",
      title: "Building It as a Team",
      paragraphs: [
        "PhobiaVR was developed collaboratively by a team of 10 members during the AR/VR workshop.",
        "The project involved coordinating different parts of the experience and bringing them together into a working demonstration.",
        "Because the project was developed collaboratively, this portfolio documents my involvement as a team member rather than assigning specific components to me that I cannot accurately recall.",
      ],
    },

    {
      type: "text",
      title: "Workshop Context",
      paragraphs: [
        "The project was developed as part of an AR/VR workshop conducted through Young Innovator's Lab at CUSAT.",
        "The workshop provided an opportunity to work with immersive technologies and understand the process of turning an idea into a functioning VR experience.",
        "PhobiaVR was ultimately deployed as a working project and demonstrated as part of the workshop work.",
      ],
    },

    {
      type: "text",
      title: "What I Learned",
      paragraphs: [
        "Working on PhobiaVR provided practical exposure to immersive application development and collaborative project development.",
        "One of the important lessons was understanding that creating an immersive experience is not only about placing objects inside a virtual environment. The sequence of events, environmental changes, progression, and interaction all contribute to how the user experiences the scenario.",
        "The project also provided experience working as part of a larger team where different pieces of work had to come together into a single demonstration.",
      ],
    },

    {
      type: "text",
      title: "Future Improvements",
      paragraphs: [
        "PhobiaVR could be extended with more detailed interactions, additional environments, improved progression between levels, and more sophisticated user interaction.",
        "A future version could also provide better session management and a more structured way to configure individual experiences.",
        "Any clinical or therapeutic application would require appropriate professional involvement, research, testing, and validation beyond the scope of this workshop project.",
      ],
    },
  ],
};