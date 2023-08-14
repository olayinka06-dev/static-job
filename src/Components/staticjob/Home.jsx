import React from "react";
import { Header } from "./Header";
import { StaticJob } from "./StaticJob";

export const Home = () => {
  return (
    <section className="bg-primary">
      <header>
        <Header />
      </header>
      <main>
        <StaticJob/>
      </main>
    </section>
  );
};
