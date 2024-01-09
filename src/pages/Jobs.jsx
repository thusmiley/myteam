import { useState, useEffect } from "react";
import Search from "../components/jobs/Search";
import data from "../utils/data.json";
import JobCard from "../components/jobs/JobCard";

const Jobs = () => {
  const [expandFilter, setExpandFilter] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <main className="relative w-container mx-auto pt-[160px] text-center md:pt-[64px] pb-[108px] md:pb-[112px] xl:pb-[120px] ">
      <Search expandFilter={expandFilter} setExpandFilter={setExpandFilter} isMobile={isMobile} />

      <section className="space-y-[50px] md:grid md:grid-cols-2 md:space-y-0 md:gap-x-[11px] md:gap-y-[65px]">
        {data.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </section>

      <button className="cta cta-white mt-8 transition-colors duration-200 ease-in-out md:mt-[56px]">load more</button>
    </main>
  );
};

export default Jobs;
