import React, { Fragment, useState, useEffect } from "react";
import {
  Text,
  Button,
  VStack,
  HStack,
  Heading,
  ScrollView,
  Box,
  FlatList,
  Divider,
  Avatar,
  IconButton,
  ChevronRightIcon,
} from "native-base";
import { SafeAreaView, Dimensions } from "react-native";
import { Feather, Ionicons, FontAwesome5 } from "@expo/vector-icons";

const ProfileScreen = () => {
  const data = [
    { id: "1", label: "Notifications" },
    { id: "2", label: "Privacy & Security" },
    { id: "3", label: "Help & Feedback" },
    { id: "4", label: "Referral" },
  ]

  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: "#6366f1" }}>
        <ScrollView
          vertical
          showsVerticalScrollIndicator={false}
          bgColor="gray.100"
          nestedScrollEnabled={true}
          height="100%"
        >
          <VStack>
            <HStack>
              <Box
                bgColor="indigo.500"
                width="100%"
                paddingX="5"
                paddingTop="2"
                paddingBottom="2"
              >
                <VStack>
                  <HStack justifyContent="space-between" marginBottom="7">
                    <VStack flex="1" justifyContent="center">
                      <Text fontSize="3xl" color="white" fontWeight="bold">
                        Account
                      </Text>
                    </VStack>
                    <VStack marginX="2" justifyContent="center">
                      <Feather name="plus" size={30} color={"white"} />
                    </VStack>
                    <VStack marginX="2" justifyContent="center">
                      <Feather name="settings" size={24} color={"white"} />
                    </VStack>
                  </HStack>
                </VStack>
              </Box>
            </HStack>
            <HStack justifyContent="center" marginBottom="6" marginTop="-5">
              <Box
                bgColor="white"
                width="85%"
                rounded="7"
                padding="3"
                paddingBottom="4"
              >
                <HStack justifyContent="space-between">
                  <VStack>
                    <Heading
                      fontSize="xl"
                      fontWeight="bold"
                      paddingBottom="8"
                      justifyContent={"flex-start"}
                      color="indigo.900"
                    >
                      Lorem Ipsum Lorem
                    </Heading>
                    <Text fontSize="xl" fontWeight="bold">
                      AB1234
                    </Text>
                    <Text opacity="0.5">loremipsumlorem@gmail.com</Text>
                  </VStack>

                  <Avatar
                    bg="indigo.500"
                    alignSelf="flex-end"
                    size="xl"
                    source={{
                      uri: "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
                    }}
                  >
                    LL
                  </Avatar>
                </HStack>
              </Box>
            </HStack>
            <HStack justifyContent="center" marginBottom="1">
              <Box
                bgColor="white"
                width="85%"
                rounded="7"
                padding="3"
                paddingBottom="4"
              >
                <VStack>
                  <Heading
                    fontSize="xl"
                    fontWeight="bold"
                    paddingBottom="8"
                    justifyContent={"flex-start"}
                    color="indigo.900"
                  >
                    Settings
                  </Heading>
                  <FlatList
                    data={data}
                    renderItem={({ item }) => (
                      <Fragment>
                        <HStack justifyContent="space-between">
                          <Text
                            fontSize="lg"
                            fontWeight="semibold"
                            paddingTop="1"
                          >
                            {item.label}
                          </Text>
                          <IconButton
                            size="sm"
                            variant="ghost"
                            key={item.id}
                            _pressed={{
                              bg: "indigo.600:alpha.20",
                            }}
                            icon={<ChevronRightIcon size="6" />}
                          />
                        </HStack>
                        <Divider marginY={3} />
                      </Fragment>
                    )}
                    keyExtractor={(item) => item.id}
                  />
                  <Button
                    variant="ghost"
                    fontSize="lg"
                    fontWeight="semibold"
                    colorScheme="indigo"
                    onPress={() => console.log("Sign Out")}
                  >
                    Sign Out
                  </Button>
                </VStack>
              </Box>
            </HStack>
          </VStack>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default ProfileScreen;
