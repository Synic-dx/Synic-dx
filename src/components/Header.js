import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faReddit, faNpm, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:i25ShinjanG@iimidr.ac.in",
  },
  {
    icon: faGithub,
    url: "https://github.com/Synic-dx",
  },
  {
    icon: faLinkedin,
    url: "https://in.linkedin.com/in/shinjan-garain",
  },
  {
    icon: faNpm,
    url: "https://www.npmjs.com/~synic-dx",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <HStack
      px={{ base: 6, md: 10, lg: 16 }}
      py={4}
      justifyContent="space-between"
      alignItems="center"
      position="fixed"
      top={0}
      left={0}
      right={0}
      backgroundColor="black"
      color="white"
      zIndex="10"
      w={'100vw'}
    >
      <nav>
        <HStack gap={{ base: 4, md: 6}}>
          {socials.map((social, i) => {
            const isMail = typeof social.url === 'string' && social.url.startsWith('mailto:');
            return (
              <motion.a
                key={`${social.url}-${i}`}
                href={social.url}
                {...(!isMail ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                onClick={(e) => {
                  if (isMail) {
                    // Ensure mailto works reliably: set location.href so mail client opens
                    e.preventDefault();
                    window.location.href = social.url;
                  }
                }}
                className="hoverAnimation"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ display: "inline-block" }}
              >
                <FontAwesomeIcon icon={social.icon} size="xl" />
              </motion.a>
            );
          })}
        </HStack>
      </nav>
      <nav>
          <HStack gap={{ base: 4, md: 6}}>
          <motion.a
            onClick={handleClick("projects")}
            href="#projects-section"
            className="hoverAnimation"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ display: "inline-block" }}
          >
            Projects
          </motion.a>
          <motion.a
            onClick={handleClick("skills")}
            href="#skills-section"
            className="hoverAnimation"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ display: "inline-block" }}
          >
            Skills
          </motion.a>
        </HStack>
      </nav>
    </HStack>
  );
};

export default Header;
