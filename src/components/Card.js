import React from "react";
import {
  Heading,
  HStack,
  Image,
  Text,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionLinkBox = motion(LinkBox);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc, link }) => {
  return (
    <MotionLinkBox
      display={"flex"}
      flexDirection={"column"}
      justifyContent="space-between"
      borderWidth="1px"
      borderRadius={12}
      borderColor="cyan"
      boxShadow="lg"
      alignItems="flex-start"
      backgroundColor="#0b0b0b"
      gap={{ base: 3, md: 4 }}
      p={{ base: 3, md: 4 }}
      maxW={{ base: "80vw", md: "320px" }}
      mx={{ base: "auto", md: 0 }}
      maxH={{ base: "360px", md: "100%" }}
      h="100%"
      overflow="hidden"
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <Image
        src={imageSrc}
        alt={title}
        backgroundColor="black"
        objectFit="cover"
        borderTopRadius={8}
        w="100%"
        h={{ base: "160px", md: "200px" }}
      />

      <Heading fontSize={{ base: "16px", md: "18px" }} fontFamily={"Anta"} fontWeight={600} noOfLines={1}>
        {title}
      </Heading>

      <Text fontFamily={"Karla"} noOfLines={{ base: 2, md: 3 }}>
        {description}
      </Text>

      <HStack>
        <FontAwesomeIcon icon={faArrowRight} />

        <LinkOverlay href={link} isExternal>
          Learn More
        </LinkOverlay>
      </HStack>
    </MotionLinkBox>
  );
};

export default Card;
