const AboutUs = () => {
  return (
    <div>
      <div>
        <div
          className="hero h-96"
          style={{
            backgroundImage:
              "url(https://media.istockphoto.com/id/165431275/photo/arrangement-of-assorted-sports-equipment-on-black-background.jpg?s=612x612&w=0&k=20&c=QQO6Nvms3HblGuEigg6ii8dO6Nq7kyOIn2doSCJtQLY=)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">About Us </h1>
            
              <p className="font-semibold  text-xl">Providing quality sports gear, our mission is to inspire active lifestyles through reliable products and exceptional customer service.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
