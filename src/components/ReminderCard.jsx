import { Text, VStack, HStack, Image, Collapse, Pressable, FlatList, Divider } from "native-base";
import React, { Fragment, useState} from "react";

const ReminderCard = (props) => {
  const convertToINR = (cover) => {
        return cover.toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR',
        })}
const pastDue = props.reminderData.pastDue;
  if(pastDue){
    return (
        <HStack justifyContent="space-between" paddingBottom="0">
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="red.500"
                        >
                          {props.reminderData.accountName}
                        </Text>
                        <Text color="indigo.900" opacity="0.5">
                          {props.reminderData.dueDate}
                        </Text>
                      </VStack>
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="red.500"
                        >
                          {convertToINR(props.reminderData.balance)}
                        </Text>
                      </VStack>
                    </HStack>
    );
  } 
    return (
        <HStack justifyContent="space-between" paddingBottom="0">
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.600"
                        >
                          {props.reminderData.accountName}
                        </Text>
                        <Text color="indigo.900" opacity="0.5">
                          {props.reminderData.dueDate}
                        </Text>
                      </VStack>
                      <VStack justifyContent="center">
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          color="indigo.900"
                        >
                          {convertToINR(props.reminderData.balance)}
                        </Text>
                      </VStack>
                    </HStack>
    );

};
export default ReminderCard;