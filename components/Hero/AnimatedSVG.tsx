import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function TAILORMADESVGAnimation() {
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((prevState) => !prevState);
    }, 3000); // Change the interval duration (in milliseconds) as needed
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {showText ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="animated_text_style"
        >
          Tailor
        </motion.span>
      ) : (
        <motion.svg
          id="Ebene_1"
          data-name="Ebene 1"
          xmlns="http://www.w3.org/2000/svg"
          width="1000"
          height="1000"
          version="1.1"
          viewBox="0 0 1000 1000"
        >
          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              // repeat: Infinity,
              // repeatType: "loop",
              // repeatDelay: 1,
            }}
            x1="458.1"
            y1="640.5"
            x2="458.1"
            y2="579.9"
            fill="none"
            stroke="#212121"
            strokeLinecap="square"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              // repeat: Infinity,
              // repeatType: "loop",
              // repeatDelay: 1,
            }}
            x1="367.3"
            y1="640.5"
            x2="367.3"
            y2="579.9"
            fill="none"
            stroke="#212121"
            strokeLinecap="square"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              // repeat: Infinity,
              // repeatType: "loop",
              // repeatDelay: 1,
            }}
            x1="276.5"
            y1="640.5"
            x2="276.5"
            y2="579.9"
            fill="none"
            stroke="#212121"
            strokeLinecap="square"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              // repeat: Infinity,
              // repeatType: "loop",
              // repeatDelay: 1,
            }}
            x1="730.1"
            y1="640.5"
            x2="730.1"
            y2="579.9"
            fill="none"
            stroke="#212121"
            strokeLinecap="square"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              // repeat: Infinity,
              // repeatType: "loop",
              // repeatDelay: 1,
            }}
            x1="818.4"
            y1="640.5"
            x2="818.4"
            y2="579.9"
            fill="none"
            stroke="#212121"
            strokeLinecap="square"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              // repeat: Infinity,
              // repeatType: "loop",
              // repeatDelay: 1,
            }}
            x1="639.3"
            y1="640.5"
            x2="639.3"
            y2="579.9"
            fill="none"
            stroke="#212121"
            strokeLinecap="square"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              // repeat: Infinity,
              // repeatType: "loop",
              // repeatDelay: 1,
            }}
            x1="548.5"
            y1="640.5"
            x2="548.5"
            y2="579.9"
            fill="none"
            stroke="#212121"
            strokeLinecap="square"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              // repeat: Infinity,
              // repeatType: "loop",
              // repeatDelay: 1,
            }}
            d="M306.8,398.3v60.5h-100.9c47.9,0,100.9-22.1,100.9-60.5Z"
            fill="#212121"
            strokeWidth="0"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              // repeat: Infinity,
              // repeatType: "loop",
              // repeatDelay: 1,
            }}
            d="M205.9,640.5c-55.7,0-100.9-27.1-100.9-60.5v-181.6c0,33.4,45.2,60.5,100.9,60.5h696.1v181.6H205.9Z"
            fill="none"
            stroke="#212121"
            strokeLinecap="square"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.ellipse
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              // repeat: Infinity,
              // repeatType: "loop",
              // repeatDelay: 1,
            }}
            cx="205.9"
            cy="398.3"
            rx="100.9"
            ry="60.5"
            fill="none"
            stroke="#212121"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            x1="306.8"
            y1="458.9"
            x2="306.8"
            y2="398.3"
            fill="none"
            stroke="#212121"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
        </motion.svg>
      )}
    </>
  );
}

