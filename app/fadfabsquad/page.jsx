"use client";

import React, { useState, useEffect } from "react";
import Timeline from "@/Component/FadFabSquad/Timeline";
import Header from "@/Component/Common/Header/Header";
import styled from "styled-components";
import FirstSection from "@/Component/FadFabSquad/FirstSection";
import SecondSection from "@/Component/FadFabSquad/SecondSection";
import Footer from "@/Component/Common/Footer/Footer";
import ThirdSection from "@/Component/FadFabSquad/ThirdSection";
import Form from "@/Component/FadFabSquad/Form/Form";
import Response from "@/Component/FadFabSquad/Form/Response"; // Is this being used?
import Form2 from "@/Component/FadFabSquad/Form/Form2"; // Is this being used?
import Loader1 from "@/Component/Common/Loaders/Loader1";

const TimelineContainer = styled.div`
  background: #101010;
`;

function page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader1 />
      ) : (
        <>
          <Header />
          <TimelineContainer>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <Timeline />
            <div id="form">
              <Form />
            </div>
          </TimelineContainer>
          <Footer />
        </>
      )}
    </div>
  );
}

export default page; // Capitalized component name (Page) in export
