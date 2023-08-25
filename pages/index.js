import AboutSection from "@/components/AboutSection";
import Case from "@/components/Case";
import Counter from "@/components/Counter";
import FeatureBottom from "@/components/FeatureBottom";
import FeaturesCard from "@/components/FeaturesCard";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import LatestNews from "@/components/LatestNews";
import MySwiper from "@/components/MySwiper";
import Navbar from "@/components/Navbar";
import SecondNavbar from "@/components/SecondNavbar";
import TeamInfo from "@/components/TeamInfo";
import Testimonial from "@/components/Testimonial";
import Video from "@/components/Video";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const { ref, inView } = useInView({
    threshold: 0
  });
  useEffect(() => {
    console.log(inView);
  }, [inView]);
  return (
    <>
      <div className=" bg-white min-h-screen">

        <div className={`fixed left-0 right-0 ${!inView ? 'top-0' : '-top-[200px]'} z-50 duration-200`}>
          <SecondNavbar />
        </div>

        <Navbar refs={ref} />

        <MySwiper />

        <FeaturesCard />
        <AboutSection />
        <Case />
        <Video />
        <Counter />
        <FeatureBottom />
        <Gallery />
        <Testimonial />
        <TeamInfo />
        <LatestNews />

        <Footer />


      </div>
    </>
  );
}
