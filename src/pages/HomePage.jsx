import { useEffect, useState } from "react";
import { Box, Container, Heading, VStack, Flex } from "@chakra-ui/react";
import Tweet from "../components/Tweet";
import TweetForm from "../components/TweetForm";

const HomePage = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTweet = { content: "This is an automatically generated tweet." };
      setTweets((prevTweets) => [newTweet, ...prevTweets]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleTweetCreate = (content) => {
    const newTweet = { content };
    setTweets((prevTweets) => [newTweet, ...prevTweets]);
  };

  return (
    <Container maxW="container.md" py={8}>
      <Flex direction="column" align="center" width="100%">
        <Heading as="h1" mb={8}>
          Home
        </Heading>
        <TweetForm onTweetCreate={handleTweetCreate} />
        <VStack spacing={4} width="100%">
          {tweets.map((tweet, index) => (
            <Tweet key={index} content={tweet.content} />
          ))}
        </VStack>
      </Flex>
    </Container>
  );
};

export default HomePage;