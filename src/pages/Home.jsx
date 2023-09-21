import individuals from "../assets/icon-person.svg";
import implement from "../assets/icon-cog.svg";
import productivity from "../assets/icon-chart.svg";
import line from "../assets/icon-line.svg";
import kady from "../assets/avatar-kady.jpg";
import aiysha from "../assets/avatar-aiysha.jpg";
import arthur from "../assets/avatar-arthur.jpg";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <div>
      {/* hero */}
      <section className="pt-[160px] md:pt-[64px] home-hero-bg pb-[220px] md:pb-[256px]">
        <div className="w-container mx-auto text-center xl:flexBetween xl:text-left ">
          <h1 className="heading1 mb-[18px] md:mb-6 xl:mb-0">
            Find the <br />
            best <span className="text-lightCoral">talent</span>
          </h1>
          <div className="">
            <svg width="50" height="4" className="hidden xl:block" viewBox="0 0 50 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="50" height="4" fill="#79C8C7" />
            </svg>
            <p className="paragraph max-w-[457px] mx-auto xl:mt-[70px] xl:max-w-[445px]">
              Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change
              that.
            </p>
          </div>
        </div>
      </section>

      {/* features */}
      <section className="home-features-bg">
        <div className="w-container mx-auto py-[64px] md:py-[100px] md:max-w-[573px] xl:max-w-full xl:flex xl:py-[140px]">
          <div className="mb-[56px] md:mb-[64px] xl:mb-0 xl:w-[50%]">
            <img src={line} alt="line" className="mb-8 xl:mb-[54px]" />
            <h2 className="heading2 max-w-[240px] md:max-w-[445px]">Build & manage distributed teams like no one else.</h2>
          </div>

          <div className="text-center space-y-12 md:text-left md:space-y-8 xl:mt-[54px] xl:ml-[30px] xl:w-[50%]">
            <div className="md:flex md:items-center justify-start">
              <img src={individuals} alt="Experienced Individuals" className="h-[72px] w-[72px] object-contain object-center mx-auto mb-4 md:object-left md:mb-0" />
              <div className="md:ml-[23px]">
                <h3 className="heading3 mb-2 md:mb-4">Experienced Individuals</h3>
                <p className="quotes opacity-80">Our network is made up of highly experienced professionals who are passionate about what they do.</p>
              </div>
            </div>

            <div className="md:flex md:items-center justify-start">
              <img src={implement} alt="Easy to Implement" className="h-[72px] w-[72px] object-contain object-center mx-auto mb-4 md:object-left md:mb-0" />
              <div className="md:ml-[23px]">
                <h3 className="heading3 mb-2 md:mb-4">Easy to Implement</h3>
                <p className="quotes opacity-80">Our processes have been refined over years of implementation meaning our teams always deliver.</p>
              </div>
            </div>

            <div className="md:flex md:items-center justify-start">
              <img src={productivity} alt="Enhanced Productivity" className="h-[72px] w-[72px] object-contain object-center mx-auto mb-4 md:object-left md:mb-0" />
              <div className="md:ml-[23px]">
                <h3 className="heading3 mb-2 md:mb-4">Enhanced Productivity</h3>
                <p className="quotes opacity-80">Our customized platform with in-built analytics helps you manage your distributed teams.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section className="pt-[140px] pb-[164px] testimonials-bg md:py-[100px] xl:py-[140px]">
        <div className="w-container mx-auto text-center md:max-w-[573px] xl:max-w-full">
          <h2 className="heading2 mb-12 xl:max-w-[932px] xl:mx-auto xl:mb-[56px]">
            Delivering real results for top companies. Some of our <span className="text-raptureBlue">success stories.</span>
          </h2>
          <div className="space-y-12 xl:flexBetween xl:space-y-0 xl:space-x-[30px]">
            <div className="quote-bg pt-[36px]">
              <p className="quotes">
                “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than
                planned.”
              </p>
              <h4 className="heading4 mt-4 mb-[2px]">Kady Baker</h4>
              <p className="title">Product Manager at Bookmark</p>
              <img src={kady} alt="Kady Baker" className="client-img mx-auto mt-4" />
            </div>

            <div className="quote-bg pt-[36px]">
              <p className="quotes">
                “We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”
              </p>
              <h4 className="heading4 mt-4 mb-[2px]">Aiysha Reese</h4>
              <p className="title">Founder of Manage</p>
              <img src={aiysha} alt="Aiysha Reese" className="client-img mx-auto mt-4" />
            </div>

            <div className="quote-bg pt-[36px]">
              <p className="quotes">
                “Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first
                month.”
              </p>
              <h4 className="heading4 mt-4 mb-[2px]">Arthur Clarke</h4>
              <p className="title">Co-founder of MyPhysio</p>
              <img src={arthur} alt="Arthur Clarke" className="client-img mx-auto mt-4" />
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default Home;
