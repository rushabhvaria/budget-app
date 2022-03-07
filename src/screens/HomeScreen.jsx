import React, { Fragment, useState, useEffect, Component } from "react";
import { Text, Button, VStack, HStack, Switch, useColorMode, Heading, ScrollView, Box, Image,View, Collapse, Pressable, FlatList, Divider } from "native-base";
import {SafeAreaView} from "react-native";
import { Feather, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import NetworthCard from "../components/NetworthCard";
import TransactionCard from "../components/TransactionCard";
import ReminderCard from "../components/ReminderCard";
import InteractiveChart from "../components/LineChart";
import {LineChart,Path, Grid } from "react-native-svg-charts";
const HomeScreen = () => {

    const [userData, setUserData] = useState(
        {
            id: 1,
            totalNetworth: "2,16,171",
            lastUpdated: "4 mins ago",
            banks_total: 133021,
            creditCards_total: -9340,
            loans_total: -31000,
            investments_total: 123490,
            property_total: 22123490,
            banks: [
                {
                    id: 1,
                    accountName: "HDFC Savings Acc",
                    bankName: "HDFC Bank (...3902)",
                    balance: 83102,
                    lastUpdated: "40 mins ago",
                    logoURL: "https://static.wikia.nocookie.net/logopedia/images/6/61/HDFC.png"
                },
                {
                    id: 2,
                    accountName: "Axis Priority Acc",
                    bankName: "Axis Bank (...8027)",
                    balance: 53885,
                    lastUpdated: "30 mins ago",
                    logoURL: "https://www.nfcw.com/wp-content/uploads/2020/06/axis-bank-logo.jpg"
                }
            ],
            creditCards: [
                {
                id: 1,
                accountName: "SBI Pulse",
                bankName: "State Bank Of India (...4406)",
                balance: -18765,
                lastUpdated: "10 mins ago",
                logoURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/1200px-SBI-logo.svg.png"
                },
                {
                id: 2,
                accountName: "HDFC Regalia",
                bankName: "HDFC Bank (...9010)",
                balance: -23590,
                lastUpdated: "10 mins ago",
                logoURL: "https://static.wikia.nocookie.net/logopedia/images/6/61/HDFC.png"
                }
            ],
            loans: [
                {
                id: 1,
                accountName: "Personal Loan",
                bankName: "HDFC Bank (...2210)",
                balance: -230000,
                lastUpdated: "10 mins ago",
                logoURL: "https://static.wikia.nocookie.net/logopedia/images/6/61/HDFC.png"
                },
                {
                id: 2,
                accountName: "Home Loan",
                bankName: "Kotak Mahindra Bank (...5732)",
                balance: -4360590,
                lastUpdated: "10 mins ago",
                logoURL: "https://static.smartspends.com/static/images/short_providers_logos/kotak_mahindra_mutual_fund.png"
                },
                {
                id: 3,
                accountName: "Motor Vehicle Loan",
                bankName: "ICICI Bank (...3836)",
                balance: -648920,
                lastUpdated: "10 mins ago",
                logoURL: "http://www.logotaglines.com/wp-content/uploads/2016/08/ICICI-Logo.png"
                }
            ],
            investments: [
                {
                id: 1,
                accountName: "Zerodha Investments",
                bankName: "Zerodha Kite (...OMP236)",
                balance: 1223889,
                lastUpdated: "05 mins ago",
                logoURL: "https://secureservercdn.net/160.153.137.210/0vy.d0c.myftpupload.com/wp-content/uploads/2020/09/Zerodha-1_1.png"
                },
                {
                id: 2,
                accountName: "Mutual Funds",
                bankName: "Axis Mutual Fund (...1890)",
                balance: 209490,
                lastUpdated: "05 mins ago",
                logoURL: "https://www.nfcw.com/wp-content/uploads/2020/06/axis-bank-logo.jpg"
                },
                {
                id: 3,
                accountName: "Sovereign Gold Bond",
                bankName: "HDFC Bank (...2651)",
                balance: 110238,
                lastUpdated: "05 mins ago",
                logoURL: "https://static.wikia.nocookie.net/logopedia/images/6/61/HDFC.png"
                }
            ],
            property: [
                {
                id: 1,
                accountName: "Residential Property",
                bankName: "Beau Monde Apt (...3101)",
                balance: 9828000,
                lastUpdated: "10 mins ago",
                logoURL: ""
                },
                {
                id: 2,
                accountName: "Commercial Showroom",
                bankName: "The Capital (...104)",
                balance: 11066000,
                lastUpdated: "10 mins ago",
                logoURL: ""
                }
            ],
            transactions: [
                {
                    id: 1,
                    accountName: "Apple Store",
                    transactionCategory: "Shopping",
                    balance: 4500,
                    lastUpdated: "10 mins ago",
                    // logoURL: "https://static.wikia.nocookie.net/logopedia/images/6/61/HDFC.png"
                },
                {
                    id: 2,
                    accountName: "Foodhall",
                    transactionCategory: "Food",
                    balance: 1200,
                    lastUpdated: "40 mins ago",
                    // logoURL: "https://static.wikia.nocookie.net/logopedia/images/6/61/HDFC.png"
                },
                {
                    id: 3,
                    accountName: "Reebok",
                    transactionCategory: "Shopping",
                    balance: 2999,
                    lastUpdated: "1 hour ago",
                    // logoURL: "https://static.wikia.nocookie.net/logopedia/images/6/61/HDFC.png"
                },
                {
                    id: 4,
                    accountName: "Swiggy",
                    transactionCategory: "Food",
                    balance: 1500,
                    lastUpdated: "1.5 hour ago",
                    // logoURL: "https://static.wikia.nocookie.net/logopedia/images/6/61/HDFC.png"
                },
                {
                    id: 5,
                    accountName: "Beirut",
                    transactionCategory: "Food",
                    balance: 2660,
                    lastUpdated: "2 hour ago",
                    // logoURL: "https://static.wikia.nocookie.net/logopedia/images/6/61/HDFC.png"
                }
            ],
            reminders: [
                {
                    id: 1,
                    accountName: "Credit Card",
                    dueDate: "05/11/2021",
                    balance: 3500,
                    pastDue: true,
                },
                {
                    id: 2,
                    accountName: "Phone Bill",
                    dueDate: "07/11/2021",
                    balance: 460,
                    pastDue: false,
                },
                {
                    id: 3,
                    accountName: "House EMI",
                    dueDate: "13/11/2021",
                    balance: 45000,
                    pastDue: false,
                    
                },
            ],
            piedata: [
            {
              name:'Food',
              value:700,
              color:'#6366f1'
            },
            {
              name:'Entertainment',
              value:500,
              color:'#8b83f5'
            },
            {
              name:'Travel',
              value:600,
              color:'#aca0f8'
            },
            {
              name:'Shopping',
              value:500,
              color:'#c9bffb'
            },
            {
              name:'Groceries',
              value:400,
              color:'#e5dffd'
            },
          ],
        }
    );

    const rupee = {symbol: '\u20B9'};
    const data1 = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
    const data2 = [ -87, 66, -69, 92, -40, -61, 16, 62, 20, -93, -54, 47, -89, -44, 18 ]

    const data = [
        {
            data: data1,
            svg: { stroke: '#3a243b' },
        },
        {
            data: data2,
            svg: { stroke: '#705d72' },
        },
    ]
    // const convertToINR = (cover) => {
    //     return cover.toLocaleString('en-IN', {
    //         style: 'currency',
    //         currency: 'INR',
    //     })}


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
                  paddingBottom="7"
                  marginBottom="-7"
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

                    <HStack>
                      <Text fontSize="md" color="white">
                        Total Networth
                      </Text>
                    </HStack>

                    <HStack>
                      <VStack justifyContent="center">
                        <Text fontSize="4xl" color="white">
                          {userData.totalNetworth}
                        </Text>
                      </VStack>
                      <VStack justifyContent="center" marginX="3">
                        <FontAwesome5
                          name="long-arrow-alt-right"
                          size={24}
                          color={"#38bdf8"}
                        />
                      </VStack>
                    </HStack>

                    <HStack>
                      <Text fontSize="2xs" color="white" opacity="0.5">
                        Updated {userData.lastUpdated}
                      </Text>
                    </HStack>

                    <HStack justifyContent="center">
                    <ScrollView>
                    <InteractiveChart></InteractiveChart>
                      </ScrollView>
                    </HStack>
                  </VStack>
                </Box>
              </HStack>

              <NetworthCard
                category="Banks"
                currencySymbol={rupee.symbol}
                categoryTotal={userData.banks_total}
                categoryData={userData.banks}
              />
              <NetworthCard
                category="Credit Cards"
                currencySymbol={rupee.symbol}
                categoryTotal={userData.creditCards_total}
                categoryData={userData.creditCards}
              />
              <NetworthCard
                category="Loans"
                currencySymbol={rupee.symbol}
                categoryTotal={userData.loans_total}
                categoryData={userData.loans}
              />
              <NetworthCard
                category="Investments"
                currencySymbol={rupee.symbol}
                categoryTotal={userData.investments_total}
                categoryData={userData.investments}
              />
              <NetworthCard
                category="Property"
                currencySymbol={rupee.symbol}
                categoryTotal={userData.property_total}
                categoryData={userData.property}
              />

              {/* Recent Transactions Section*/}

              <HStack marginTop={7} paddingX={5}>
                <VStack>
                  <Text fontSize="2xl" color="indigo.600" fontWeight="bold">
                    Recent Transactions
                  </Text>
                  <Text fontSize="xs" color="indigo.800" opacity={0.5}>
                    Your most recent transactions across all accounts
                  </Text>
                </VStack>
              </HStack>
              <HStack justifyContent="center" marginBottom="1" marginTop="5">
                <Box
                  bgColor="white"
                  width="85%"
                  rounded="7"
                  padding="3"
                  paddingBottom="8"
                >
                <VStack>
                    <TransactionCard
                      currencySymbol={rupee.symbol}
                      transactionData={userData.transactions[0]}
                    />
                    <Divider marginY={3} />
                    <TransactionCard
                      currencySymbol={rupee.symbol}
                      transactionData={userData.transactions[1]}
                    />
                    <Divider marginY={3} />
                    <TransactionCard
                      currencySymbol={rupee.symbol}
                      transactionData={userData.transactions[2]}
                    />
                    <Divider marginY={3} />
                    <TransactionCard
                      currencySymbol={rupee.symbol}
                      transactionData={userData.transactions[3]}
                    />
                    <Divider marginY={3} />
                    <TransactionCard
                      currencySymbol={rupee.symbol}
                      transactionData={userData.transactions[4]}
                    />
                  </VStack>
                </Box>
              </HStack>
              {/* <FontAwesome5
                name="angle-double-down"
                size={48}
                color={"indigo.600"}
              /> */}

                {/* Recent Transactions Section*/}
              <HStack marginTop={7} paddingX={5}>
                <VStack>
                  <Text fontSize="2xl" color="indigo.600" fontWeight="bold">
                    Payment Reminders
                  </Text>
                  <Text fontSize="xs" color="indigo.800" opacity={0.5}>
                    Your monthly payment reminders
                  </Text>
                </VStack>
              </HStack>
              <HStack justifyContent="center" marginBottom="1" marginTop="5">
                <Box
                  bgColor="white"
                  width="85%"
                  rounded="7"
                  padding="3"
                  paddingBottom="8"
                >
                  <VStack>
                    <ReminderCard
                      currencySymbol={rupee.symbol}
                      reminderData={userData.reminders[0]}
                    />
                    <Divider marginY={3} />
                    <ReminderCard
                      currencySymbol={rupee.symbol}
                      reminderData={userData.reminders[1]}
                    />
                    <Divider marginY={3} />
                    <ReminderCard
                      currencySymbol={rupee.symbol}
                      reminderData={userData.reminders[2]}
                    />
                  </VStack>
                </Box>
              </HStack>
              {/* <FontAwesome5
                name="angle-double-down"
                size={48}
                color={"indigo.600"}
              /> */}
            </VStack>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
};

export default HomeScreen;