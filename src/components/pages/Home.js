import React, { useEffect } from "react";
import DarkCard from "../DarkCard/DarkCard";
import ImageSlider from "../ImageSlider/ImageSlider";
import LightCard from "../LightCard/LightCard";
import img1 from "../../images/vector-1.png";
import img2 from "../../images/vector-2.png";
import img3 from "../../images/vector-3.png";
import img4 from "../../images/vector-4.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      offset: 200,
    });
  }, []);

  return (
    <div>
      <ImageSlider />
      <LightCard>
        <div data-aos="fade-right">
          <img src={img1} alt="vector" className="vector" />
        </div>
        <div className="vector-text-light">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
            recusandae voluptates vitae ullam obcaecati optio totam inventore
            eius doloremque dignissimos.Lorem ipsum dolor, sit amet consectetur
            adipisicing elit.
          </p>
        </div>
      </LightCard>
      <DarkCard>
        <div className="vector-text-dark">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
            recusandae voluptates vitae ullam obcaecati optio totam inventore
            eius doloremque dignissimos.Lorem ipsum dolor, sit amet consectetur
            adipisicing elit.
          </p>
        </div>
        <div data-aos="fade-left">
          <img src={img2} alt="vector" className="vector" />
        </div>
      </DarkCard>
      <LightCard>
        <div data-aos="fade-right">
          <img src={img3} alt="vector" className="vector" />
        </div>
        <div className="vector-text-light">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
            recusandae voluptates vitae ullam obcaecati optio totam inventore
            eius doloremque dignissimos.Lorem ipsum dolor, sit amet consectetur
            adipisicing elit.
          </p>
        </div>
      </LightCard>
      <DarkCard>
        <div className="vector-text-dark">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
            recusandae voluptates vitae ullam obcaecati optio totam inventore
            eius doloremque dignissimos.Lorem ipsum dolor, sit amet consectetur
            adipisicing elit.
          </p>
        </div>
        <div data-aos="fade-left">
          <img src={img4} alt="vector" className="vector" />
        </div>
      </DarkCard>
    </div>
  );
};

export default Home;
