import React, { Fragment, useState, useEffect, Component } from "react";
import {  Button, VStack, HStack, Switch, useColorMode, Heading, ScrollView, Box, Image, Collapse, Pressable, Text, View, FlatList, Divider, Progress, Center, NativeBaseProvider } from "native-base";
import {SafeAreaView, Dimensions, StyleSheet} from "react-native";
import { Feather, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import {BarChart } from "react-native-svg-charts";
import { Text as SvgText} from "react-native-svg";
import PieChart from "../components/PieChart";
const BudgetScreen = () => {
  const convertToINR = (cover) => {
        return cover.toLocaleString('en-IN', {
            maximumFractionDigits: 0,
            style: 'currency',
            currency: 'INR',
        })}

        const BudgetStatement = (monthly_budget, monthly_spent) => { 
          const budget_string = ""
            if(monthly_budget<monthly_spent){
                const budget_difference = convertToINR((userData.monthly_budget - userData.monthly_spent)*-1)
                return  <Text>You're <Text fontWeight="bold">{budget_difference}</Text> over budget. Try better!</Text> 
              } else{
                const budget_difference = convertToINR((userData.monthly_budget - userData.monthly_spent))
                return  <Text>You're <Text fontWeight="bold">{budget_difference}</Text> under budget. Great going!</Text> 
              }}


  const [userData, setUserData] = useState(
    {
            id: 1,
            totalNetworth: "2,16,171",
            lastUpdated: "4 mins ago",
            banks_total: "1,33,021",
            creditCards_total: "-9,340",
            loans_total: "-31,000",
            investments_total: "1,23,490",
            property_total: "2,21,23,490",
            monthly_spent: 7234,
            monthly_budget: 10000
    })
    const rupee = {symbol: '\u20B9'};
    const month = new Date().getMonth();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const monthly_spent = convertToINR(userData.monthly_spent)

  const monthly_budget = convertToINR(userData.monthly_budget)
 

    const screenWidth = Dimensions.get("window").width;
    const budget_statement = BudgetStatement(userData.monthly_budget, userData.monthly_spent)
    const data2 = [10000,6775];
    const CUT_OFF = 20;
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
                          Si Ae
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
              <HStack justifyContent="center" marginBottom="1" marginTop="-5">
                <Box
                  bgColor="white"
                  width="85%"
                  rounded="7"
                  padding="3"
                  paddingBottom="8"
                >
                  <Heading
                    fontSize="xl"
                    fontWeight="bold"
                    paddingBottom="6"
                    justifyContent={"flex-start"}
                    color="indigo.900"
                  >
                    {months[month]} Budget
                  </Heading>
                  <Text color="indigo.900" fontWeight="bold" fontSize="md">
                  {monthly_spent} <Text opacity="0.5">spent of</Text>{" "}
                    {monthly_budget}
                  </Text>
                  <Progress
                    colorScheme="indigo"
                    rounded="7"
                    size="2xl"
                    value={(userData.monthly_spent/userData.monthly_budget)*100}
                  />
                  <Text color="indigo.900" opacity="0.5">
                    {budget_statement}
                  </Text>
                </Box>
              </HStack>

              <HStack justifyContent="center" marginBottom="1" marginTop="5">
                <Box
                  bgColor="white"
                  width="85%"
                  rounded="7"
                  padding="3"
                  paddingBottom="8"
                >
                  <Heading
                    fontSize="xl"
                    fontWeight="bold"
                    paddingBottom="6"
                    justifyContent={"flex-start"}
                    color="indigo.900"
                  >
                    {months[month]} Spending
                  </Heading>
                  <PieChart>
                  </PieChart>
                </Box>
              </HStack>
              <HStack justifyContent="center" marginBottom="1" marginTop="5">
                <Box
                  bgColor="white"
                  width="85%"
                  rounded="7"
                  padding="3"
                  paddingBottom="8"
                >
                  <Heading
                    fontSize="xl"
                    fontWeight="bold"
                    paddingBottom="6"
                    justifyContent={"flex-start"}
                    color="indigo.900"
                  >
                    Monthly Budget Breakdown
                  </Heading>

                  <VStack>
                    <HStack justifyContent="space-between" paddingBottom="2">
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.900"
                        >
                          Groceries
                        </Text>
                      </VStack>
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.900"
                        >
                          {rupee.symbol}200{" "}
                          <Text color="indigo.900" opacity={0.5}>
                            of {rupee.symbol}700
                          </Text>
                        </Text>
                      </VStack>
                    </HStack>
                    <Divider marginY={3} />
                    <HStack justifyContent="space-between" paddingBottom="2">
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.900"
                        >
                          Medicines
                        </Text>
                      </VStack>
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.900"
                        >
                          {rupee.symbol}290{" "}
                          <Text color="indigo.900" opacity={0.5}>
                            of {rupee.symbol}400
                          </Text>
                        </Text>
                      </VStack>
                    </HStack>
                    <Divider marginY={3} />
                    <HStack justifyContent="space-between" paddingBottom="2">
                      <VStack justifyContent="center">
                        <Text fontSize="md" fontWeight="bold" color="red.500">
                          Food & Delivery
                        </Text>
                      </VStack>
                      <VStack justifyContent="center">
                        <Text fontSize="md" fontWeight="bold" color="red.500">
                          {rupee.symbol}900{" "}
                          <Text color="indigo.900" opacity={0.5}>
                            of {rupee.symbol}700
                          </Text>
                        </Text>
                      </VStack>
                    </HStack>
                    <Divider marginY={3} />
                    <HStack justifyContent="space-between" paddingBottom="2">
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.900"
                        >
                          Electricity
                        </Text>
                      </VStack>
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.900"
                        >
                          {rupee.symbol}789{" "}
                          <Text color="indigo.900" opacity={0.5}>
                            of {rupee.symbol}800
                          </Text>
                        </Text>
                      </VStack>
                    </HStack>
                    <Divider marginY={3} />
                    <HStack justifyContent="space-between" paddingBottom="2">
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.900"
                        >
                          Telephone & Internet
                        </Text>
                      </VStack>
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.900"
                        >
                          {rupee.symbol}450{" "}
                          <Text color="indigo.900" opacity={0.5}>
                            of {rupee.symbol}500
                          </Text>
                        </Text>
                      </VStack>
                    </HStack>
                  </VStack>
                </Box>
              </HStack>
  <HStack justifyContent="center" marginBottom="1" marginTop="5">
                    <Box bgColor="white" width="85%" rounded="7" padding="3" paddingBottom="8">
                        <Heading fontSize="xl" fontWeight="bold" paddingBottom="3" justifyContent={"flex-start"} color="indigo.900">
                        {months[month]} Cash Flow
                        </Heading>
                        <VStack>
                            <Text fontSize="2xl" fontWeight="bold" paddingBottom="3">+ {rupee.symbol}3,225</Text>
                        </VStack>
                        <VStack>
                        <HStack display="flex">

                            <Text fontSize="xl" fontWeight="bold"  color="indigo.900" justifyContent={"flex-start"} opacity={0.5}>Earned {"\n"}{rupee.symbol}10,000</Text>

                            <Text fontSize="xl" fontWeight="bold"  color="indigo.900" style={{position: 'absolute', right: 0}} justifyContent={"flex-end"} opacity={0.5}>Spent {"\n"}{rupee.symbol}6,775</Text>

                        </HStack>
                        </VStack>
                        <View
                    style={{
                      flexDirection: "row",
                      height: 200,
                      paddingVertical: 3,
                    }}
                  >
                    <BarChart
                      style={{ flex: 1 }}
                      data={data2}
                      svg={{fill:'#6366f1'}}
                      contentInset={{ top: 10, bottom: 10 }}
                      spacing={0.2}
                      gridMin={0}
                    >
                      
                    </BarChart>
                  </View>
                    </Box>
                    
                
            </HStack>

            </VStack>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
};


export default BudgetScreen;
