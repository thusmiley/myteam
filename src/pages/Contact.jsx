import individuals from "../assets/icon-person.svg";
import implement from "../assets/icon-cog.svg";
import productivity from "../assets/icon-chart.svg";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
          <form className="relative group mt-[56px] xl:w-[50%] xl:mt-0" onSubmit={handleSubmit(onSubmit)}>
            <div className="relative">
              <input
                type="text"
                placeholder="Name"
                className={`${errors.name ? "border-b-lightCoral placeholder:text-lightCoral" : ""}`}
                {...register("name", {
                  required: "Required",
                  pattern: {
                    value: /[a-zA-Z]/,
                    message: "Invalid",
                  },
                })}
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className={`${errors.email ? "border-b-lightCoral placeholder:text-lightCoral" : ""}`}
                {...register("email", {
                  required: "Required",
                  pattern: {
                    value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                    message: "Invalid",
                  },
                })}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Company Name"
                className={`${errors.company ? "border-b-lightCoral placeholder:text-lightCoral" : ""}`}
                {...register("company", {
                  pattern: {
                    value: /[a-zA-Z]/,
                    message: "Invalid",
                  },
                })}
              />
              {errors.company && <p className="error">{errors.company.message}</p>}
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Title"
                className={`${errors.title ? "border-b-lightCoral placeholder:text-lightCoral" : ""}`}
                {...register("title", {
                  pattern: {
                    value: /[a-zA-Z]/,
                    message: "Invalid",
                  },
                })}
              />
              {errors.title && <p className="error">{errors.title.message}</p>}
            </div>
            <div className="relative">
              <textarea
                cols="30"
                rows="4"
                placeholder="Message"
                className={`${errors.message ? "border-b-lightCoral placeholder:text-lightCoral" : ""}`}
                {...register("message", {
                  required: "Required",
                  pattern: {
                    minLength: 20,
                    message: "Please enter more than 20 characters.",
                  },
                })}
              ></textarea>
              {errors.message && <p className="error">{errors.message.message}</p>}
            </div>
            <button type="submit" className="cta cta-submit border-none cursor-pointer w-[123px] float-left " >submit</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
