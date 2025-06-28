export const SideBarList = [
  {
    id: 1,
    element: "Schools",
    hasSubRoutes: true,
    key: "",
    path: "",
    SubRoutes: [
      {
        element: "Universities",
        childHasSubRoutes: true,
        key: "",
        childSubRoutes: [
          {
            element: "Federal Universities",
            key: "Federal",
          },
          {
            element: "State Universities",
            key: "State",
          },
          {
            element: "Private Universities",
            key: "Private",
          },
          {
            element: "Top Universities in Nigeria",
            key: "Top",
          },
        ],
      },
      {
        element: "Polytechnics",
        childHasSubRoutes: false,
        key: "poly",
      },
    ],
  },
  {
    id: 2,
    element: "Exams",
    hasSubRoutes: true,
    key: "",
    path: "",
    SubRoutes: [
      {
        element: "JAMB",
        childHasSubRoutes: true,
        key: "",
        childSubRoutes: [
          {
            element: "JAMB CAPS",
            key: "jamb",
          },
          {
            element: "JAMB Form",
            key: "jamb",
          },
          {
            element: "JAMB Result",
            key: "jamb",
          },
          {
            element: "JAMB Subject Combinations",
            key: "jamb",
          },
          {
            element: "JAMB Admission Letter",
            key: "jamb",
          },
          {
            element: "JAMB Result Upload",
            key: "jamb",
          },
          {
            element: "JAMB Cut Off Marks",
            key: "jamb",
          },
          {
            element: "JAMB Change Of Course",
            key: "jamb",
          },
          {
            element: "JAMB Change Of Instituition",
            key: "jamb",
          },
        ],
      },
      {
        element: "WAEC",
        childHasSubRoutes: true,
        key: "",
        childSubRoutes: [
          {
            element: "WAEC Gists",
            key: "waec",
          },
          {
            element: "WAEC Offices",
            key: "waec",
          },
          {
            element: "WAEC Result",
            key: "waec",
          },
          {
            element: "WAEC GCE Result",
            key: "waec",
          },
          {
            element: "WAEC Syllabus",
            key: "waec",
          },
        ],
      },
      {
        element: "NECO",
        childHasSubRoutes: true,
        key: "",
        childSubRoutes: [
          {
            element: "NECO Gists",
            key: "neco",
          },
          {
            element: "NECO Result",
            key: "neco",
          },
          {
            element: "NECO GCE Result",
            key: "neco",
          },
        ],
      },
      {
        element: "NABTEB",
        childHasSubRoutes: true,
        key: "",
        childSubRoutes: [
          {
            element: "NABTEB News",
            key: "nabteb",
          },
          {
            element: "NABTEB Results",
            key: "nabteb",
          },
          {
            element: "NABTEB GCE Results",
            key: "nabteb",
          },
        ],
      },
      {
        element: "JUPEB",
        childHasSubRoutes: true,
        key: "",
        childSubRoutes: [
          {
            element: "JUPEB News",
            key: "jupeb",
          },
          {
            element: "JUPEB Results",
            key: "jupeb",
          },
          {
            element: "JUPEB Syllabus",
            key: "jupeb",
          },
        ],
      },
      {
        element: "POSTUTME",
        childHasSubRoutes: true,
        key: "",
        childSubRoutes: [
          {
            element: "POSTUTME News",
            key: "jupeb",
          },
          {
            element: "POSTUTME Results",
            key: "jupeb",
          },
        ],
      },
    ],
  },

  {
    id: 3,
    element: "NYSC",
    hasSubRoutes: true,
    key: "nysc",
    path: "",
  },
  {
    id: 5,
    element: "Courses",
    hasSubRoutes: false,
    key: "courses",
    path: "",
  },
  {
    id: 4,
    element: "Admin",
    hasSubRoutes: false,
    key: "",
    path: "/adminLogin",
  },
];
