import React from "react";
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
       
 
  return (
    <VStack  alignItems={"self-start"} spacing={2} background="white" color="black" borderRadius="xl">
      <Image src={imageSrc} boxSize="full"  borderRadius="md" objectFit="cover"/>
      <Heading  marginLeft={2} size="sm">{title}</Heading>
      <Text fontSize={"sm"}  marginLeft={2} color="#64748b" padding="0.1px" >{description}</Text>
     <HStack  padding={2}>
      <Text fontSize="13px"  >See  more </Text>
     <FontAwesomeIcon icon={faArrowRight} size="1x" />
     </HStack>
    </VStack>
  )
};

export default Card;
