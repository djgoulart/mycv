import { Box, Divider, Flex, Heading, List, ListItem, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Employment, { IEmployment } from '../components/Employment';
import Header from '../components/Header'

export default function Home() {
  const title = 'Diego José Goulart';
  const links = [
    'www.linkedin.com/in/diego-goulart',
    'www.github.com/djgoulart',
  ];
  const contacts = [
    '+55 62 99294-2834',
    'diegogoulart.aws@gmail.com',
  ];
  const employments: IEmployment[] = [
    {
      position: 'Software Development Engineer',
      company: {
        name: 'Edify Education',
        description: `Edify Education is a Brazilian edtech with an independent 
        and internationally awarded educational methodology in Brazil.`
      },
      startedAt: 'Feb 2022',
      highlights: [
        `Improved the mentorship team capacity by creating faster and more reliable 
        reports in environments with poor or zero internet connection by developing
        an offline first mobile app using React Native, MongoDB and RealmDb.`,
        `Reduced the time of mentorship reports compilation, by providing real-time updates
        by implementing Atlas Device Sync in the mentorship mobile app.`,
        `Improved the customer success managers capacity to help their team in the 
        field by managing reports by developing an web application with ReactJs,
        MongoDB, and Atlas Device Sync.`,
        `Improved the company NPS by reducing the amount of bugs in the main product
        by refactoring legacy code, writing reliable, clean and maintainable code,
        and implementing automated tests.`,
        `Improved the onboarding experience for new developers, providing 
        documentation of developed products and development processes, through 
        the adoption of a document-as-you-go culture.`,
        `Still doing amazing things there ...`
      ]
    },
    {
      position: 'Full Stack Developer',
      company: {
        name: 'Abemus Vivere',
        description: `Abemus Vivere provides courses for people who want to learn how to manage and work in 
        the Forex Market or professionals who want to increase their performance.`
      },
      startedAt: 'Oct 2018',
      endedAt: 'Sep 2021',
      highlights: [
        `Improved the company onboarding capacity, drastically increasing the 
        maximum student onboarding amount capacity, automating the onboarding 
        process, and developing pipelines with queued tasks.`,
        `Increased the company sales, by automating the sales process, by developing
        sales pages integrated with payment gateways.`,
        `Increased the company capacity of capturing leads by utilizing CMS platforms
        by developing landing pages fully integrated forms.`,
        `Developed new products for the company by hiring thirty party teams and
        managing the product creation journey.`,
      ]
    },
    {
      position: 'System Analyst',
      company: {
        name: 'Panpharma',
        description: `Panpharma is one of the largest medicament distributors in Brazil`
      },
      startedAt: 'Jan 2014',
      endedAt: 'Oct 2017',
      highlights: [
        `Improved the sales team proficiency using the products delivered by the tech 
        team by promoting training sessions.`,
        `Increased the sales team average ticket by developing a product for showing
        the customer consumption profile analysis, helping the sales team to make
        better offers.`,
        `Improved the sales team communication and organization by
        developing an intranet application real time communication capacity and
        ensuring reliability of strategic information.`,
        `Increased the sales team performance by developing a CRM application
        improving the team to get access to BI data through dashboards and 
        strategic business views.`
      ]
    },
    {
      position: 'Software Developer',
      company: {
        name: 'Infomedic',
        description: `IT Outsourcing`
      },
      startedAt: 'Sep 2011',
      endedAt: 'Mar 2012',
      highlights: [
        `Worked helping the team to fix bugs, create new features, and redesign 
        interfaces of a big-size web application. The most common tools and 
        technologies used were PHP, Zend Framework, MySQL, HTML, CSS, and SVN. 
        Also worked developing web interfaces for new products.`
      ]
    },
    
  ];

  return (
    <Box w={"full"} h="full" as="main" paddingX={10}>
      <Head>
        <title>Diego Goulart | Resume</title>
        <meta name="description" content="Diego Goulart | Resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title={title} links={links} contacts={contacts} />

      <Divider mt={5} mb={5} />

      <Heading px={3} fontSize={18} borderBottom={1} mb={3} borderStyle="solid">Employment</Heading>
      {
        employments.map((employment, index) => <Employment key={index} employment={employment} />)
      }
      {/* <Heading mt={5} px={3} fontSize={18} borderBottom={1} mb={3} borderStyle="solid">Education</Heading>
      <Flex justifyContent={"space-between"}>
        <Heading fontSize={16}>Online</Heading>
        <Heading fontSize={16}>Frontend Masters</Heading>
        <Heading fontSize={16}>Sep 2022 - Nov 2022</Heading>
      </Flex>
      <Text mt={1} fontSize={14}>
        <b>Courses:</b> Complete intro to React, Intermediate React, State Management in Pure React
      </Text>
      <Text mt={1} fontSize={14}>
        <b>Teacher:</b> Brian Holt (Stripe), Steeve Kinney (Temporal)
      </Text>
      
      <Flex mt={5} justifyContent={"space-between"}>
        <Heading fontSize={16}>Online</Heading>
        <Heading fontSize={16}>Rocket Seat</Heading>
        <Heading fontSize={16}>Sep 2022 - Nov 2022</Heading>
      </Flex>
      <Text mt={1} fontSize={14}>
        <b>Courses:</b> Complete intro to React, Intermediate React, State Management in Pure React
      </Text>
      <Text mt={1} fontSize={14}>
        <b>Teacher:</b> Brian Holt (Stripe), Steeve Kinney (Temporal)
      </Text>

      <Flex mt={5} justifyContent={"space-between"}>
        <Heading fontSize={16}>Online</Heading>
        <Heading fontSize={16}>Code Education</Heading>
        <Heading fontSize={16}>Sep 2022 - Nov 2022</Heading>
      </Flex>
      <Text mt={1} fontSize={14}>
        <b>Courses:</b> Full Cycle Developer - Docker 
      </Text>
      <Text mt={1} fontSize={14}>
        <b>Teacher:</b> Wesley Williams
      </Text> */}

      <Heading mt={5} px={3} fontSize={18} borderBottom={1} borderStyle="solid">Skills</Heading>

      <Flex justifyContent={"space-between"}>
        <Flex flexDir={"column"} mt={3}>
          <Text mt={1} fontSize={14}>
            <b>PHP</b> - Experienced 
          </Text>
          <Text mt={1} fontSize={14}>
            <b>Laravel</b> - Experienced 
          </Text>
          <Text mt={1} fontSize={14}>
            <b>NodeJS</b> - Experienced 
          </Text>
          <Text mt={1} fontSize={14}>
            <b>NestJS</b> - Experienced 
          </Text>
        </Flex>
        <Flex flexDir={"column"} mt={5}>
          <Text mt={1} fontSize={14}>
            <b>ReactJS</b> - Experienced 
          </Text>
          <Text mt={1} fontSize={14}>
            <b>NextJS</b> - Experienced 
          </Text>
          <Text mt={1} fontSize={14}>
            <b>React Native</b> - Experienced 
          </Text>
          <Text mt={1} fontSize={14}>
            <b>Angular</b> - Skilled 
          </Text>
        </Flex>
        <Flex flexDir={"column"} mt={5}>
          <Text mt={1} fontSize={14}>
            <b>MongoDB</b> - Skilled 
          </Text>
          <Text mt={1} fontSize={14}>
            <b>MYSQL</b> - Experienced 
          </Text>
          <Text mt={1} fontSize={14}>
            <b>HTML</b> - Experienced 
          </Text>
          <Text mt={1} mb={3} fontSize={14}>
            <b>CSS</b> - Experienced 
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}
