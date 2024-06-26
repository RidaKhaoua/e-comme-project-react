import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PersonIcon from "@mui/icons-material/Person";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import TitleSection from "../TitleSection/TitleSection";
import "./Statistique.css";
import StatistiqueOffers from "./StatistiqueOffers";
function Statistique() {
  return (
    <div className="statistique">
      <TitleSection title="stats" subTitle="our statistiques " />
      <div className="statistique__offers">
        <StatistiqueOffers
          title="Easy Order System "
          icon={<BorderColorIcon/>}
          subtitle="Lorem Ispum is a placeholder text commomly used as a free text."
          isActive={true}
        />
        <StatistiqueOffers
          title="On Time Delievery"
          icon={<AirportShuttleIcon/>}
          subtitle="Lorem Ispum is a placeholder text commomly used as a free text."
          isActive={false}
        />
        <StatistiqueOffers
          title="Money Back Gaurantee"
          icon={<MonetizationOnIcon/>}
          subtitle="Lorem Ispum is a placeholder text commomly used as a free text."
          isActive={false}
        />
         <StatistiqueOffers
          title="24/7 Customer Support"
          icon={<PersonIcon/>}
          subtitle="Lorem Ispum is a placeholder text commomly used as a free text."
          isActive={false}
        />
      </div>
    </div>
  );
}

export default Statistique;
