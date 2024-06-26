import  { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import "./Hero.css"

export default function Hero() {
    const [isVisible, setIsvisible] = useState(false);


    const fadeInAnimation = useSpring({
        opacity: isVisible ? 1 : 0,
        config: { duration: 1000 },
    })

    const fadeFromRight = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(500px)",
        config: { duration: 500 },
    })


    useEffect(() => {
        setIsvisible(true);
    })

  return (
    <div className="hero">
        <animated.div style={fadeInAnimation}>
        <div className="hero__left">
        <div className="hero__small-title">Limited Time Only For Winter</div>
        <div className="hero__big-title">fash<span>i</span>on</div>
        <div className="hero__medium-title">LOOK YOUR BEST ON YOUR BEST DAY</div>
        <div className="hero__button-explore">
            <button>Explore Now!</button>
        </div>
      </div>
        </animated.div>
        <animated.div style={fadeFromRight}>
        <div className="hero__right">
        <img src="/public/Images/hero-image.png" alt="" />
      </div>
        </animated.div>
    </div>
  );
}
