import Lenis from "lenis";
import React, { useEffect } from "react";

function FixedFooterAnimation() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <div className="h-[95vh] bg-black flex flex-col justify-center items-center">
        <p className="text-6xl font-semibold text-center text-white">
          Sticky Footer
        </p>
      </div>

      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        }}
        className="relative h-[400px] bg-neutral-300"
      >
        <div
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
          className="fixed h-[400px] bottom-0 w-full"
        >
          <Content />
        </div>
      </div>
    </div>
  );
}

export default FixedFooterAnimation;

export function Content() {
  return (
    <div className="bg-[#4E4E5A] py-8 px-12 h-full w-full flex flex-col justify-between">
      <Section2 />
    </div>
  );
}

const Section2 = () => {
  return (
    <div className="flex justify-between items-end">
      <h1 className="text-[14vw] leading-[0.8] mt-10">Sticky Footer</h1>
      <p>©copyright</p>
    </div>
  );
};
