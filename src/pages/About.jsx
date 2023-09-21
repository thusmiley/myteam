import DirectorCard from "../components/DirectorCard";
import { directorList } from "../constants/index";
import verge from "../assets/logo-the-verge.png";
import jakarta from "../assets/logo-jakarta-post.png";
import guardian from "../assets/logo-the-guardian.png";
import radar from "../assets/logo-tech-radar.png";
import gadgets from "../assets/logo-gadgets-now.png";

const About = () => {
  return (
    <div>
      {/* hero */}
      <section className="pt-[160px] md:pt-[64px] about-hero-bg pb-[108px] md:pb-[112px]">
        <div className="w-container mx-auto text-center xl:flexBetween xl:text-left ">
          <h1 className="heading1 mb-[18px] md:mb-6 xl:mb-0">About</h1>
          <div className="">
            <svg width="50" height="4" className="hidden xl:block" viewBox="0 0 50 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="50" height="4" fill="#79C8C7" />
            </svg>
            <p className="paragraph max-w-[457px] mx-auto xl:mt-[70px] xl:max-w-[445px]">
              We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes.
              Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.
            </p>
          </div>
        </div>
      </section>

      {/* meet the directors */}
      <section className="about-directors-bg  pt-[88px] pb-[116px] text-center bg-deepJungleGreen md:pt-[100px] md:pb-[128px]">
        <div className="w-container mx-auto">
          <h2 className="heading2 mb-12">Meet the directors</h2>

          <div className="space-y-[52px] md:grid md:grid-cols-2 md:grid-rows-3 md:space-y-0 md:gap-x-[11px]  md:gap-y-[76px]">
            {directorList.map((card) => (
              <DirectorCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* clients */}
      <section className="py-[88px] clients-bg  md:py-[100px]">
        <div className="w-container mx-auto text-center">
          <h2 className="heading2 mb-[64px]">Some of our clients</h2>
          <div className="space-y-[64px] md:space-y-0 md:flex md:flex-wrap md:gap-[50px] md:justify-center">
            <img src={verge} alt="the verge" className="h-6 w-auto object-contain object-center md:object-left" />
            <img src={jakarta} alt="the jakarta post" className="h-5 w-auto object-contain object-center md:object-left" />
            <img src={guardian} alt="the guardian" className="h-6 w-auto object-contain object-center md:object-left" />
            <img src={radar} alt="tech radar" className="h-6 w-auto object-contain object-center md:object-left" />
            <img src={gadgets} alt="gadgets now" className="h-7 w-auto object-contain object-center  md:object-left" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
