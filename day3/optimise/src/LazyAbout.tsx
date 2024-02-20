import { lazy, Suspense } from "react";
import { Loading } from "./Loading";

const About = lazy(() => import("./About"));
const LazyAbout = () => {
  return (
    <Suspense fallback={<Loading />}>
      <About />
    </Suspense>
  );
};

export default LazyAbout;
