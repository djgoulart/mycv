import { Box, Flex, Heading, List, ListItem } from '@chakra-ui/react';
import React from 'react';

type IHeaderProps = {
  title: string;
  links?: string[];
  contacts?: string[];
}

function Header ({ title, links, contacts}: IHeaderProps) {
  return (
   <>
    <Flex justify={"center"} alignItems={"center"} as="header">
      <Box maxW={300}>
        <List spacing={2}>
          {
            links &&links?.length > 0 && 
            links?.map((link, index) => (
              <ListItem key={index} fontSize={12}>{link}</ListItem>
            ))
          }
        </List>
      </Box>
      <Box width="full" ml={10} mr={10} flex={1}>
        <Heading width="full" fontSize={24} textAlign={"center"}>{title}</Heading>
      </Box>
      <Box maxW={300}>
        <List spacing={2} textAlign="right">
          {
            contacts &&contacts?.length > 0 && 
            contacts?.map((contact, index) => (
              <ListItem fontSize={12} key={index}>{contact}</ListItem>
            ))
          }
        </List>
      </Box>
    </Flex>
   </>
  )
}

export default Header;