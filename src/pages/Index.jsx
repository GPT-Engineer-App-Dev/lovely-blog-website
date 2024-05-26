import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Image, Button, useColorModeValue } from "@chakra-ui/react";
import { FaHome, FaUser, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const bg = useColorModeValue("white", "gray.700");
  const color = useColorModeValue("black", "white");

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Container maxW="container.xl" p={0} bg={bg} color={color}>
      <Flex direction="column">
        {/* Navigation Bar */}
        <Box bg={useColorModeValue("brand.800", "gray.900")} color="white" py={4} px={8}>
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">My Blog</Heading>
            <HStack spacing={8}>
              <Link as={RouterLink} to="/" display="flex" alignItems="center">
                <FaHome />
                <Text ml={2}>Home</Text>
              </Link>
              <Link as={RouterLink} to="#" display="flex" alignItems="center">
                <FaUser />
                <Text ml={2}>About</Text>
              </Link>
              <Link as={RouterLink} to="#" display="flex" alignItems="center">
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
              {posts.map((post, index) => (
                <Box key={index} p={5} shadow="md" borderWidth="1px" bg={bg} color={color}>
                  <Heading fontSize="xl">{post.title}</Heading>
                  {post.image && <Image src={post.image} alt={post.title} mt={4} />}
                  <Text mt={4}>{post.content}</Text>
                </Box>
              ))}
            </VStack>
          </Box>

          {/* Sidebar */}
          <Box flex="1" mt={{ base: 8, md: 0 }}>
            <VStack spacing={8}>
              <Box p={5} shadow="md" borderWidth="1px" width="100%" bg={bg} color={color}>
                <Heading fontSize="lg">About Me</Heading>
                <Text mt={4}>This is a short description about the blog author.</Text>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px" width="100%" bg={bg} color={color}>
                <Heading fontSize="lg">Recent Posts</Heading>
                <VStack align="start" mt={4}>
                  {posts.slice(0, 3).map((post, index) => (
                    <Link key={index} href="#">{post.title}</Link>
                  ))}
                </VStack>
              </Box>
              <Button as={RouterLink} to="/add-post" colorScheme="blue" width="full">Add New Post</Button>
            </VStack>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;