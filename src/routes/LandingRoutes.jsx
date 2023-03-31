import LandingRoot from "@/routes/landing/LandingRoot";
import LandingIndex from "@/routes/landing/LandingIndex";

import FeaturesRoot from "@/routes/landing/features/FeaturesRoot";
import FeaturesIndex from "@/routes/landing/features/FeaturesIndex";
import FeaturesToast from "@/routes/landing/features/FeaturesToast";

import ErrorPage from "@/error-page";

const LandingRoutes = [
  {
    path: "/",
    element: <LandingRoot />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingIndex /> },
      {
        path: "cv",
        element: <LandingIndex />,
      },
      {
        path: "projects",
        element: <LandingIndex />,
      },
      {
        path: "skills",
        element: <LandingIndex />,
      },
      {
        path: "features",
        element: <FeaturesRoot />,
        children: [
          { index: true, element: <FeaturesIndex /> },
          {
            path: "toast",
            element: <FeaturesToast />,
          },
        ],
      },
    ],
  },
];

export default LandingRoutes;
