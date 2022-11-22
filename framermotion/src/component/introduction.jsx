import { Container, chakra, shouldForwardProp ,Box, Flex, Image} from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import FinalHeading from './finalHeading';
const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  const ChakraImg = chakra(motion.img, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });
const parent={
    hidden:{
        scale:0.1,
        borderRadius:"100%",
        
    },
    visible:{
        scale:1,
        borderRadius:"0%",
        
        display:"flex",
        transition:{
            type:"tween",
            duration:1,
            when:"beforeChildren",
            staggerChildren: 1,
            
        }
    }
}
let child={
    hidden:{opacity:0,x:"-2vw"},
    visible:{opacity:1,x:0}
}

export default function Intro(){
    return (
        <>
        <Box w="100%" h="100vh" border={"2px solid brown"}>
            hello
        </Box>
       <ChakraBox 
        variants={parent} 
        initial="hidden" 
        whileInView="visible" 
        w="100%" h="100%" bgColor={"gray.100"}>
        <ChakraBox border={"2px solid red"} w="70%" h="100%" variants={child} >
            <FinalHeading />
        </ChakraBox >
        <ChakraBox  border={"2px solid blue"}  w="20%" h="100%" variants={child}>
           <motion.img src="https://avatars.githubusercontent.com/u/37771235?v=4"
            initial={{scale:0.5,borderRadius:"0%"}} 
            animate={{scale:1,borderRadius:"50%",}}
             transition={{duration:3,delay:1,when:"afterChildren"}}
             style={{border:"2px solid white"}}  />
            {/* <ChakraImg  border="2px solid"  initial={{borderColor:"black",scale:0.5}} animate={{borderColor:"white",scale:1}} transition={{duration:4}} borderRadius={"full"} src="https://avatars.githubusercontent.com/u/37771235?v=4" /> */}
        </ChakraBox >
       </ChakraBox >
       </>
    )
}




// export default function Intro() {
//   return (
//     <Container h="100vh" display="flex" alignItems="center" justifyContent="center">
//       <ChakraBox
//         animate={{
//           scale: [1, 2, 2, 1, 1],
//           rotate: [0, 0, 270, 270, 0],
//           borderRadius: ["20%", "20%", "50%", "50%", "20%"],
//         }}
//         // @ts-ignore no problem in operation, although type error appears.
//         transition={{
//           duration: 3,
//           ease: "easeInOut",
//           repeat: Infinity,
//           repeatType: "loop",
//         }}
//         padding="2"
//         bgGradient="linear(to-l, #7928CA, #FF0080)"
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         width="100px"
//         height="100px"
//       >
//         I'm Dizzy!
//       </ChakraBox>
//     </Container>
//   )
// }