import React, { useEffect, useState } from "react";
import { Avatar, Heading, Link } from "@chakra-ui/react";
import { motion, animate } from "framer-motion";

const MotionAvatar = motion(Avatar);
import FullScreenSection from "./FullScreenSection";

const Greeting = () => (
  <span>
    Hi, I am <span className="hoverBorderAnimation">@Synic</span>
  </span>
);

// Looping typewriter using Framer Motion's animate. Accepts messages where each message is an array of parts
// e.g. messages = [ [{text:'A First Year Student at '}, {text:'<IIM Indore>', link:true, href:'...'} ], ... ]
const LoopingTypewriter = ({ messages = [], start = false, charSpeed = 35, pauseAfter = 800, backspacePause = 400 }) => {
  const MotionLink = motion(Link);
  const [currentText, setCurrentText] = useState("");
  useEffect(() => {
    if (!start) return;
    let mounted = true;
    let stopController = null;

    const run = async () => {
      while (mounted) {
        for (let mi = 0; mi < messages.length && mounted; mi++) {
          const parts = messages[mi];
          // flatten parts to compute total length and offsets
          const partLengths = parts.map((p) => p.text.length);
          const totalLength = partLengths.reduce((a, b) => a + b, 0);

          // Type forward: 0 -> totalLength
          await new Promise((resolve) => {
            const duration = Math.max(0.05, (totalLength * charSpeed) / 1000);
            const controller = animate(0, totalLength, {
              duration,
              ease: "linear",
              onUpdate(v) {
                if (!mounted) {
                  controller.stop();
                  resolve();
                  return;
                }
                const len = Math.round(v);
                // build string by taking slices from parts
                let remaining = len;
                const out = parts
                  .map((p, idx) => {
                    const take = Math.max(0, Math.min(p.text.length, remaining));
                    remaining -= take;
                    return { ...p, shown: p.text.slice(0, take) };
                  })
                  .map((p) => p.shown)
                  .join("");
                setCurrentText(out);
              },
              onComplete() {
                resolve();
              },
            });
            stopController = controller;
          });

          // pause after typing
          await new Promise((r) => setTimeout(r, pauseAfter));

          // Backspace: totalLength -> 0
          await new Promise((resolve) => {
            const duration = Math.max(0.05, (totalLength * charSpeed) / 1000);
            const controller = animate(totalLength, 0, {
              duration,
              ease: "linear",
              onUpdate(v) {
                if (!mounted) {
                  controller.stop();
                  resolve();
                  return;
                }
                const len = Math.round(v);
                let remaining = len;
                const out = parts
                  .map((p) => {
                    const take = Math.max(0, Math.min(p.text.length, remaining));
                    remaining -= take;
                    return p.text.slice(0, take);
                  })
                  .join("");
                setCurrentText(out);
              },
              onComplete() {
                resolve();
              },
            });
            stopController = controller;
          });

          // brief pause before next message
          await new Promise((r) => setTimeout(r, backspacePause));
        }
      }
    };

    run();

    return () => {
      mounted = false;
      if (stopController && stopController.stop) stopController.stop();
    };
  }, [start, messages, charSpeed, pauseAfter, backspacePause]);

  // Render currentText by mapping through message parts of the currently visible message
  // We need to find which message's parts align with currentText; however currentText is simple substring that matches prefix of the current message
  // To render links in the correct positions, we'll render based on the currently active message index via a small helper.
  // For simplicity, we render the currently typing message by finding the first message that startsWith currentText or currentText is prefix of its joined parts.
  const renderMessage = () => {
    for (let mi = 0; mi < messages.length; mi++) {
      const parts = messages[mi];
      const full = parts.map((p) => p.text).join("");
      if (full.startsWith(currentText) || currentText.startsWith(full) || currentText === "") {
        // compute offsets and shown slices
        let remaining = currentText.length;
        return parts.map((p, idx) => {
          const take = Math.max(0, Math.min(p.text.length, remaining));
          remaining -= take;
          const shown = p.text.slice(0, take);
          if (p.link) {
            return (
              <motion.a
                key={mi + "-" + idx}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="hoverBorderAnimation"
                style={{ textDecoration: "none", color: "inherit" }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0 }}
              >
                {shown}
              </motion.a>
            );
          }
          if (p.hover) {
            return (
              <motion.span
                key={mi + "-" + idx}
                className={p.className ? p.className : "hoverBorderAnimation"}
                style={{ textDecoration: "none", color: "inherit" }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0 }}
              >
                {shown}
              </motion.span>
            );
          }
          return (
            <span key={mi + "-" + idx} className={p.className ? p.className : ""}>
              {shown}
            </span>
          );
        });
      }
    }
    // fallback: render first message parts but empty
    return messages[0]?.map((p, idx) => (
      <span key={"fb-" + idx}>{""}</span>
    ));
  };

  return <span>{renderMessage()}</span>;
};

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
      <MotionAvatar
        id="avatar"
        name="Synic"
        size="xl"
        src="https://raw.githubusercontent.com/Synic-dx/Synic-dx/react/public/pfp.png"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={showContent ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 300, damping: 20, delay: 0 } }}
        whileTap={{ scale: 0.95, transition: { delay: 0 } }}
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
        color="white"
      >
        <LoopingTypewriter
          start={showContent}
          charSpeed={50}
          pauseAfter={3200}
          backspacePause={1600}
          messages={[
            [
              { text: "#Student", link: true, href: "https://www.linkedin.com/in/shinjan-garain/" },
              { text: " at IIM Indore" },
            ],
            [
              { text: "I do " },
              { text: "<code>", link: true, href: "https://github.com/Synic-dx" },
            ],
            [
              { text: "I do " },
              { text: "<analytics>", hover: true },
            ],
          ]}
        />
      </Heading>
    </FullScreenSection>
  );
};

export default LandingSection;
