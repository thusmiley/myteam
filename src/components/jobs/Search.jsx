import searchIcon from "../../assets/desktop/icon-search.svg";
import filterIcon from "../../assets/mobile/icon-filter.svg";
import locationIcon from "../../assets/desktop/icon-location.svg";
import searchIconCoral from "../../assets/desktop/icon-search-coral.svg";
import { useState, useEffect } from "react";

const Search = ({ titleInput, locationInput, fulltimeInput, setTitleInput, setLocationInput, setFulltimeInput }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleInput(e.target.title.value.toLowerCase());
    setLocationInput(e.target.location.value.toLowerCase());
  };

  return (
    <div className="mb-[70px] text-left font-semibold md:bg-white md:rounded-[6px] xl:mb-[105px]">
      <form
        action=""
        onSubmit={handleSubmit}
        className="job-form flex flex-col justify-start items-center relative space-y-2 md:space-y-0 md:flex-row md:p-4 md:justify-between xl:px-8"
      >
        <div className="flex justify-start items-center bg-white rounded-[6px] p-4 w-full md:p-0 md:pr-6 md:w-[30%] xl:w-[40%]">
          <img src={searchIconCoral} alt="" className="w-6 h-auto object-contain object-center" />
          <input
            type="search"
            name="title"
            placeholder="Filter by title…"
            className={`pl-4 pb-0 mb-0 bg-white w-full text-[16px] leading-[20px] text-policeBlue placeholder:text-[16px]  placeholder:text-midnightGreen outline-[1px] outline-offset-2 outline-lightModeText border-[1px] box-shadow rounded-[6px] caret-policeBlue border-none focus:border-none xl:min-w-[270px]`}
          />
        </div>

        <div className="flex justify-start items-center relative bg-white rounded-[6px] p-4 w-full md:py-0 md:px-6 md:w-[30%]">
          <div className="hidden md:block absolute w-[1px] h-[82px] bg-sacramentoGreen/20  left-0" />
          <img src={locationIcon} alt="filter by location" className="w-[17px] h-auto" />
          <input type="search" name="location" placeholder="Filter by location..." className="min-w-[135px] ml-[7px]" />
        </div>

        <div className="flex justify-start items-center py-4 pr-4 relative w-full md:py-0 md:px-6 md:w-[20%]">
          <div className="hidden md:block absolute w-[1px] h-[82px] bg-sacramentoGreen/20 left-0" />
          <input
            type="checkbox"
            id="fulltime"
            name="fulltime"
            className="appearance-none shrink-0 peer border-none outline-none bg-white w-6 h-6 rounded-[3px] pb-0 mb-0 hover:bg-lightCoral transition-colors duration-200 ease-in-out cursor-pointer checked:bg-lightCoral checked:border-0 focus:border-none md:bg-sacramentoGreen/20 "
            onChange={() => setFulltimeInput(!fulltimeInput)}
          />
          <svg width="15" height="12" className="absolute hidden  peer-checked:block outline-none ml-1 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 6.57l3.572 3.572L13.714 1" stroke="#FFF" strokeWidth="2" fill="none" fillRule="evenodd" />
          </svg>

          <label htmlFor="fulltime" className="text-white ml-4 font-bold mr-3 min-w-[80px] text-[16px] md:text-policeBlue">
            Full Time
          </label>
        </div>

        <button
          type="submit"
          className="cta cta-white text-[16px] absolute bottom-0 right-0 rounded-[5px] md:bg-sacramentoGreen md:border-none md:ml-6 md:relative md:w-[15%] md:px-[14px] md:hover:bg-policeBlue md:hover:text-white xl:w-[10%]"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
