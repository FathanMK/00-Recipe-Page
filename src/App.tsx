import { lazy } from "react";

const Header = lazy(() => import("./components/Header"));
const Instructions = lazy(() => import("./components/Instructions"));
const Nutritions = lazy(() => import("./components/Nutritions"));

export default function App() {
  return (
    <main className="container bg-eggshell">
      <section
        className="card bg-white color-wenge-brown outfit"
        style={{ maxWidth: "700px" }}
      >
        <Header />
        <hr style={{ color: "rgba(0,0,0,0.2)", marginBlock: "3rem" }} />
        <Instructions />
        <hr style={{ color: "rgba(0,0,0,0.2)", marginBlock: "3rem" }} />
        <Nutritions />
      </section>
    </main>
  );
}
