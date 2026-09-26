export const projects = [
  {
    id: "phobiavr",
    title: "PhobiaVR",
    category: "AR/VR",
    type: "Workshop Project",
    summary:
      "An immersive virtual reality project exploring the possibilities of VR technology and its potential applications.",
    published: "2026",
    team: "Team of 10",
    context: "AR/VR Workshop – Young Innovator's Lab",
    projectUrl: "https://realityforge.vercel.app/",
  },

  {
    id: "thuna",
    title: "THUNA",
    category: "Web Application",
    type: "DBMS Mini Project",
    summary:
      "A crime database management system designed to handle crime and FIR-related information through separate interfaces for officers and the public.",
    published: "2026",
    team: "3 students",
    context: "Semester 4 DBMS Mini Project",
    projectParts: [
      "Officer Gateway",
      "Officer Portal",
      "Public Portal",
    ],
    features: [
      "Database design",
      "Relationships",
      "Authentication",
      "CRUD operations",
      "Search",
      "Filtering",
      "Role-based access",
    ],
    links: {
      officerGateway: "https://crime-database-management-system.vercel.app/",
      officerPortal: "https://cdms-officer.vercel.app/",
      publicPortal: "https://cdms-public.vercel.app/",
    },
  },
];