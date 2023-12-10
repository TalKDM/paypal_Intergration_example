import React from 'react';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const Rater = (props) => {
    const {rate, count} = props;
  return (
    <div>
        <span>
            {rate >= 1 ? <FaStar /> : rate >= 0.5 ? <FaStarHalfAlt /> : <CiStar />}
        </span>
        <span>
            {rate >= 2 ? <FaStar /> : rate >= 1.5 ? <FaStarHalfAlt /> : <CiStar />}
        </span>
        <span>
            {rate >= 3 ? <FaStar /> : rate >= 2.5 ? <FaStarHalfAlt /> : <CiStar />}
        </span>
        <span>
            {rate >= 4 ? <FaStar /> : rate >= 3.5 ? <FaStarHalfAlt /> : <CiStar />}
        </span>
        <span>
            {rate >= 5 ? <FaStar /> : rate >= 4.5 ? <FaStarHalfAlt /> : <CiStar />}
        </span>
        <span style={{marginLeft: "0.5rem"}}>{`(${count} Reviews)`}</span>
    </div>
  )
}

export default Rater