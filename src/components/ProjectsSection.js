import React, { useState } from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, IconButton, VStack, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Card from "./Card";

const projects = [
  {
    title: "ePiano",
    description:
      "3-Octave Online Piano Player Optimized For Keyboard Layouts- Made with Vanilla JS",
    getImageSrc: () => require("../images/ePiano.png"),
    link: "https://playepiano.vercel.app/",
  },
  {
    title: "Verbit",
    description:
      "AI Powered Unlimited Verbal Practice for IPMAT/CAT",
    getImageSrc: () => process.env.PUBLIC_URL + "/verbit.png",
    link: "#", // Update with actual link if available
  },
  {
    title: "Little Lemon",
    description:
      "Landing Page & Fully Functional Table Booking System For Fictional Restaurant- Made with React",
    getImageSrc: () => require("../images/littleLemon.png"),
    link: "https://synic-dx.github.io/Little-Lemon/",
  },
];

const MotionBox = motion(Box);

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { x: 120, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 260, damping: 22 } },
};

const ProjectsSection = () => {
  const [expanded, setExpanded] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });
  

  const toggleExpanded = () => setExpanded((s) => !s);

  return (
    <FullScreenSection
      backgroundColor="black"
      backgroundImage="https://raw.githubusercontent.com/Synic-dx/Synic-dx/react/src/images/bg1.jpg"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      fontFamily="Anta"
      id="projects-section"
      paddingTop="80px"
      minHeight={"100vh"}
    >
      <Heading as="h1" fontFamily="anta" fontWeight={400}>
        Featured Projects
      </Heading>
      {/* Responsive: horizontal scroll on small screens, grid on md+ (sizes like before).
          On small screens user can tap 'Expand' to stack projects vertically for normal page scrolling. */}

      {isMobile && !expanded ? (
        <>
          {/* Carousel area: fixed height to prevent page vertical scroll when unexpanded */}
          <Box position="relative" w={{ base: "90vw", md: "100%" }} mx={{ base: "auto", md: 0 }} h={{ base: "420px" }} overflow="hidden">
            <MotionBox
              className="horizontal-scroll"
              display="flex"
              gap={6}
              overflowX="auto"
              py={4}
              px={4}
              h="100%"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={containerVariants}
              sx={{
                "& > *": { flex: "0 0 auto" },
              }}
            >
              {projects.map((project) => (
                <MotionBox
                  key={project.title}
                  variants={itemVariants}
                  minW={{ base: "min(80vw, 320px)" }}
                  h="100%"
                  display="flex"
                  alignItems="stretch"
                >
                  <Card
                    title={project.title}
                    description={project.description}
                    imageSrc={project.getImageSrc()}
                    link={project.link}
                  />
                </MotionBox>
              ))}
            </MotionBox>

            {/* Icon toggle centered below the carousel, overlapping but not adding to height */}
            <Box position="absolute" left="50%" transform="translateX(-50%)" bottom="12px">
              <IconButton
                as={motion.button}
                aria-label={"Expand projects"}
                onClick={toggleExpanded}
                icon={<span style={{ fontSize: 18 }}>{"▾"}</span>}
                size="lg"
                variant="ghost"
                _hover={{ bg: "rgba(0,255,255,0.06)" }}
                borderRadius="full"
                borderWidth={1}
                borderColor="cyan"
                color="cyan"
                bg="rgba(0,0,0,0.4)"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </Box>
          </Box>
        </>
      ) : (
        // Expanded (mobile) or md+ grid view
        <>
          <VStack spacing={6} w={{ base: "90vw", md: "100%" }} mx={{ base: "auto", md: 0 }} align="stretch">
            <MotionBox
              display={{ base: "block", md: "grid" }}
              gridTemplateColumns={{ md: "repeat(3, 320px)" }}
              justifyContent={{ md: "center" }}
              gap={6}
              py={4}
              pb={6}
              mx="auto"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={containerVariants}
            >
              {projects.map((project) => (
                <MotionBox
                  key={project.title}
                  variants={itemVariants}
                  minW={{ base: "min(80vw, 320px)", md: "auto" }}
                  h={{ base: "420px", md: "420px" }}
                  display="flex"
                  alignItems="stretch"
                >
                  <Card
                    title={project.title}
                    description={project.description}
                    imageSrc={project.getImageSrc()}
                    link={project.link}
                  />
                </MotionBox>
              ))}
            </MotionBox>

            {isMobile && (
              <Box w="100%" textAlign="center" pb={6}>
                <IconButton
                  as={motion.button}
                  aria-label={"Collapse projects"}
                  onClick={toggleExpanded}
                  icon={<span style={{ fontSize: 18 }}>{"▴"}</span>}
                  size="lg"
                  variant="ghost"
                  _hover={{ bg: "rgba(0,255,255,0.06)" }}
                  borderRadius="full"
                  borderWidth={1}
                  borderColor="cyan"
                  color="cyan"
                  bg="rgba(0,0,0,0.4)"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              </Box>
            )}
          </VStack>
        </>
      )}
    </FullScreenSection>
  );
};

export default ProjectsSection;
