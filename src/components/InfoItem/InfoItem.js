import React from "react";

function InfoItem({ headline, firstText, secondText }) {
  return (
    <div className="info__item">
      <p className="info__headline">{headline}</p>
      <p className="info__text">{firstText}</p>
      <p className="info__text">{secondText}</p>
    </div>
  );
}

export default InfoItem;
