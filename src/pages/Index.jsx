import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Image } from "@chakra-ui/react";
import { FaHome, FaUser, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column">
        {/* Navigation Bar */}
        <Box bg="brand.800" color="white" py={4} px={8}>
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">My Blog</Heading>
            <HStack spacing={8}>
              <Link href="#" display="flex" alignItems="center">
                <FaHome />
                <Text ml={2}>Home</Text>
              </Link>
              <Link href="#" display="flex" alignItems="center">
                <FaUser />
                <Text ml={2}>About</Text>
              </Link>
              <Link href="#" display="flex" alignItems="center">
                <FaEnvelope />
                <Text ml={2}>Contact</Text>
              </Link>
            </HStack>
          </Flex>
        </Box>

        {/* Main Content Area */}
        <Flex direction={{ base: "column", md: "row" }} mt={8} px={8}>
          {/* Blog Posts */}
          <Box flex="3" mr={{ md: 8 }}>
            <VStack spacing={8}>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Blog Post Title 1</Heading>
                <Text mt={4}>This is a summary of the blog post content. Click to read more...</Text>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Blog Post Title 2</Heading>
                <Text mt={4}>This is a summary of the blog post content. Click to read more...</Text>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Blog Post Title 3</Heading>
                <Text mt={4}>This is a summary of the blog post content. Click to read more...</Text>
              </Box>
            </VStack>
          </Box>

          {/* Sidebar */}
          <Box flex="1" mt={{ base: 8, md: 0 }}>
            <VStack spacing={8}>
              <Box p={5} shadow="md" borderWidth="1px" width="100%">
                <Heading fontSize="lg">About Me</Heading>
                <Text mt={4}>This is a short description about the blog author.</Text>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px" width="100%">
                <Heading fontSize="lg">Recent Posts</Heading>
                <VStack align="start" mt={4}>
                  <Link href="#">Recent Post 1</Link>
                  <Link href="#">Recent Post 2</Link>
                  <Link href="#">Recent Post 3</Link>
                </VStack>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;