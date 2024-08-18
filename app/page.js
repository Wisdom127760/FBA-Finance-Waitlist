import HeroSection from "@components/HeroSection";
import CallToAction from "@components/CallToAction";
import ImageSection from "@components/ImageSection";
const Home = () => {
  return (
    <main className="mt-16 w-full max-w-[1273px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <section className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
          <HeroSection />
          <CallToAction />
        </section>
        <ImageSection />
      </div>
    </main>
  );
};

export default Home;
