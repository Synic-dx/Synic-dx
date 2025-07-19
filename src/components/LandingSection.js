import React, { useEffect, useState } from "react";
import { Avatar, Heading } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const Greeting = () => (
  <span>
    Hi, I am <span className="hoverBorderAnimation">@Synic</span>
  </span>
);

const Bio1 = () => (
  <span>
    I do <span className="hoverBorderAnimation">{"<code>"}</span>
  </span>
);

const LandingSection = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Trigger show content after mount — reliable on mobile too
    setShowContent(true);
  }, []);

  return (
    <FullScreenSection
      justifyContent="center"
      alignContent="center"
      isDarkBackground
      backgroundColor="black"
      backgroundImage="url('https://raw.githubusercontent.com/Synic-dx/Synic-dx/react/src/images/neonblack.jpg')"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      minHeight="100vh"
    >
      <Avatar
        id="avatar"
        name="Synic"
        size="xl"
        src="https://raw.githubusercontent.com/Synic-dx/Synic-dx/react/public/pfp.png"
        style={{
          opacity: showContent ? 1 : 0,
          transition: "opacity 1s ease-in-out",
        }}
      />
      <Heading
        as="h1"
        size="lg"
        style={{
          opacity: showContent ? 1 : 0,
          transition: "opacity 1s ease-in-out 0.3s",
        }}
        fontFamily="anta"
        fontWeight="600"
        color="white" // Ensure visibility on dark background
      >
        <Greeting />
      </Heading>
      <Heading
        as="h2"
        size="md"
        style={{
          opacity: showContent ? 1 : 0,
          transition: "opacity 1s ease-in-out 0.6s",
        }}
        fontFamily="anta"
        fontWeight="200"
        color="gray.300"
      >
        <Bio1 />
      </Heading>
    </FullScreenSection>
  );
};

export default LandingSection;
