const Banner = () => {
  return (
    <div>
      <div
        className="hero h-3/4"
        style={{
          backgroundImage:
            "url(https://www.siachen.com/wp-content/uploads/2023/12/khelya-sports-annapoorneswari-nagar-bangalore-sports-goods-dealers-itzztzzu76.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Let's Level Up Your Game</h1>
            <p className="mb-5">
            Nam natoque in massa bibendum lacus, et arcu cursus nisl rutrum at tincidunt in sit in massa adipiscing lorem fusce.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
