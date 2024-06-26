/* eslint-disable react/prop-types */

function StatistiqueOffers({ title, subtitle, icon, isActive }) {
  // console.log(Icon)

  return (
    <div>
      <div  className={`icon ${isActive ? "active" : ""}`}>{icon}</div>
      <h4 className="title">{title}</h4>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
}

export default StatistiqueOffers;
