import React from "react";
import { Suspense } from "react";
import Loading from "./loading";

export default function boardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<Loading />}>
      <>
        <button>
          <a href="localhost:3000" />
        </button>
        <div>{children}</div>
      </>
    </Suspense>
  );
}
