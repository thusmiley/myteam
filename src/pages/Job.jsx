import { useParams } from "react-router-dom";

const Job = () => {
  const { jobId } = useParams();

  return <main className="relative w-container min-h-screen mx-auto pt-[160px] text-center md:pt-5 pb-[108px] md:pb-[112px] xl:pb-[120px] "></main>;
};

export default Job;
