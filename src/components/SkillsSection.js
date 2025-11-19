import React from "react";
import {
  VStack,
  Box,
  HStack,
  CircularProgress,
  CircularProgressLabel,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Card from "./Card";
import "@fontsource/karla";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
const MotionCircularProgress = motion(CircularProgress);
import {
  faReact,
  faRProject,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faFileExcel, faServer } from "@fortawesome/free-solid-svg-icons";

const certificates = [
  {
    title: "HTML & CSS In Depth",
    description:
      "Completed an in-depth course covering HTML5 and CSS for responsive web design.",
    getImageSrc: () => require("../images/HTML&CSS.png"),
    link: "https://coursera.org/share/3dbf75c851f2deebb64bab8879175467",
  },
  {
    title: "Programming with Javascript",
    description:
      "Completed a comprehensive course covering fundamental web development concepts using JavaScript.",
    getImageSrc: () => require("../images/Javascript.png"),
    link: "https://coursera.org/share/1cf84da6773193a5641e6644a9c46c5b",
  },
  {
    title: "Version-Control",
    description:
      "Experienced with distributed Version Control System- Git- and basic Unix commands.",
    getImageSrc: () => require("../images/Version-Control.png"),
    link: "https://coursera.org/share/e1a50a0951dd07b19b2876f64a84bba1",
  },
  {
    title: "React",
    description:
      "Learned to use React and various UI libraries to develop fully interactive SPAs.",
    getImageSrc: () => require("../images/React.png"),
    link: "https://coursera.org/share/5548f2e9c9dfdc9ac94ab97afcd38b7e",
  },
  {
    title: "Principles of UI/UX",
    description:
      "Gained knowledge of foundational UI/UX principles and learned to use Figma",
    getImageSrc: () => require("../images/UIUX.png"),
    link: "https://coursera.org/share/123b44b509bf975ed8351d4e371988c2",
  },
  {
    title: "Meta Frontend Professional Specialization",
    description:
      "This 9-course program prepares learners for an entry-level career as a front-end developer.",
    getImageSrc: () => require("../images/final.png"),
    link: "https://coursera.org/share/78ae87ea933cca22f577fb8aca0156eb",
  },
];
const SkillsSection = () => {
  const CircularProgressSize = "calc(30px + 5.6vw)";
  const CircularProgressThickness = "6px";
  const vercelImage = "../images/Vercel.svg";

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#090A0A"
      p={"8%"}
      id="skills-section"
      minHeight={"50vh"}
    >
      <VStack gap={"50px"}>
        <VStack gap={10}>
          <Heading as="h1" fontFamily={"Anta"} fontWeight={400}>
            Skills Attained
          </Heading>
          <HStack>
            <MotionCircularProgress
              value={75}
              color="cyan.400"
              thickness={CircularProgressThickness}
              size={CircularProgressSize}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <CircularProgressLabel>
                <FontAwesomeIcon icon={faReact} color="#61DBFB" size="2x" />
              </CircularProgressLabel>
            </MotionCircularProgress>

            <MotionCircularProgress
              value={75}
              color="blue.400"
              thickness={CircularProgressThickness}
              size={CircularProgressSize}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <CircularProgressLabel>
                <FontAwesomeIcon icon={faRProject} color="#276DC3" size="2x" />
              </CircularProgressLabel>
            </MotionCircularProgress>

            <MotionCircularProgress
              value={50}
              color="#cc2927"
              thickness={CircularProgressThickness}
              size={CircularProgressSize}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <CircularProgressLabel>
                {/* SQL / Database icon */}
                <FontAwesomeIcon icon={faDatabase} color="#cc2927" size="2x" />
              </CircularProgressLabel>
            </MotionCircularProgress>

            <MotionCircularProgress
              value={75}
              color="#2ecc71"
              thickness={CircularProgressThickness}
              size={CircularProgressSize}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <CircularProgressLabel>
                <FontAwesomeIcon icon={faFileExcel} color="#2ecc71" size="2x" />
              </CircularProgressLabel>
            </MotionCircularProgress>
          </HStack>
        </VStack>

        <Accordion
          allowToggle
          w={"90vw"}
          backgroundColor={"black"}
          borderColor={"#090A0A"}
          borderRadius={"20px"}
          boxShadow={
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          }
        >
          <AccordionItem>
            <h2>
              <AccordionButton p={5}>
                <Box as="span" flex="1" textAlign="center">
                  <Heading
                    as="h3"
                    fontFamily={"Anta"}
                    fontWeight={200}
                    fontSize={"20px"}
                  >
                    Meta Frontend Professional Developer Certification
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p={8}>
              <Box
                display="grid"
                gridTemplateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(3, minmax(0, 1fr))",
                }}
                gridGap={8}
                mb={4}
              >
                {certificates.map((certificate) => (
                  <Card
                    key={certificate.title}
                    title={certificate.title}
                    description={certificate.description}
                    imageSrc={certificate.getImageSrc()}
                    link={certificate.link}
                  />
                ))}
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </FullScreenSection>
  );
};

export default SkillsSection;
