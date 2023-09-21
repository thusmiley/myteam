import plus from "../assets/icon-cross.svg";
import { useState } from "react";

const DirectorCard = ({ img, name, title, quote, twitter, linkedin }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`${!toggle ? "bg-sacramentoGreen" : "bg-darkGreen"} relative  text-center pt-8 pb-[56px] min-h-[253px]`}>
      <div className={`${!toggle ? "visible" : "hidden"} fadein`}>
        <img src={img} alt={name} className="director-img mx-auto" />
        <h4 className="heading4 mt-4">{name}</h4>
        <p className="title">{title}</p>
      </div>

      {/* overlay */}
      <div className={`${!toggle ? "hidden" : "visible"} fadein`}>
        <h4 className="heading4">{name}</h4>
        <p className="quotes mt-2 mb-6 max-w-[234px] mx-auto">{quote}</p>
        <div className="flexCenter space-x-4 socials">
          <a href={twitter}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
              <path
                fill="#FFF"
                d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
              />
            </svg>
          </a>
          <a href={linkedin}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path
                fill="#FFF"
                d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"
              />
            </svg>
          </a>
        </div>
      </div>
      <img
        src={plus}
        alt="plus"
        className={`${!toggle ? "bg-lightCoral" : "bg-raptureBlue rotate45 rotate-45"} p-5 rounded-full absolute bottom-[-28px] left-0 right-0 mx-auto cursor-pointer delay-100`}
        onClick={() => setToggle(!toggle)}
      />
    </div>
  );
};

export default DirectorCard;
