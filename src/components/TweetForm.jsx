import { useState } from "react";
import { Box, Button, Input, VStack, Avatar, Flex } from "@chakra-ui/react";

const TweetForm = ({ onTweetCreate }) => {
  const [tweetContent, setTweetContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tweetContent.trim()) {
      onTweetCreate(tweetContent);
      setTweetContent("");
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} mb={4} width="100%">
      <VStack spacing={4} align="flex-start">
        <Flex align="center" width="100%">
          <Avatar size="md" name="User" src="https://bit.ly/broken-link" />
          <Input
            placeholder="What's happening?"
            value={tweetContent}
            onChange={(e) => setTweetContent(e.target.value)}
            ml={4}
            flex="1"
          />
        </Flex>
        <Button type="submit" colorScheme="twitter" alignSelf="flex-end">
          Tweet
        </Button>
      </VStack>
    </Box>
  );
};

export default TweetForm;