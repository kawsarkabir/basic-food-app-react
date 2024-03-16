const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen my-8"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5">
              Tomatoes are used in many dishes. Not only do we like to eat them
              in fresh salads, they are also widely used in hot dishes. It is
              therefore not surprising that these red globes of pleasure end up
              on our shopping list every week.
            </p>
            <div>
              <button className="btn btn-accent rounded-full mr-8">
                Get Started
              </button>
              <button className="btn rounded-full bg-transparent text-white">
                Feed Back
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center lg:my-12">
        <h1 className="text-3xl font-bold mb-5">Our Recipes</h1>
        <p className="text-[#150B2B99]">
          A recipe is an instructional text used when cooking or baking food. It
          tells the person cooking the food, what ingredients they should use,
          how to use them and any nutritional facts that may be relevant.
          Recipes are written texts that are used to help people create new
          dishes, without needing to witness a demonstration.
        </p>
      </div>
    </div>
  );
};

export default Banner;
