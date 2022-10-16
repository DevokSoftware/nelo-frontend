import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Container,
  Button,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Chat from "./pages/chat/Chat"
// 2. Call `extendTheme` and pass your custom values


export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" >
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
        <Chat />
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
