import React, { useEffect, useRef } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
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
    <div style={{zIndex:"1"}}>

    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform="translateY(0)"  // Corrected line
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
          {
            socials.map((social)=>(
              <a href={social.url} >
                <FontAwesomeIcon icon={social.icon} size="2x" style={{marginLeft:"20px"}}/>
              </a>
            ))
          }
          </nav>
          <nav>
            <HStack spacing={8}>
            <a href="/#projects-section" onClick={()=>handleClick("projects")}>Projects</a>
              <a href="/#contactme-section" onClick={()=>handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
    </div>

  );
};
export default Header;
