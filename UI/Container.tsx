import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <section className="px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap flex-col items-center justify-center mx-auto gap-6">
        {children}
      </div>
    </section>
  );
}

export default Container;
