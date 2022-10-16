import React from "react";
import { Flex, Input, Button } from "@chakra-ui/react";

export const Footer: React.FC<any> = ({
    inputMessage, setInputMessage, handleSendMessage 
}) => {
  return (
	<Flex w="100%" mt="5">
  	<Input
    	placeholder="Type Something..."
    	border="none"
    	borderRadius="none"
    	_focus={{
      	border: "1px solid black",
    	}}
    	onKeyPress={(e) => {
      	if (e.key === "Enter") {
        	handleSendMessage();
      	}
    	}}
    	value={inputMessage}
    	onChange={(e) => setInputMessage(e.target.value)}
  	/>
  	<Button
    	bg="orange.300"
    	color="white"
        variant='outline'
    	_hover={{
      	bg: "white",
      	color: "black",
      	border: "1px solid black",
    	}}
    	disabled={inputMessage.trim().length <= 0}
    	onClick={handleSendMessage}
  	>
    	Send
  	</Button>
	</Flex>
  );
};

export default Footer;