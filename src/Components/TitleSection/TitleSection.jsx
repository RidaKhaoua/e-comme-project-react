/* eslint-disable react/prop-types */

import "./TitleSection.css"
export default function TitleSection({title, subTitle}) {
  return (
    <div className="title-section">
        <h2 className="title-section__title">{title}</h2>
        <div className="title-section__subTitle">{subTitle}</div>
    </div>
  )
}
