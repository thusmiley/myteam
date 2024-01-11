import individuals from "../assets/icon-person.svg";
import implement from "../assets/icon-cog.svg";
import productivity from "../assets/icon-chart.svg";

const Contact = () => {
  return (
    <main className="min-h-screen">
      <section className="pt-[160px] md:pt-[64px] contact-bg pb-[130px] md:pb-[150px] xl:pt-0 xl:mt-[70px] xl:pb-[120px]">
        <div className="w-container mx-auto text-center md:max-w-[542px] xl:flex xl:text-left xl:max-w-full">
          <div className="xl:w-[50%] xl:mr-[30px]">
            <h1 className="heading1 mb-4 md:mb-6 xl:mb-4 xl:text-[64px]">Contact</h1>
            <h2 className="heading5 text-lightCoral mb-10 xl:mb-8">Ask us about</h2>
            <div className="flex items-center justify-start text-left space-x-[23px] md:ml-4 xl:ml-0">
              <img src={individuals} alt="Experienced Individuals" className="h-[72px] w-[72px] object-contain mb-4 md:mb-0" />
              <p className="menu font-normal">The quality of our talent network</p>
            </div>
            <div className="flex items-center space-x-[23px] my-6 md:ml-4 justify-start text-left  xl:ml-0">
              <img src={implement} alt="Easy to Implement" className="h-[72px] w-[72px] object-contain mb-4  md:mb-0" />
              <p className="menu font-normal">Usage & implementation of our software</p>
            </div>
            <div className="flex items-center space-x-[23px] justify-start text-left md:ml-4 xl:ml-0">
              <img src={productivity} alt="Enhanced Productivity" className="h-[72px] w-[72px] object-contain mb-4 md:mb-0" />
              <p className="menu font-normal">How we help drive innovation</p>
            </div>
          </div>

          {/* contact form  */}
          <form className="relative group mt-[56px] xl:w-[50%] xl:mt-0" noValidate>
            <label htmlFor="name">
              <input type="text" name="name" id="name" placeholder="Name" required className="peer" pattern=".{3,}" />
              <span className="error peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">Please enter a name longer than 3 characters</span>
            </label>
            <label htmlFor="email">
              <input type="email" name="email" id="email" placeholder="Email Address" required className="peer" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
              <span className="error peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">This field is invalid</span>
            </label>

            <label htmlFor="company">
              <input type="text" name="company" id="company" placeholder="Company Name" />
            </label>
            <label htmlFor="title">
              <input type="text" name="title" id="title" placeholder="Title" />
            </label>
            <label htmlFor="message">
              <textarea name="message" id="message" cols="30" rows="4" placeholder="Message" className="peer" required></textarea>
              <span className="error peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">This field is required</span>
            </label>
            <input
              type="submit"
              name="submit"
              id="submit"
              value="submit"
              className="cta cta-submit border-none cursor-pointer w-[123px] float-left group-invalid:pointer-events-none group-invalid:opacity-25"
            />
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
