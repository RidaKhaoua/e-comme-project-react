import { useEffect, useState } from "react";
import TitleSection from "../TitleSection/TitleSection";
import "./NewArrival.css";
import { useRef } from "react";
import { useSpring, animated } from "react-spring";

function NewArrival() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  //animation properties using Spring
  const animationProps = useSpring({
    opacity: isVisible ? 1 : 0,
    config: { duration: 2000 },
  });

  // Intersection Observer callback
  const handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    });
  };

  
 
  useEffect(() => {
    // Create the Intersection Observer
  const observer = new IntersectionObserver(handleIntersect, {
    threshold: 0.5, // Change this threshold as needed
  });
    const { current } = ref;
    if (current) {
      observer.observe(current);
    }
    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
      <div className="newArrival">
        <TitleSection title="new arrival" subTitle="latest collection" />
        <div className="newArrival__container">
          <animated.div ref={ref} style={animationProps}>
            <div className="newArrival__left">
              <div className="newArrival__left-top">
                <div className="newArrival__date-trend">2024 Trends</div>
                <div className="newArrival__name-trend">
                  Women’s Smart Skirt
                </div>
              </div>
              <div className="newArrival__left-bottom">
                <div className="newArrival__date-trend">2024 Trends</div>
                <div className="newArrival__name-trend">
                  Women’s Smart Skirt
                </div>
              </div>
            </div>
          </animated.div>

          <animated.div ref={ref} style={animationProps}>
          <div className="newArrival__right">
            <div className="newArrival__date-trend">2024 Trends</div>
            <div className="newArrival__name-trend">
              Women’s Smart Skirt
            </div>
          </div>
          </animated.div>
        </div>
      </div>
  );
}

export default NewArrival;
