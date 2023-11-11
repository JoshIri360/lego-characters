const Home = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="hero py-10">
        <h1 className="text-5xl md:text-8xl max-w-2xl">
          Lego Character Builder
        </h1>
      </div>
      <div className="flex gap-5">
        <div className="bg-[#D9D9D980] hover:bg-[#D9D9D9] transition-all p-3 md:p-5 mt-12 md:mt-0 rounded-lg cursor-pointer">
          <img src="/images/build.png" alt="build" className="w-24 md:w-36" />
          <p className="text-xl pt-2">Build</p>
        </div>
        <div className="bg-[#D9D9D980] hover:bg-[#D9D9D9] transition-all p-3 md:p-5 mt-12 md:mt-0 rounded-lg cursor-pointer">
          <img
            src="/images/viewCode.png"
            alt="viewCode"
            className="w-24 md:w-36"
          />
          <p className="text-xl pt-2">View Code</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
