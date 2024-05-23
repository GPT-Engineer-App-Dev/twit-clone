import { useState } from "react";
import { Box, Button, Input, VStack } from "@chakra-ui/react";

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
    <Box as="form" onSubmit={handleSubmit} mb={4}>
      <VStack spacing={4}>
        <Input
          placeholder="What's happening?"
          value={tweetContent}
          onChange={(e) => setTweetContent(e.target.value)}
        />
        <Button type="submit" colorScheme="blue">
          Tweet
        </Button>
      </VStack>
    </Box>
  );
};

export default TweetForm;