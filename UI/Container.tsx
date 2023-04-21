import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <section className="px-2 sm:px-4 py-2.5 rounded z-1 h-full w-full">
      <div className="h-full w-full container flex flex-wrap flex-col items-center justify-center mx-auto gap-6 max-w-6xl">
        {children}
      </div>
    </section>
  );
}

export default Container;
