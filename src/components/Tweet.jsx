import { Box, Text, Flex, Avatar } from "@chakra-ui/react";

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
      width="100%"
    >
      <Flex align="center" mb={2}>
        <Avatar size="md" name="User" src="https://bit.ly/broken-link" />
        <Text ml={4} fontWeight="bold">
          User Name
        </Text>
      </Flex>
      <Text>{content}</Text>
    </Box>
  );
};

export default Tweet;