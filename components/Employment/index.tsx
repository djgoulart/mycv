import { Box, Flex, Heading, List, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { type } from 'os';
import React from 'react';

type ICompany = {
  name: string;
  description: string;
}

export type IEmployment = {
  position: string;
  company: ICompany;
  startedAt: string;
  endedAt?: string;
  highlights: string[];
}

type IProps = {
  employment: IEmployment;
}

function Employment({employment}: IProps) {
  return (
    <Box px={3} mt={4}>
      <Flex justifyContent={"space-between"}>
        <Heading fontSize={16}>{employment.position}</Heading>
        <Heading fontSize={16}>{employment.company.name}</Heading>
        <Heading fontSize={16}>{`${employment.startedAt} - ${employment.endedAt || 'current'}`}</Heading>
      </Flex>
      <Text mt={1} fontSize={14}>{employment.company.description}</Text>

      <UnorderedList px={2} mt={3}>
        {
          employment.highlights.map((highlight, index) => 
          <ListItem key={index} fontSize={14}>{highlight}</ListItem>)
        }
      </UnorderedList>
    </Box>
  );
}

export default Employment;