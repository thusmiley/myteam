import DirectorCard from "../components/DirectorCard";
import { directorList } from "../constants/index";
import verge from "../assets/logo-the-verge.png";
import jakarta from "../assets/logo-jakarta-post.png";
import guardian from "../assets/logo-the-guardian.png";
import radar from "../assets/logo-tech-radar.png";
import gadgets from "../assets/logo-gadgets-now.png";
import line from "../assets/icon-line.svg";
import CTA from "../components/CTA";

const About = () => {
  return (
    <main className="min-h-screen">
      {/* hero */}
      <section className="pt-[160px]  md:pt-[64px] about-hero-bg pb-[108px] md:pb-[112px] xl:pb-[120px]">
        <div className="w-container mx-auto text-center xl:flex xl:text-left ">
          <h1 className="heading1 mb-[18px] md:mb-6 xl:mb-0 xl:w-[30%]">About</h1>
          <div className="xl:ml-[150px]">
            <img src={line} alt="line" className="hidden xl:block" />
            <p className="paragraph max-w-[457px] mx-auto xl:mt-10 xl:max-w-full">
              We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes.
              Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.
            </p>
          </div>
        </div>
      </section>

      {/* meet the directors */}
      <section className="about-directors-bg  pt-[88px] pb-[116px] text-center bg-deepJungleGreen md:pt-[100px] md:pb-[128px] xl:pt-[140px] xl:pb-[168px]">
        <div className="w-container mx-auto">
          <h2 className="heading2 mb-12 xl:mb-[64px]">Meet the directors</h2>

          <div className="space-y-[52px] md:grid md:grid-cols-2 md:grid-rows-3 md:space-y-0 md:gap-x-[11px]  md:gap-y-[76px] xl:grid-rows-2 xl:grid-cols-3 xl:gap-x-[30px]">
            {directorList.map((card) => (
              <DirectorCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* clients */}
      <section className="py-[88px] clients-bg  md:py-[100px] xl:py-[140px]">
        <div className="w-container mx-auto text-center">
          <h2 className="heading2 mb-[64px]">Some of our clients</h2>
          <div className="space-y-[64px] md:space-y-0 md:flex md:flex-wrap md:gap-[50px] md:justify-center xl:justify-between">
            <img src={verge} alt="the verge" className="h-6 w-full object-contain object-center md:object-left md:w-auto" />
            <img src={jakarta} alt="the jakarta post" className="h-5 w-full object-contain object-center md:object-left md:w-auto" />
            <img src={guardian} alt="the guardian" className="h-6 w-full object-contain object-center md:object-left md:w-auto" />
            <img src={radar} alt="tech radar" className="h-6 w-full object-contain object-center md:object-left md:w-auto" />
            <img src={gadgets} alt="gadgets now" className="h-7 w-full object-contain object-center  md:object-left md:w-auto" />
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default About;
