import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faReddit, faNpm } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:shinjan1280@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Synic-dx",
  },
  // {
  //   icon: faReddit,
  //   url: "https://www.reddit.com/user/Shinjan128/",
  // },
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
          {socials.map((social) => (
            <a
              key={social.icon}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hoverAnimation"
            >
              <FontAwesomeIcon icon={social.icon} size="xl" />
            </a>
          ))}
        </HStack>
      </nav>
      <nav>
        <HStack gap={{ base: 4, md: 6}}>
          <a
            onClick={handleClick("projects")}
            href="#projects-section"
            className="hoverAnimation"
          >
            Projects
          </a>
          <a
            onClick={handleClick("skills")}
            href="#skills-section"
            className="hoverAnimation"
          >
            Skills
          </a>
        </HStack>
      </nav>
    </HStack>
  );
};

export default Header;
