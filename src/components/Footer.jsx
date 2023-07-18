import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import avtar from "../assets/IMG_20230707_162823_137.jpg";

const avatarSrc = avtar;

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.900"}
      minH={"48"}
      px={"10"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            fontWeight={"bold"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.Stay tuned...
          </Text>
          <Text
            fontSize={"sm"}
            fontWeight={"bold"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Stay tuned...
          </Text>
        </VStack>

        <VStack w={"full"} alignItems={["center", "flex-end"]}>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text fontSize={"sm"}
            fontWeight={"bold"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}>The Founder</Text>
          <Text fontSize={"sm"}
            fontWeight={"bold"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}>Soumya Ranjan Nayak</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
