import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./animatedtext";
import { useEffect } from "react";


export default function FinalHeading() {
  const [replay, setReplay] = useState(true);
  // Placeholder text data, as if from API
  const placeholderText = [
    { type: "heading1", text: "Hello,I'm Aakash" },
    {
      type: "heading2",
      text: "A MERN Stack Web Devloper"
    },{
      type: "heading3",
      text: "Passionate Full-Stack Developer and hands-on experience in developing scalable websites using a wide range of Front-end and Back-end skills like Mongo-DB, CSS, JavaScript,Node Js, React,Express and knowledge of Data Structures and Algorithms(DSA)"
    }

  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };
  
  // Quick and dirt for the example
  const handleReplay = () => {
    setReplay(!replay);
    setTimeout(() => {
      setReplay(true);
    }, 1100);
  };

  return (
   <motion.div whileInView={handleReplay}>
     <motion.div
      
      initial="hidden"
      // animate="visible"
      animate={replay ? "visible" : "hidden"}
      variants={container}
    >
      <div className="container">
        {placeholderText.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
      
    </motion.div>

   </motion.div>
  );
}
