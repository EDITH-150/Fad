"use client";

import React, { useEffect, useState } from "react";
import Hero from "@/Component/Home/Hero/Hero";
import ImageGrid from "@/Component/Home/ImageGrid/imageGrid";
// import LocomotiveScroll from "locomotive-scroll";
import styled from "styled-components";
import Slider from "@/Component/Home/Slider/Sliders";
import Video1 from "@/Component/Home/Video/Video1";
import VidPara from "@/Component/Home/VideoParagraph/VidPara";
import Footer from "@/Component/Common/Footer/Footer";
import Form from "@/Component/Home/Form/Form";

const PageContainer = styled.div`
  cursor: auto;
  padding: 0 10rem;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

function Page() {
  const [scrollInstance, setScrollInstance] = useState(null);

  // useEffect(() => {
  //   const options = {
  //     lerp: 0.5,
  //     multiplier: 0.8,

  //     smartphone: {
  //       smooth: false,
  //     },
  //     tablet: {
  //       smooth: false,
  //     },
  //   };

  //   // Assuming LocomotiveScroll returns an instance of LocomotiveScrolls
  //   const LocomotiveScrolls = new LocomotiveScroll(options);
  //   setScrollInstance(LocomotiveScrolls);

  //   return () => {
  //     // Check if scrollInstance is valid before calling destroy()
  //     if (scrollInstance) {
  //       scrollInstance.destroy();
  //     }
  //   };
  // }, []);

  return (
    <PageContainer>
      <div className="hero">
        <Hero />
      </div>
      <div className="video1">
        <Video1 />
      </div>
      <div className="imageGrid">
        <ImageGrid />
      </div>
      <div className="slider">
        <Slider />
      </div>
      <div className="vidparagraph">
        <VidPara />
      </div>
      <div className="form">
        <Form />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </PageContainer>
  );
}

export default Page;
