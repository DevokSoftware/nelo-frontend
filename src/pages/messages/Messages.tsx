import React, { useEffect, useRef } from "react";
import { Avatar, Flex, Text } from "@chakra-ui/react";

export const Messages: React.FC<any> = ({
   messages
}) => {
  const AlwaysScrollToBottom = () => {
/* 	const elementRef = useRef();
	useEffect(() => elementRef.current.scrollIntoView());
	return <div ref={elementRef} />; */
  };

  return (
	<Flex w="100%" h="80%" overflowY="scroll" flexDirection="column" p="3"   sx={
		{ 
	   '::-webkit-scrollbar':{
			  display:'none'
		  }
	   }
	 }>
  	{messages.map((item: any, index: number) => {
    	if (item.from === "me") {
      	return (
        	<Flex key={index} w="100%" justify="flex-end" >
          	<Flex
            	bg="green.400"
            	color="white"
            	minW="100px"
            	maxW="350px"
            	my="2"
				boxShadow='md' 
				p='3' 
				rounded='md'
			>
            	<Text>{item.text}</Text>
          	</Flex>
        	</Flex>
      	);
    	} else {
      	return (
        	<Flex key={index} w="100%">
          	<Avatar
            	name="Computer"
            	src="https://icons.iconarchive.com/icons/martin-berube/character/128/Robot-icon.png"
            	bg="blue.100"
				padding='1'
				mx='1'
				my="2"
          	></Avatar>
          	<Flex
            	bg="gray.100"
            	color="black"
            	minW="100px"
            	maxW="350px"
            	my="2"
				boxShadow='md' 
				p='3' 
				rounded='md'
          	>
            	<Text>{item.text}</Text>
          	</Flex>
        	</Flex>
      	);
    	}
  	})}
  	{/* <AlwaysScrollToBottom /> */}
	</Flex>
  );
};

export default Messages;