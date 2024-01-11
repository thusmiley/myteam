import searchIcon from "../../assets/desktop/icon-search.svg";
import filterIcon from "../../assets/mobile/icon-filter.svg";
import locationIcon from "../../assets/desktop/icon-location.svg";
import searchIconCoral from "../../assets/desktop/icon-search-coral.svg";
import { useState, useEffect } from "react";

const Search = ({ expandFilter, setExpandFilter, isMobile, titleInput, locationInput, fulltimeInput, setTitleInput, setLocationInput, setFulltimeInput }) => {

  const handleSubmit = (e) => {
    event.preventDefault();
    setExpandFilter(!expandFilter);
  };

  return (
    <div className="bg-white rounded-[6px] mb-[57px] text-left md:mb-[70px] xl:mb-[105px] font-semibold">
      <form action="" onSubmit={handleSubmit} className="job-form flex justify-between items-center relative p-4 xl:px-8">
        <div className="flex justify-start items-center">
          {!isMobile && <img src={searchIconCoral} alt="" className="w-6 h-auto object-contain object-center" />}
          <input
            type="search"
            name="title"
            placeholder="Filter by title…"
            className={`pl-6 md:pl-4 pb-0 mb-0 bg-white w-full text-[16px] leading-[20px] text-policeBlue placeholder:text-[16px]  placeholder:text-midnightGreen outline-[1px] outline-offset-2 outline-lightModeText border-[1px] box-shadow rounded-[6px] caret-policeBlue border-none focus:border-none xl:min-w-[270px]`}
            onChange={(e) => setTitleInput(e.target.value.toLowerCase())}
          />
        </div>

        {/* popup search mobile */}
        <div
          className={`${expandFilter && isMobile ? "fixed" : "hidden"} w-full h-full bg-black/50 top-0 bottom-0 left-0 right-0 z-20`}
          onClick={() => setExpandFilter(!expandFilter)}
        />
        <div className="flex items-center">
          {isMobile ? (
            // mobile search
            <div
              className={`${
                expandFilter ? "fixed" : "hidden"
              } top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-30 bg-white rounded-[6px] p-6 w-container overflow-hidden`}
            >
              <div className="flex justify-start items-center">
                <img src={locationIcon} alt="filter by location" />
                <input
                  type="search"
                  name="location"
                  placeholder="Filter by location..."
                  className={`pl-4 pb-0 mb-0 bg-white w-full text-[16px] leading-[20px] text-policeBlue placeholder:text-[16px] placeholder:text-midnightGreen outline-[1px] outline-offset-2 outline-lightModeText border-[1px] box-shadow rounded-[5px] caret-policeBlue border-none focus:border-none`}
                  onChange={(e) => setLocationInput(e.target.value.toLowerCase())}
                />
              </div>
              {/* fulltime checkbox  */}
              <div className="w-[120%] h-[1px] bg-sacramentoGreen/20 -ml-6 my-6" />
              <div className="flex justify-start items-center">
                <input
                  type="checkbox"
                  name="fulltime"
                  className="appearance-none shrink-0 peer border-none outline-none bg-sacramentoGreen/10 w-6 h-6 rounded-[3px] pb-0 mb-0 hover:bg-lightCoral transition-colors duration-200 ease-in-out cursor-pointer checked:bg-lightCoral checked:border-0 focus:border-none"
                  onChange={() => setFulltimeInput(!fulltimeInput)}
                />
                <svg width="15" height="12" className="absolute hidden  peer-checked:block outline-none ml-1 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 6.57l3.572 3.572L13.714 1" stroke="#FFF" strokeWidth="2" fill="none" fillRule="evenodd" />
                </svg>

                <label htmlFor="fulltime" className="text-policeBlue ml-4 font-bold text-[16px]">
                  Full Time Only
                </label>
              </div>
              <button type="submit" className="bg-sacramentoGreen p-[14px] rounded-[5px] w-full mt-6 hover:bg-policeBlue">
                Search
              </button>
            </div>
          ) : (
            // tablet search
            <div className="flex justify-end items-center">
              <div className="flex justify-center items-center px-5 relative xl:px-8">
                <div className="w-[1px] h-[82px] bg-sacramentoGreen/20 absolute left-0" />
                <img src={locationIcon} alt="filter by location" />
                <input
                  type="search"
                  name="location"
                  placeholder="Filter by location..."
                  className={`pl-4 pb-0 mb-0 bg-white text-[16px] leading-[20px] text-policeBlue placeholder:text-[16px] placeholder:text-midnightGreen outline-[1px] outline-offset-2 outline-lightModeText border-[1px] box-shadow rounded-[5px] caret-policeBlue border-none focus:border-none min-w-[135px]`}
                  onChange={(e) => setLocationInput(e.target.value.toLowerCase())}
                />
              </div>
              <div className="flex justify-start items-center pl-5 relative xl:pl-8">
                <div className="w-[1px] h-[82px] bg-sacramentoGreen/20 absolute left-0" />
                <input
                  type="checkbox"
                  name="fulltime"
                  className="appearance-none shrink-0 peer border-none outline-none bg-sacramentoGreen/10 w-6 h-6 rounded-[3px] pb-0 mb-0 hover:bg-lightCoral transition-colors duration-200 ease-in-out cursor-pointer checked:bg-lightCoral checked:border-0 focus:border-none"
                  onChange={() => setFulltimeInput(!fulltimeInput)}
                />
                <svg width="15" height="12" className="absolute hidden  peer-checked:block outline-none ml-1 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 6.57l3.572 3.572L13.714 1" stroke="#FFF" strokeWidth="2" fill="none" fillRule="evenodd" />
                </svg>

                <label htmlFor="fulltime" className="text-policeBlue ml-4 font-bold mr-3 min-w-[80px] text-[16px]">
                  Full Time
                </label>
              </div>
            </div>
          )}
          <div>
            {isMobile && (
              <button type="button" className="">
                <img src={filterIcon} alt="filter" className="w-5 h-auto object-contain object-right" onClick={() => setExpandFilter(!expandFilter)} />
              </button>
            )}
            <button type="submit" className="bg-sacramentoGreen p-[14px] rounded-[5px] ml-6 hover:bg-policeBlue xl:px-[35px]">
              {isMobile ? <img src={searchIcon} alt="search" className="w-5 h-auto object-contain object-center" /> : <p>Search</p>}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
