
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
      className="relative overflow-hidden bg-white"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-16 md:px-8 lg:grid-cols-2 lg:gap-12 lg:py-24">

        {/* Hero Content */}
        <div className="order-1 text-center lg:text-left">
          <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-[58px]">
            Build Your
            <br />
            <span className="gradient-text">
              Perfect Tech Stack
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-500 lg:mx-0 lg:text-lg">
            Discover powerful technologies, explore modern
            development tools, and build your perfect
            technology stack for your next big project.
          </p>

          {/* Hero Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <button
              type="button"
              onClick={handleExplore}
              className="brand-gradient cursor-pointer rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pink-100 transition hover:opacity-90"
            >
              Explore Technologies
            </button>

            <a
              href="#about"
              className="rounded-full border border-gray-300 px-7 py-3.5 text-sm font-semibold text-gray-700 transition hover:border-pink-500 hover:text-pink-600"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="order-2 flex items-center justify-center">
          <img
            src={bannerStack}
            alt="Modern development technology stack"
            className="h-auto w-full max-w-[540px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
