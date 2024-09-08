import React from "react";
import Interface from "./interface";

export const metadata = {
  title: "TeekhiMirchi | Marketplace",
  description: "Sell your products.",
};

const page = () => {
  return (
    <main className="max-w-[2560px] mx-auto">
      <Interface />
    </main>
  );
};

export default page;
