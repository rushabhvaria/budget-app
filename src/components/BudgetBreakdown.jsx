import React, { Fragment, useState, useEffect, Component } from "react";
import {
  Button,
  VStack,
  HStack,
  Switch,
  useColorMode,
  Heading,
  ScrollView,
  Box,
  Image,
  Collapse,
  Pressable,
  Text,
  View,
  FlatList,
  Divider,
  Progress,
  Center,
  NativeBaseProvider,
} from "native-base";
import { SafeAreaView, Dimensions, StyleSheet } from "react-native";

const BudgetBreakdown = (props) => {
  const convertToINR = (cover) => {
    return cover.toLocaleString("en-IN", {
      maximumFractionDigits: 0,
      style: "currency",
      currency: "INR",
    });
  };
  if (props.category.overBudget) {
    return (
      <VStack>
        <HStack justifyContent="space-between" paddingBottom="2">
          <VStack justifyContent="center">
            <Text fontSize="md" fontWeight="bold" color="red.500">
              {props.category.name}
            </Text>
          </VStack>
          <VStack justifyContent="center">
            <Text fontSize="md" fontWeight="bold" color="red.500">
              {convertToINR(props.category.value)}
              <Text color="indigo.900" opacity={0.5}>
                {" "}
                of {convertToINR(props.category.total)}
              </Text>
            </Text>
          </VStack>
        </HStack>
        <Divider marginY={3} />
      </VStack>
    );
  } else {
    return (
      <VStack>
        <HStack justifyContent="space-between" paddingBottom="2">
          <VStack justifyContent="center">
            <Text fontSize="md" fontWeight="bold" color="indigo.900">
              {props.category.name}
            </Text>
          </VStack>
          <VStack justifyContent="center">
            <Text fontSize="md" fontWeight="bold" color="indigo.900">
              {convertToINR(props.category.value)}
              <Text color="indigo.900" opacity={0.5}>
                {" "}
                of {convertToINR(props.category.total)}
              </Text>
            </Text>
          </VStack>
        </HStack>
        <Divider marginY={3} />
      </VStack>
    );
  }
};
export default BudgetBreakdown;