function BERLINSVGAnimation() {
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((prevState) => !prevState);
    }, 3000); // Change the interval duration (in milliseconds) as needed
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {showText ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="animated_text_style "
        >
          Berlin
        </motion.span>
      ) : (
        <motion.svg
          id="Ebene_1"
          data-name="Ebene 1"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          version="1.1"
          viewBox="0 0 1000 1000"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            d="M870.3,417.3v48.5h-38.1v-48.5c0-8.9,8.5-16.5,19.3-16.5s18.8,7.5,18.8,16.5h0Z"
            fill="#F6F2E9"
            fillRule="evenodd"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.polygon
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            points="498.1 281.4 107.5 281.4 126.9 363.4 498.1 363.4 869.3 363.4 888.8 281.4 498.1 281.4"
            fill="#F6F2E9"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.polygon
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            points="498.1 363.4 91.2 363.4 107.1 404.3 498.1 404.3 889.1 404.3 905 363.4 498.1 363.4"
            fill="#F6F2E9"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.polygon
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            points="498.1 404.3 126.9 404.3 126.9 450.4 498.1 450.4 869.3 450.4 869.3 404.3 498.1 404.3"
            fill="#F6F2E9"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.polygon
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            points="498.1 444.1 102.8 444.1 102.8 473.5 498.1 473.5 893.5 473.5 893.5 444.1 498.1 444.1"
            fill="#F6F2E9"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.rect
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            x="120.8"
            y="473.5"
            width="63.5"
            height="338"
            fill="#F6F2E9"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.rect
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            x="249.9"
            y="473.5"
            width="63.5"
            height="338"
            fill="#F6F2E9"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.rect
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            x="379"
            y="473.5"
            width="63.5"
            height="338"
            fill="#F6F2E9"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.rect
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            x="811.8"
            y="473.5"
            width="63.5"
            height="338"
            fill="#F6F2E9"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.rect
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            x="682.7"
            y="473.5"
            width="63.5"
            height="338"
            fill="#F6F2E9"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.rect
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            x="553.6"
            y="473.5"
            width="63.5"
            height="338"
            fill="#F6F2E9"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.polygon
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            points="705.6 281.4 290.7 281.4 310.2 254.6 686.1 254.6 705.6 281.4"
            fill="#F6F2E9"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.rect
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            x="474"
            y="185.8"
            width="66.3"
            height="67.4"
            fill="#F6F2E9"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.polygon
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            points="432.8 216.3 474 216.3 474 253.2 413.3 253.2 432.8 216.3"
            fill="#F6F2E9"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.polygon
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            points="540.3 216.3 581.5 216.3 601 253.2 540.3 253.2 540.3 216.3"
            fill="#F6F2E9"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.rect
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            x="103.6"
            y="811.7"
            width="95.1"
            height="42.4"
            fill="#F6F2E9"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.rect
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            x="232.8"
            y="811.7"
            width="95.1"
            height="42.4"
            fill="#F6F2E9"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.rect
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            x="361.6"
            y="811.7"
            width="95.1"
            height="42.4"
            fill="#F6F2E9"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.rect
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            x="537.6"
            y="811.7"
            width="95.1"
            height="42.4"
            fill="#F6F2E9"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.rect
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            x="666.8"
            y="811.7"
            width="95.1"
            height="42.4"
            fill="#F6F2E9"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.rect
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            x="795.6"
            y="811.7"
            width="95.1"
            height="42.4"
            fill="#F6F2E9"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            x1="508.1"
            y1="185.9"
            x2="508.1"
            y2="98.7"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.polyline
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            points="575.6 104.8 554.5 104.8 533.7 135 483.9 134.6 458.8 104.6 437.1 104.6"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
        </motion.svg>
      )}
    </>
  );
}

