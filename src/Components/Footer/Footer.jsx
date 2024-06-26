import Logo from "../Logo/Logo";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

import "./Footer.css";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";

const dataList = {
  products: ["Download", "Pricing", "Location", "Server", "Countries"],
  category: ["Men", "Women", "Kids", "Best seller", "New Arrivals"],
  myAccount: [
    "My Account",
    "Discount",
    "Returns",
    "Order History",
    "Order Tracking",
  ],
};

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        {/* our-info */}
        <div className="footer__our-info">
          <Logo />
          <div className="footer__description">
            Lorem ispum is a placeholder text commonly used as a free text.
          </div>
          <div className="footer__icons">
            <div className="icon fb">
              <FacebookOutlinedIcon />
            </div>
            <div className="icon insta">
              <InstagramIcon />
            </div>
            <div className="icon x">
              <XIcon />
            </div>
            <div className="icon youtube">
              <YouTubeIcon />
            </div>
          </div>
          <div className="footer__copyright">
            copiyright 2024 <br /> @Ridakhaoua
          </div>
        </div>
        {/* product */}
        <div className="footer__list">
          <h3 className="footer__list-title">Products</h3>
          <ul>
            {dataList.products.map((product) => {
              return <li key={product}>{product}</li>;
            })}
          </ul>
        </div>
        {/* category */}
        <div className="footer__list">
          <h3 className="footer__list-title">Category</h3>
          <ul>
            {dataList.category.map((cat) => {
              return <li key={cat}>{cat}</li>;
            })}
          </ul>
        </div>
        {/* my account */}
        <div className="footer__list">
          <h3 className="footer__list-title">My Account</h3>
          <ul>
            {dataList.myAccount.map((account) => {
              return <li key={account}>{account}</li>;
            })}
          </ul>
        </div>
        {/* contact us */}
        <div className="footer__list contact">
          <h3 className="footer__list-title">Contact us</h3>
          <div className="footer__contact-us-list__adresse">
            {/* icon */}
            <div className="icon">
              <LocationOnOutlinedIcon />
            </div>
            <span>123 Street Trafford, London, UK</span>
          </div>
          <div className="footer__contact-us-list__email">
            {/* icon */}
            <div className="icon">
              <EmailOutlinedIcon />
            </div>
            <span>info@gmail.com</span>
          </div>
          <div className="footer__contact-us-list__phone">
            {/* icon */}
            <div className="icon">
              <PhoneAndroidOutlinedIcon />
            </div>
            <span>+456 6789083399</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
