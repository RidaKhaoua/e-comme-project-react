import "./LatestNews.css";
import TitleSection from "../TitleSection/TitleSection";
import imageShop3 from "../../assets/Images/image-shop-3.jpeg";
import imageShop4 from "../../assets/Images/image-shop-4.jpeg";
import imageShop5 from "../../assets/Images/image-shop-5.jpeg";
import Card from "../Card/Card";
function LatestNews() {
  return (
    <div className="latestNews">
      <TitleSection title="blogs" subTitle="Latest News" />
      <div className="latestNews__cards">
        <Card
          image={imageShop3}
          title="Trendy"
          subtitle="Lorem Ispum is a placeholder text commomly used as a free text."
          date="10 January 2021"
        />
        <Card
          image={imageShop4}
          title="Trendy"
          subtitle="Lorem Ispum is a placeholder text commomly used as a free text."
          date="10 January 2021"
        />
        <Card
          image={imageShop5}
          title="Trendy"
          subtitle="Lorem Ispum is a placeholder text commomly used as a free text."
          date="10 January 2021"
        />
      </div>
    </div>
  );
}

export default LatestNews;
