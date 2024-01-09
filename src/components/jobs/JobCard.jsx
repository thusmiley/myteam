const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-[6px] text-policeBlue pt-[49px] pb-8 px-8 font-normal">
      <img src={job.logo} alt={`${job.company} logo`} />
      <p className="text-[16px]">
        {job.postedAt}
        <span className="mx-3">&#x2022;</span>
        {job.contract}
      </p>
      <h2 className="font-bold text-[20px] my-3 text-darkGreen cursor-pointer transition-colors duration-200 ease-in-out hover:text-policeBlue">
        <a href="/">{job.position}</a>
      </h2>
      <h3 className="text-[16px]">{job.company}</h3>
      <h4 className="mt-10 text-lightCoral text-[14px]">{job.location}</h4>
    </div>
  );
};

export default JobCard;
