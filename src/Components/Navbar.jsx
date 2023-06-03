import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button, Flex, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex as='navbar' justifyContent='space-between' alignItems='center' mb='6'>

      <Text as='h1'>Musicon</Text>


      <Button onClick={toggleColorMode} borderRadius='100px' p='0px' colorScheme='teal' variant='ghost'>
      {colorMode === 'light' ? <MoonIcon/> : <SunIcon/> }
      </Button>

    </Flex>


  )
}

export default Navbar