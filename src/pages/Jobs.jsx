import { useState, useEffect } from "react";
import Search from "../components/jobs/Search";
import data from "../utils/data.json";
import JobCard from "../components/jobs/JobCard";

const Jobs = () => {
  const [expandFilter, setExpandFilter] = useState(false);

  return (
    <main className="relative w-container mx-auto pt-[160px] md:pt-[64px] pb-[108px] md:pb-[112px] xl:pb-[120px] ">
      <Search expandFilter={expandFilter} setExpandFilter={setExpandFilter} />

      <section className="space-y-[50px]">
        {data.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </section>
    </main>
  );
};

export default Jobs;
