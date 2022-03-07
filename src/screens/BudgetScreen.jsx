import React, { Fragment, useState, useEffect, Component } from "react";
import {  Button, VStack, HStack, Switch, useColorMode, Heading, ScrollView, Box, Image, Collapse, Pressable, Text, View, FlatList, Divider, Progress, Center, NativeBaseProvider } from "native-base";
import {SafeAreaView, Dimensions, StyleSheet} from "react-native";
import { Feather, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import {BarChart } from "react-native-svg-charts";
import { Text as SvgText} from "react-native-svg";
import PieChart from "../components/PieChart";
import MonthlyBudgetBreakdown from "../components/BudgetBreakdown";
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

            


  const [userData, setUserData] = useState({
    id: 1,
    totalNetworth: "2,16,171",
    lastUpdated: "4 mins ago",
    banks_total: "1,33,021",
    creditCards_total: "-9,340",
    loans_total: "-31,000",
    investments_total: "1,23,490",
    property_total: "2,21,23,490",
    monthly_spent: 7234,
    monthly_budget: 10000,
    monthly_earning: 15000,
    piedata: [
      {
        name: "Food",
        value: 700,
        color: "#6366f1",
      },
      {
        name: "Entertainment",
        value: 500,
        color: "#8b83f5",
      },
      {
        name: "Travel",
        value: 600,
        color: "#aca0f8",
      },
      {
        name: "Shopping",
        value: 500,
        color: "#c9bffb",
      },
      {
        name: "Groceries",
        value: 400,
        color: "#e5dffd",
      },
    ],
    categorySpends: [
      {
        name: "Groceries",
        value: 200,
        total: 700,
        overBudget: false,
      },
      {
        name: "Medicines",
        value: 290,
        total: 400,
        overBudget: false,
      },
      {
        name: "Food & Delivery",
        value: 900,
        total: 700,
        overBudget: true,
      },
      {
        name: "Electricity",
        value: 789,
        total: 800,
        overBudget: false,
      },
      {
        name: "Telephone & Internet",
        value: 450,
        total: 500,
        overBudget: false,
      },
    ],
  });
  const cash_flow=[]
  if (userData.monthly_spent > userData.monthly_earning) {
    const diff = convertToINR((userData.monthly_earning - userData.monthly_spent)*-1)
    cash_flow.push(<Text fontSize="2xl" fontWeight="bold" paddingBottom="3">- {diff}</Text>)
  }
  else{
    const diff = convertToINR((userData.monthly_earning - userData.monthly_spent))
    cash_flow.push(<Text key={0} fontSize="2xl" fontWeight="bold" paddingBottom="3">+ {diff}</Text>)
  }
    const rupee = {symbol: '\u20B9'};
    const month = new Date().getMonth();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const monthly_spent = convertToINR(userData.monthly_spent)

  const monthly_budget = convertToINR(userData.monthly_budget)
 

    const screenWidth = Dimensions.get("window").width;
    const budget_statement = BudgetStatement(userData.monthly_budget, userData.monthly_spent)
    const data2 = [userData.monthly_earning,userData.monthly_spent]
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
                    value={
                      (userData.monthly_spent / userData.monthly_budget) * 100
                    }
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
                  <PieChart piedata={userData.piedata} />
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
                  {userData.categorySpends.map((category) => (
                    <MonthlyBudgetBreakdown category={category} />
                    ))}
                  </VStack>
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
                    paddingBottom="3"
                    justifyContent={"flex-start"}
                    color="indigo.900"
                  >
                    {months[month]} Cash Flow
                  </Heading>
                  <VStack>{cash_flow}</VStack>
                  <VStack>
                    <HStack display="flex">
                      <Text
                        fontSize="xl"
                        fontWeight="bold"
                        color="indigo.900"
                        justifyContent={"flex-start"}
                        opacity={0.5}
                      >
                        Earned {"\n"}
                        {convertToINR(userData.monthly_earning)}
                      </Text>

                      <Text
                        fontSize="xl"
                        fontWeight="bold"
                        color="indigo.900"
                        style={{ position: "absolute", right: 0 }}
                        justifyContent={"flex-end"}
                        opacity={0.5}
                      >
                        Spent {"\n"}
                        {convertToINR(userData.monthly_spent)}
                      </Text>
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
                      svg={{ fill: "#6366f1" }}
                      contentInset={{ top: 10, bottom: 10 }}
                      spacing={0.2}
                      gridMin={0}
                    ></BarChart>
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
