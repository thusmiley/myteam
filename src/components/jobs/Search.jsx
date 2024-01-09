import { useForm } from "react-hook-form";
import searchIcon from "../../assets/desktop/icon-search.svg";
import filterIcon from "../../assets/mobile/icon-filter.svg";
import locationIcon from "../../assets/desktop/icon-location.svg";

const Search = ({ expandFilter, setExpandFilter, isMobile }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-white rounded-[6px] mb-[57px] text-left">
      <form action="" onSubmit={handleSubmit(onSubmit)} className="flex justify-between items-center relative p-4">
        <input
          type="search"
          {...register("title", {
            pattern: {
              value: /[a-zA-Z]{2,}/,
              message: "Invalid",
            },
          })}
          placeholder="Filter by title…"
          className={`${
            errors.search ? "border-red-500 outline-red-500" : "border-transparent"
          } pl-6 pb-0 mb-0 bg-white w-full text-[16px] leading-[20px] text-sacramentoGreen placeholder:text-midnightGreen outline-[1px] outline-offset-2 outline-lightModeText border-[1px] box-shadow rounded-[6px] caret-sacramentoGreen border-none focus:border-none`}
        />
        {errors.title && <p className="mt-[6px] text-[12px] leading-[18px] tracking-[.08px] text-red-500 italic">{errors.title.message}</p>}
        {/* popup search mobile */}

        <div className={`${expandFilter ? "fixed" : "hidden"} w-full h-full bg-black/50 top-0 bottom-0 left-0 right-0 z-20`} onClick={() => setExpandFilter(!expandFilter)} />

        <div
          className={`${expandFilter ? "fixed" : "hidden"} top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-30 bg-white rounded-[6px] p-6 w-container overflow-hidden`}
        >
          <div className="flex justify-start items-center">
            <img src={locationIcon} alt="filter by location" />
            <input
              type="search"
              {...register("title", {
                pattern: {
                  value: /[a-zA-Z]{2,}/,
                  message: "Invalid",
                },
              })}
              placeholder="Filter by location..."
              className={`${
                errors.search ? "border-red-500 outline-red-500" : "border-transparent"
              } pl-4 pb-0 mb-0 bg-white w-full text-[16px] leading-[20px] text-sacramentoGreen placeholder:text-midnightGreen outline-[1px] outline-offset-2 outline-lightModeText border-[1px] box-shadow rounded-[5px] caret-sacramentoGreen border-none focus:border-none`}
            />
            {errors.title && <p className="mt-[6px] text-[12px] leading-[18px] tracking-[.08px] text-red-500 italic">{errors.title.message}</p>}
          </div>
          {/* fulltime checkbox  */}
          <div className="w-[120%] h-[1px] bg-sacramentoGreen/20 -ml-6 my-6" />
          <div className="flex justify-start items-center">
            <input
              {...register("fulltimeOnly")}
              type="checkbox"
              value="fulltime"
              name="fulltimeOnly"
              className="appearance-none shrink-0 peer border-none outline-none bg-sacramentoGreen/10 w-6 h-6 rounded-[3px] pb-0 mb-0 hover:bg-lightCoral transition-colors duration-200 ease-in-out cursor-pointer checked:bg-lightCoral checked:border-0 focus:border-none"
            />
            <svg width="15" height="12" className="absolute hidden  peer-checked:block outline-none ml-1 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 6.57l3.572 3.572L13.714 1" stroke="#FFF" strokeWidth="2" fill="none" fillRule="evenodd" />
            </svg>

            <label htmlFor="fulltimeOnly" className="text-sacramentoGreen ml-4 font-bold">
              Full Time Only
            </label>
            {errors.title && <p className="mt-[6px] text-[12px] leading-[18px] tracking-[.08px] text-red-500 italic">{errors.title.message}</p>}
          </div>
          <button type="submit" className="bg-sacramentoGreen p-[14px] rounded-[5px] w-full mt-6 hover:bg-policeBlue">
            Search
          </button>
        </div>

        {/* filter tablet */}
        {/* { !isMobile && <div
          className="flex justify-end items-center"
        >
          <div className="flex flex-col justify-start items-center ">
            <img src={locationIcon} alt="filter by location" />
            <input
              type="search"
              {...register("title", {
                pattern: {
                  value: /[a-zA-Z]{2,}/,
                  message: "Invalid",
                },
              })}
              placeholder="Filter by location..."
              className={`${
                errors.search ? "border-red-500 outline-red-500" : "border-transparent"
              } pl-4 pb-0 mb-0 bg-white w-full text-[16px] leading-[20px] text-sacramentoGreen placeholder:text-midnightGreen outline-[1px] outline-offset-2 outline-lightModeText border-[1px] box-shadow rounded-[5px] caret-sacramentoGreen border-none focus:border-none`}
            />
            {errors.title && <p className="mt-[6px] text-[12px] leading-[18px] tracking-[.08px] text-red-500 italic">{errors.title.message}</p>}
          </div>
          <div className="w-[120%] h-[1px] bg-sacramentoGreen/20 -ml-6 my-6" />
          <div className="flex justify-start items-center">
            <input
              {...register("fulltimeOnly")}
              type="checkbox"
              value="fulltime"
              name="fulltimeOnly"
              className="appearance-none shrink-0 peer border-none outline-none bg-sacramentoGreen/10 w-6 h-6 rounded-[3px] pb-0 mb-0 hover:bg-lightCoral transition-colors duration-200 ease-in-out cursor-pointer checked:bg-lightCoral checked:border-0 focus:border-none"
            />
            <svg width="15" height="12" className="absolute hidden  peer-checked:block outline-none ml-1 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 6.57l3.572 3.572L13.714 1" stroke="#FFF" strokeWidth="2" fill="none" fillRule="evenodd" />
            </svg>

            <label htmlFor="fulltimeOnly" className="text-sacramentoGreen ml-4 font-bold">
              Full Time Only
            </label>
            {errors.title && <p className="mt-[6px] text-[12px] leading-[18px] tracking-[.08px] text-red-500 italic">{errors.title.message}</p>}
          </div>
        </div>}
         */}

        <button type="button">
          <img src={filterIcon} alt="filter" className="w-5 h-auto object-contain object-center" onClick={() => setExpandFilter(!expandFilter)} />
        </button>

        <button type="submit" className="bg-lightCoral p-[14px] rounded-[5px] ml-6">
          <img src={searchIcon} alt="search" className="w-5 h-auto object-contain object-center" />
        </button>
      </form>
    </div>
  );
};

export default Search;
