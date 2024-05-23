import { Box, Text } from "@chakra-ui/react";

const Tweet = ({ content }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      mb={4}
      bg="white"
      shadow="md"
    >
      <Text>{content}</Text>
    </Box>
  );
};

export default Tweet;