import React from "react";
import {
  AiOutlineLoading3Quarters,
  AiFillCreditCard,
  AiOutlineCheckCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import {
  BsFillSunFill,
  BsFillMoonFill,
  BsFillBriefcaseFill,
  BsFillMegaphoneFill,
} from "react-icons/bs";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import {
  BiBrain,
  BiHelpCircle,
  BiBookOpen,
  BiArrowFromRight,
  BiArrowFromLeft,
  BiLeftArrowAlt,
  BiRightArrowAlt,
} from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import {
  FaMoneyBillWave,
  FaUserCircle,
  FaHeadSideVirus,
  FaLongArrowAltDown,
  FaShieldAlt,
  FaBars,
  FaBold,
  FaTimes,
  FaItalic,
  FaUnderline,
} from "react-icons/fa";
import {
  AiOutlineMail,
  AiOutlineBulb,
  AiOutlineUserAdd,
  AiOutlineTeam,
  AiOutlineGoogle,
  AiOutlineTwitter,
  AiOutlineLink,
  AiFillYoutube,
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlinePaperClip,
} from "react-icons/ai";
import { GiGears, GiTakeMyMoney } from "react-icons/gi";
import { TfiArrowsCorner } from "react-icons/tfi";

import {
  BsArrowLeft,
  BsArrowRight,
  BsImage,
  BsFillCalculatorFill,
  BsFillTrashFill,
} from "react-icons/bs";
import { CgArrowsV } from "react-icons/cg";
import { FiClock } from "react-icons/fi";
import styles from "./icon.module.css";
import electricistaIcono from "../../../assets/electricistaIcono.svg";
import jardineriaIcono from "../../../assets/jardineriaIcono.svg";
import limpiezaIcono from "../../../assets/limpiezaIcono.svg";
import paseadorIcono from "../../../assets/paseadorIcono.svg";
import tutoriaIcono from "../../../assets/tutoriaIcono.svg";

const Icon = ({ type, size, color = "inherit" }) => {
  const props = {
    size: size || "100%",
    className: `${styles.icon}`,
    color,
  };
  const icons = {
    loading: <AiOutlineLoading3Quarters {...props} />,
    card: <AiFillCreditCard {...props} />,
    arrowDown: <SlArrowDown {...props} />,
    arrowUp: <SlArrowUp {...props} />,
    bulb: <AiOutlineBulb {...props} />,
    userplus: <AiOutlineUserAdd {...props} />,
    sun: <BsFillSunFill {...props} />,
    moon: <BsFillMoonFill {...props} />,
    ai: <BiBrain {...props} />,
    location: <ImLocation {...props} />,
    budget: <FaMoneyBillWave {...props} />,
    user: <FaUserCircle {...props} />,
    case: <BsFillBriefcaseFill {...props} />,
    aiHead: <FaHeadSideVirus {...props} />,
    gears: <GiGears {...props} />,
    arrows: <TfiArrowsCorner {...props} />,
    leftArrow: <BsArrowLeft {...props} />,
    rightArrow: <BsArrowRight {...props} />,
    image: <BsImage {...props} />,
    downArrow: <FaLongArrowAltDown {...props} />,
    mail: <AiOutlineMail {...props} />,
    shield: <FaShieldAlt {...props} />,
    bars: <FaBars {...props} />,
    help: <BiHelpCircle {...props} />,
    close: <FaTimes {...props} />,
    bold: <FaBold {...props} />,
    underline: <FaUnderline {...props} />,
    italic: <FaItalic {...props} />,
    checkMark: <AiOutlineCheckCircle {...props} />,
    money: <GiTakeMyMoney {...props} />,
    megaphone: <BsFillMegaphoneFill {...props} />,
    team: <AiOutlineTeam {...props} />,
    book: <BiBookOpen {...props} />,
    search: <AiOutlineSearch {...props} />,
    calc: <BsFillCalculatorFill {...props} />,
    clock: <FiClock {...props} />,
    google: <AiOutlineGoogle {...props} />,
    facebook: <AiFillFacebook {...props} />,
    twitter: <AiOutlineTwitter {...props} />,
    trash: <BsFillTrashFill {...props} />,
    upDownArrows: <CgArrowsV {...props} />,
    doubleArrowLeft: <BiArrowFromRight {...props} />,
    doubleArrowRight: <BiArrowFromLeft {...props} />,
    singleArrowLeft: <BiLeftArrowAlt {...props} />,
    singleArrowRight: <BiRightArrowAlt {...props} />,
    link: <AiOutlineLink {...props} />,
    youtube: <AiFillYoutube {...props} />,
    linkedin: <AiFillLinkedin {...props} />,
    clip: <AiOutlinePaperClip {...props} />,
    electricistaIcono: (
      <img
        src={electricistaIcono}
        style={{ width: size, height: size, transform: "scale(2.5)" }}
      />
    ),
    jardineriaIcono: (
      <img
        src={jardineriaIcono}
        style={{ width: size, height: size, transform: "scale(2.5)" }}
      />
    ),
    limpiezaIcono: (
      <img
        src={limpiezaIcono}
        style={{ width: size, height: size, transform: "scale(2.5)" }}
      />
    ),
    paseadorIcono: (
      <img
        src={paseadorIcono}
        style={{ width: size, height: size, transform: "scale(2.5)" }}
      />
    ),
    tutoriaIcono: (
      <img
        src={tutoriaIcono}
        style={{ width: size, height: size, transform: "scale(2.5)" }}
      />
    ),
  };
  return <i>{icons[type]}</i>;
};

export default Icon;
