
import bannerStack from "../assets/banner-stack.png";

function Hero() {
  const handleExplore = () => {
    document
      .getElementById("technologies")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="bg-white"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-5 pt-16 pb-20 md:px-8 lg:min-h-[520px] lg:grid-cols-2 lg:gap-16 lg:pt-20 lg:pb-24">

        {/* Left: Hero Content */}
        <div className="order-1 text-center lg:text-left">

          {/* Heading */}
          <h1 className="text-[36px] leading-[1.15] font-extrabold tracking-tight text-[#0f172a] sm:text-[46px] lg:text-[54px]">
            Build Your Ideal
            <br />
            <span className="gradient-text">
              Development Stack
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-[480px] text-sm leading-7 text-slate-500 sm:text-base lg:mx-0">
            Explore frontend, backend, database, and tooling
            options, compare them side by side, and put
            together the stack that fits your next project.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">

            <button
              type="button"
              onClick={handleExplore}
              className="brand-gradient cursor-pointer rounded-md px-5 py-3 text-xs font-semibold text-white transition hover:opacity-90"
            >
              Explore Technologies
            </button>

            <a
              href="#technologies"
              className="flex items-center justify-center rounded-md border border-slate-200 bg-white px-8 py-3 text-xs font-medium text-slate-600 transition hover:border-pink-300 hover:text-pink-600"
            >
              Learn More
            </a>

          </div>
        </div>

        {/* Right: Hero Illustration */}
        <div className="order-2 flex items-center justify-center lg:justify-end">
          <img
            src={bannerStack}
            alt="Development Stack Illustration"
            className="h-auto w-full max-w-[430px] object-contain sm:max-w-[470px] lg:max-w-[500px]"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