function VIENNASVGAnimation() {
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((prevState) => !prevState);
    }, 3000); // Change the interval duration (in milliseconds) as needed
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {showText ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="animated_text_style"
        >
          Vienna
        </motion.span>
      ) : (
        <motion.svg
          id="Ebene_1"
          data-name="Ebene 1"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          version="1.1"
          viewBox="0 0 1000 1000"
        >
          <motion.polygon
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            points="462.1 438.1 148 943.4 294 943.4 493.4 438.1 462.1 438.1"
            fill="#F6F2E9"
            fillRule="evenodd"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.polygon
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            points="518.2 438.1 832.2 943.4 686.2 943.4 486.9 438.1 518.2 438.1"
            fill="#F6F2E9"
            fillRule="evenodd"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.circle
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            cx="492"
            cy="442.3"
            r="356.3"
            fill="#F6F2E9"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.circle
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            cx="492"
            cy="442.3"
            r="325"
            fill="#F6F2E9"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.g>
            <motion.g>
              <motion.line
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
                x1="492"
                y1="117.2"
                x2="492"
                y2="767.3"
                fill="#F6F2E9"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="20"
              />
              <motion.line
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
                x1="166.9"
                y1="442.3"
                x2="817"
                y2="442.3"
                fill="#F6F2E9"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="20"
              />
            </motion.g>
            <motion.g>
              <motion.line
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
                x1="262.1"
                y1="212.4"
                x2="721.8"
                y2="672.1"
                fill="#F6F2E9"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="20"
              />
              <motion.line
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
                x1="262.1"
                y1="672.1"
                x2="721.8"
                y2="212.4"
                fill="#F6F2E9"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="20"
              />
            </motion.g>
          </motion.g>
          <motion.g>
            <motion.g>
              <motion.line
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
                x1="359.1"
                y1="145.6"
                x2="624.9"
                y2="738.9"
                fill="#F6F2E9"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="20"
              />
              <motion.line
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
                x1="195.3"
                y1="575.2"
                x2="788.6"
                y2="309.4"
                fill="#F6F2E9"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="20"
              />
            </motion.g>
            <motion.g>
              <motion.line
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
                x1="188.2"
                y1="326.5"
                x2="795.7"
                y2="558.1"
                fill="#F6F2E9"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="20"
              />
              <motion.line
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
                x1="376.2"
                y1="746"
                x2="607.8"
                y2="138.6"
                fill="#F6F2E9"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="20"
              />
            </motion.g>
          </motion.g>
          <motion.circle
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            cx="493.6"
            cy="444.6"
            r="43.2"
            fill="#F6F2E9"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
          <motion.g>
            <motion.rect
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              x="429"
              y="63"
              width="127.2"
              height="68.2"
              rx="4.7"
              ry="4.7"
              fill="#F6F2E9"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="20"
            />
            <motion.rect
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              x="461.2"
              y="131.2"
              width="62.9"
              height="54.8"
              rx="2.4"
              ry="2.4"
              fill="#F6F2E9"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="20"
            />
          </motion.g>
          <motion.g>
            <motion.rect
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              x="672.8"
              y="168.5"
              width="127.2"
              height="68.2"
              rx="4.7"
              ry="4.7"
              fill="#F6F2E9"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="20"
            />
            <motion.rect
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              x="704.9"
              y="236.7"
              width="62.9"
              height="54.8"
              rx="2.4"
              ry="2.4"
              fill="#F6F2E9"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="20"
            />
          </motion.g>
          <motion.g>
            <motion.rect
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              x="764.8"
              y="398.1"
              width="127.2"
              height="68.2"
              rx="4.7"
              ry="4.7"
              fill="#F6F2E9"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="20"
            />
            <motion.rect
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              x="797"
              y="466.3"
              width="62.9"
              height="54.8"
              rx="2.4"
              ry="2.4"
              fill="#F6F2E9"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="20"
            />
          </motion.g>
          <motion.g>
            <motion.rect
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              x="671.8"
              y="618"
              width="127.2"
              height="68.2"
              rx="4.7"
              ry="4.7"
              fill="#F6F2E9"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="20"
            />
            <motion.rect
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              x="704"
              y="686.2"
              width="62.9"
              height="54.8"
              rx="2.4"
              ry="2.4"
              fill="#F6F2E9"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="20"
            />
          </motion.g>
          <motion.g>
            <motion.rect
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              x="435.4"
              y="732.3"
              width="127.2"
              height="68.2"
              rx="4.7"
              ry="4.7"
              fill="#F6F2E9"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="20"
            />
            <motion.rect
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              x="467.6"
              y="800.5"
              width="62.9"
              height="54.8"
              rx="2.4"
              ry="2.4"
              fill="#F6F2E9"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="20"
            />
          </motion.g>
          <motion.g>
            <motion.rect
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              x="188.4"
              y="640.3"
              width="127.2"
              height="68.2"
              rx="4.7"
              ry="4.7"
              fill="#F6F2E9"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="20"
            />
            <motion.rect
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              x="220.5"
              y="708.5"
              width="62.9"
              height="54.8"
              rx="2.4"
              ry="2.4"
              fill="#F6F2E9"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="20"
            />
          </motion.g>
          <motion.g>
            <motion.rect
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              x="95.4"
              y="397.1"
              width="127.2"
              height="68.2"
              rx="4.7"
              ry="4.7"
              fill="#F6F2E9"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="20"
            />
            <motion.rect
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              x="127.5"
              y="465.3"
              width="62.9"
              height="54.8"
              rx="2.4"
              ry="2.4"
              fill="#F6F2E9"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="20"
            />
          </motion.g>
          <motion.g>
            <motion.rect
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              x="171.9"
              y="161.7"
              width="127.2"
              height="68.2"
              rx="4.7"
              ry="4.7"
              fill="#F6F2E9"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="20"
            />
            <motion.rect
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              x="204.1"
              y="229.9"
              width="62.9"
              height="54.8"
              rx="2.4"
              ry="2.4"
              fill="#F6F2E9"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="20"
            />
          </motion.g>
          <motion.circle
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            cx="494"
            cy="444.3"
            r="167.1"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
        </motion.svg>
      )}
    </>
  );
}
function GreeenTop() {
  return (
    <svg
      width="377"
      height="163"
      viewBox="0 0 377 163"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35.7185 -28.9504C31.9515 -29.6074 27.9255 -30.2804 24.4275 -28.7374C18.9435 -26.3194 17.0275 -19.6374 15.8145 -13.7724C5.36283 36.9899 0.317678 88.7165 0.763479 140.542C40.0426 110.166 75.6952 75.3702 107.017 36.8416C121.239 72.6803 137.212 107.757 154.935 142.072C157.143 146.346 160.206 151.172 165.009 151.433C169.722 151.692 173.274 147.398 175.988 143.533L242.256 49.2326C273.974 100.072 320.805 139.713 376.184 162.6C376.424 106.4 375.137 50.2179 372.324 -5.94539C260.924 -22.9144 146.476 -9.63239 35.7185 -28.9504Z"
        fill="#ADDBD0"
      />
    </svg>
  );
}
function YellowCiricle() {
  return (
    <svg
      width="308"
      height="239"
      viewBox="0 0 328 259"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8566 178.123C13.8975 190.947 17.9158 203.915 26.0589 214.278C36.6538 227.761 52.9914 235.316 69.1002 241.188C110.769 256.368 156.173 263.511 199.793 255.524C243.413 247.538 284.997 223.257 308.527 185.671C332.057 148.084 334.969 96.9448 310.997 59.6383C293.515 32.4338 264.565 14.9994 235.946 -0.0563718C195.432 -21.3684 147.439 -40.1333 105.094 -22.7371C88.3201 -15.8458 74.2413 -3.84659 60.475 7.95911C-2.03157 61.5623 -9.14601 93.771 10.8566 178.123Z"
        fill="#FFD95D"
      />
    </svg>
  );
}
function NEWSVGTest() {
  return (
    <svg
      width="377"
      height="163"
      viewBox="0 0 377 163"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35.7185 -28.9504C31.9515 -29.6074 27.9255 -30.2804 24.4275 -28.7374C18.9435 -26.3194 17.0275 -19.6374 15.8145 -13.7724C5.36283 36.9899 0.317678 88.7165 0.763479 140.542C40.0426 110.166 75.6952 75.3702 107.017 36.8416C121.239 72.6803 137.212 107.757 154.935 142.072C157.143 146.346 160.206 151.172 165.009 151.433C169.722 151.692 173.274 147.398 175.988 143.533L242.256 49.2326C273.974 100.072 320.805 139.713 376.184 162.6C376.424 106.4 375.137 50.2179 372.324 -5.94539C260.924 -22.9144 146.476 -9.63239 35.7185 -28.9504Z"
        fill="#ADDBD0"
      />
    </svg>
  );
}
function BRANDSVGAnimation() {
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((prevState) => !prevState);
    }, 3000); // Change the interval duration (in milliseconds) as needed
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {showText ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="animated_text_style"
        >
          brand
        </motion.span>
      ) : (
        <motion.svg
          id="Ebene_1"
          data-name="Ebene 1"
          xmlns="http://www.w3.org/2000/svg"
          width="1000"
          height="1000"
          version="1.1"
          viewBox="0 0 1000 1000"
        >
          <motion.g>
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              d="M120.6,509.3l81,184.6c9.5,21.6,34.7,31.4,56.3,22,0,0,0,0,0,0l302-132.5,73.8-189.1-189.1-73.8-302,132.5c-21.6,9.5-31.4,34.7-22,56.3,0,0,0,0,0,0Z"
              fill="none"
              stroke="#212121"
              strokeLinecap="square"
              strokeMiterlimit="10"
              strokeWidth="20"
            />
            <motion.circle
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              cx="481.4"
              cy="461.1"
              r="42.7"
              fill="none"
              stroke="#212121"
              strokeLinecap="square"
              strokeMiterlimit="10"
              strokeWidth="20"
            />
          </motion.g>
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            d="M598,520c27.8,3,66.5,3.3,98-1.7,113.1-18.1,196.4-84.9,186.1-149.3-10.3-64.4-110.3-102-223.4-83.9-113.1,18.1-196.4,84.9-186.1,149.3,2.7,17,11.8,32,25.6,44.7"
            fill="none"
            stroke="#212121"
            strokeLinecap="square"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
        </motion.svg>
      )}
    </>
  );
}
function UXSVGAnimation() {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 122.88 95.51"
      xmlSpace="preserve"
    >
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html: ".st0{fillRule:evenodd;clip-rule:evenodd;}",
        }}
      />
      <g>
        <path
          className="st0"
          d="M8.32,0h106.24c4.58,0,8.32,3.74,8.32,8.32v78.87c0,4.57-3.74,8.32-8.32,8.32H8.32C3.74,95.51,0,91.77,0,87.19 V8.32C0,3.74,3.74,0,8.32,0L8.32,0z M12.6,26.95h96.77v41.08H12.6V26.95L12.6,26.95z M32.21,38.67h5.98v12.44 c0,1.23-0.18,2.4-0.54,3.49c-0.36,1.1-0.92,2.06-1.68,2.88c-0.76,0.82-1.56,1.4-2.4,1.73c-1.16,0.46-2.56,0.7-4.19,0.7 c-0.94,0-1.97-0.07-3.09-0.21c-1.11-0.14-2.05-0.42-2.8-0.85c-0.75-0.42-1.43-1.02-2.05-1.8c-0.62-0.78-1.05-1.58-1.28-2.41 c-0.37-1.33-0.56-2.5-0.56-3.53V38.67h5.98v12.74c0,1.14,0.29,2.03,0.88,2.66c0.59,0.64,1.4,0.96,2.44,0.96 c1.02,0,1.83-0.32,2.42-0.95c0.58-0.63,0.88-1.52,0.88-2.68V38.67L32.21,38.67z M42.39,38.67h6.01v20.89h-6.01V38.67L42.39,38.67z M55.59,38.32h2.72l-4.89,21.59h-2.72L55.59,38.32L55.59,38.32z M72.82,38.67h5.98v12.44c0,1.23-0.18,2.4-0.54,3.49 c-0.36,1.1-0.92,2.06-1.68,2.88c-0.76,0.82-1.56,1.4-2.4,1.73c-1.16,0.46-2.56,0.7-4.19,0.7c-0.94,0-1.97-0.07-3.09-0.21 c-1.11-0.14-2.05-0.42-2.8-0.85c-0.75-0.42-1.43-1.02-2.05-1.8c-0.62-0.78-1.05-1.58-1.28-2.41c-0.37-1.33-0.55-2.5-0.55-3.53 V38.67h5.98v12.74c0,1.14,0.29,2.03,0.88,2.66c0.59,0.64,1.4,0.96,2.44,0.96c1.02,0,1.83-0.32,2.42-0.95 c0.58-0.63,0.88-1.52,0.88-2.68V38.67L72.82,38.67z M81.43,38.67h6.61l3.43,6.43l3.33-6.43h6.52L95.3,48.79l6.59,10.77h-6.74 l-3.8-6.71l-3.83,6.71h-6.69l6.68-10.89L81.43,38.67L81.43,38.67z M66.87,83.68c-1.78,0-3.22-1.57-3.22-3.5 c0-1.94,1.44-3.5,3.22-3.5h39.65c1.78,0,3.22,1.57,3.22,3.5c0,1.94-1.44,3.5-3.22,3.5H66.87L66.87,83.68z M14.96,83.68 c-1.76,0-3.19-1.57-3.19-3.5c0-1.94,1.43-3.5,3.19-3.5h36.76c1.76,0,3.19,1.57,3.19,3.5c0,1.94-1.43,3.5-3.19,3.5H14.96 L14.96,83.68z M117.97,20.1H5.29V88c0,0.64,0.25,1.2,0.67,1.63c0.43,0.42,0.99,0.67,1.63,0.67h108.04c0.64,0,1.2-0.25,1.63-0.67 c0.43-0.43,0.67-0.99,0.67-1.63V20.1H117.97L117.97,20.1z M106.64,6.16c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11 c-2.27,0-4.11-1.84-4.11-4.11C102.54,8,104.38,6.16,106.64,6.16L106.64,6.16z M78.8,6.16c2.27,0,4.11,1.84,4.11,4.11 c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11C74.69,8,76.53,6.16,78.8,6.16L78.8,6.16z M92.72,6.16 c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11C88.61,8,90.45,6.16,92.72,6.16L92.72,6.16z"
        />
      </g>
    </svg>
  );
}
export {
  UXSVGAnimation,
  BERLINSVGAnimation,
  TAILORMADESVGAnimation,
  BRANDSVGAnimation,
  GreeenTop,
  VIENNASVGAnimation,
  NEWSVGTest,
  YellowCiricle,
};
