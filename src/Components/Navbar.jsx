import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button, Flex, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex as='nav' justifyContent='space-between' alignItems='center' mb='6' px={{sm: '4', md: '6', lg: '14' }} py='1'  borderBottom='1px' borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}>

      <Link to='/'><Text as='h1' fontSize='2xl' cursor='pointer'>M<Text as='span' color='teal'> -&gt; </Text>Info</Text></Link>
      
      <Button onClick={toggleColorMode} borderRadius='100px' p='0px' colorScheme='teal' variant='ghost'>
      {colorMode === 'light' ? <MoonIcon/> : <SunIcon/> }
      </Button>

    </Flex>
  )
}

export default Navbar