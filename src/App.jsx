import React from 'react'
import {Button, useColorMode} from '@chakra-ui/react'

const App = () => {

  const { colorMode, toggleColorMode } = useColorMode()


  return (
   
      <Button onClick={toggleColorMode}>
        Toggle 
      </Button>
    
  )
}

export default App