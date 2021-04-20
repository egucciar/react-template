import { ChakraProvider, Heading } from '@chakra-ui/react';
import React from 'react';


const App: React.FC = () => {
  return (
    <ChakraProvider resetCSS>
      <Heading marginBottom="2rem">Hello World</Heading>
    </ChakraProvider>
  );
};

export default App;
