import { useState, useEffect } from "react";
import Search from "../components/jobs/Search";
import data from "../utils/data.json";
import JobCard from "../components/jobs/JobCard";

const Jobs = () => {
  const [loadMore, setLoadMore] = useState(9);
  const [titleInput, setTitleInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [fulltimeInput, setFulltimeInput] = useState(false);

  const handleLoadMore = () => {
    setLoadMore(loadMore + 3);
  };

  const filterJobs = data
    .filter((job) => {
      if (titleInput === "") {
        return job;
      } else {
        return job.position.toLowerCase().includes(titleInput);
      }
    })
    .filter((job) => {
      if (locationInput === "") {
        return job;
      } else {
        return job.location.toLowerCase().includes(locationInput);
      }
    })
    .filter((job) => {
      if (fulltimeInput === false) {
        return job;
      } else {
        return job.contract.includes("Full Time");
      }
    });

  return (
    <main className="relative w-container min-h-screen mx-auto pt-[160px] text-center md:pt-5 pb-[108px] md:pb-[112px] xl:pb-[120px] ">
      <Search
        titleInput={titleInput}
        locationInput={locationInput}
        fulltimeInput={fulltimeInput}
        setTitleInput={setTitleInput}
        setLocationInput={setLocationInput}
        setFulltimeInput={setFulltimeInput}
      />

      <section className="space-y-[50px] md:grid md:grid-cols-2 md:space-y-0 md:gap-x-[11px] md:gap-y-[65px] xl:grid-cols-3 xl:gap-x-[30px]">
        {filterJobs?.slice(0, loadMore).map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </section>

      {filterJobs.length === 0 && <p>Sorry, there are no matching jobs.</p>}

      {filterJobs.length > 9 && (
        <button
          className="cta cta-white mt-8 transition-colors duration-200 ease-in-out md:mt-[56px]"
          onClick={handleLoadMore}
        >
          load more
        </button>
      )}
    </main>
  );
};

export default Jobs;
