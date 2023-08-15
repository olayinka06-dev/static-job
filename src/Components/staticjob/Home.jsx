import React from "react";
import { Header } from "./Header";
import { StaticJob } from "./StaticJob";

export default function Home(){
  return (
    <section className="bg-primary w-full min-h-screen">
      <header>
        <Header />
      </header>
      <main>
        <StaticJob/>
      </main>
      <div className="flex flex-col text-main gap-2 py-2 text-center">
        <span>Built with Love By <span className="text-[red]">Olayinka_Dev</span></span>
        <span>Follow and Give it a Star on <button class="inline-flex text-white bg-main border-0 py-2 px-6 focus:outline-none hover:opacity-[70%] rounded text-lg">
            GitHub
        </button></span>
      </div>
    </section>
  );
};
