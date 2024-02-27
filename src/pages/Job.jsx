import { useParams } from "react-router-dom";
import data from "../utils/data.json";

const Job = ({ params }) => {
  const { jobId } = useParams();

  return (
    <main className="relative w-container min-h-screen mx-auto pt-[185px] text-center text-[16px] text-textColorJobs md:pt-0 pb-[108px] md:pb-[112px] xl:pb-[120px] md:max-w-[730px]">
      <section className="bg-white rounded-[6px] relative md:flex md:justify-between md:items-center md:py-5 md:px-10">
        <div className="md:flex md:justify-start md:items-center">
          <img
            src={data[jobId].logo}
            alt={`${data[jobId].company} logo`}
            className="mx-auto w-[50px] h-[50px] absolute top-[-25px] left-0 right-0 md:relative md:w-[100px] md:h-[100px] md:top-0 "
          />
          <div className="pt-[49px] md:pt-0 md:text-left md:ml-10">
            <h1 className="text-[20px] font-bold text-sacramentoGreen">{data[jobId].company}</h1>
            <h2 className="mt-[13px] mb-[27px] md:mb-0">{data[jobId].company.toLowerCase()}.com</h2>
          </div>
        </div>

        <button className="cta cta-black rounded-[6px] mb-8 text-[16px] md:mb-0">
          <a href={data[jobId].website}>Company Site</a>
        </button>
      </section>

      <section className="mt-6 bg-white rounded-[6px] py-10 px-6 text-left md:mt-8 md:p-10">
        <div>
          <div className="md:flex md:justify-between md:items-center">
            <div>
              <p className="">
                {data[jobId].postedAt}
                <span className="mx-3">&#x2022;</span>
                {data[jobId].contract}
              </p>
              <h2 className="font-bold text-[20px] mt-2 mb-3 text-sacramentoGreen">{data[jobId].position}</h2>
              <h4 className=" text-lightCoral text-[14px] font-bold">{data[jobId].location}</h4>
            </div>
            <button className="bg-sacramentoGreen p-[14px] rounded-[5px] text-white  hover:bg-policeBlue w-full mt-[50px] mb-8 font-bold md:w-[140px] md:my-0">
              <a href={`${data[jobId].apply}`}>Apply Now</a>
            </button>
          </div>

          <div className="leading-[26px] md:mt-10">
            <p>{data[jobId].description}</p>
            <h5 className="text-[20px] font-bold mt-[50px] mb-6 text-sacramentoGreen">Requirements</h5>
            <p>{data[jobId].requirements.content}</p>
            <ul className="space-y-2 mt-8">
              {data[jobId].requirements.items.map((item, index) => (
                <li key={index} className="relative ml-[30px]">
                  <span className="font-bold text-lightCoral absolute -left-[30px]">&#x2022;</span>
                  {item}
                </li>
              ))}
            </ul>
            <h5 className="text-[20px] font-bold mt-[50px] mb-6 text-sacramentoGreen">What You Will Do</h5>
            <p>{data[jobId].role.content}</p>
            <ul className="space-y-2 mt-8">
              {data[jobId].role.items.map((item, index) => (
                <li key={index} className="relative ml-[30px]">
                  <span className="font-bold text-lightCoral absolute -left-[30px]">{index + 1}</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Job;
