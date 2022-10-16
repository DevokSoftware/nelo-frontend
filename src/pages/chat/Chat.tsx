import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Messages from "../messages/Messages";
 
const Chat = () => {
  const [messages, setMessages] = useState([
	{ from: "computer", text: "Hi, tell me what do you want!" },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
	if (!inputMessage.trim().length) {
  	return;
	}
	const data = inputMessage;

	setMessages((old) => [...old, { from: "me", text: data }]);
	setInputMessage("");

/* 	setTimeout(() => {
  	setMessages((old) => [...old, { from: "computer", text: data }]);
	}, 1000); */
  };

  return (
	<Flex w="80%" h="70vh" justify="center" align="center">
  	<Flex w="40%" h="90%" flexDir="column">
    	<Messages messages={messages}  />
    	<Footer
      	inputMessage={inputMessage}
      	setInputMessage={setInputMessage}
      	handleSendMessage={handleSendMessage}
    	/>
  	</Flex>
	</Flex>
  );
};

export default Chat;