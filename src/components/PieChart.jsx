import { HStack, VStack } from 'native-base';
import React from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet
} from 'react-native';
import { DonutChart,DonutItemInfo } from "react-native-circular-chart";
import "react-native-svg";

 const PieChart = (props) => {

   const DATA = [{name:'Food',value:700,color:'#6366f1'},{name:'Entertainment',value:500,color:'#8b83f5'},{name:'Travel',value:600,color:'#aca0f8'},{name:'Shopping',value:500,color:'#c9bffb'},{name:'Groceries',value:400,color:'#e5dffd'}]
const styles = StyleSheet.create({
  sectionWrapper: {
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
 
});

    return (
      <View style={styles.sectionWrapper}>
  <DonutChart
    data={DATA}
    strokeWidth={25}
    radius={90}
    containerWidth={300}
    containerHeight={105 * 2}
    
    startAngle={0}
    endAngle={360}
    animationType="slide"
  />
  <HStack paddingTop="5">
      <VStack padding="4" style={{alignItems: 'center'}}><HStack><View style={{width: 20,height: 20,borderRadius: 20 / 2,backgroundColor: '#6366f1'}} ></View></HStack><HStack><Text>Food</Text></HStack></VStack>
      <VStack padding="4" style={{alignItems: 'center'}}><HStack><View style={{width: 20,height: 20,borderRadius: 20 / 2,backgroundColor: '#8b83f5'}} ></View></HStack><HStack><Text>Entertainment</Text></HStack></VStack>
      <VStack padding="4" style={{alignItems: 'center'}}><HStack><View style={{width: 20,height: 20,borderRadius: 20 / 2,backgroundColor: '#aca0f8'}} ></View></HStack><HStack><Text>Travel</Text></HStack></VStack>
      </HStack>
      <HStack >
      <VStack paddingTop="0" paddingLeft="4" paddingRight="4" style={{alignItems: 'center'}}><HStack><View style={{width: 20,height: 20,borderRadius: 20 / 2,backgroundColor: '#c9bffb'}} ></View></HStack><HStack><Text>Shopping</Text></HStack></VStack>
      <VStack paddingTop="0" paddingLeft="4" paddingRight="4" style={{alignItems: 'center'}}><HStack><View style={{width: 20,height: 20,borderRadius: 20 / 2,backgroundColor: '#e5dffd'}} ></View></HStack><HStack><Text>Groceries</Text></HStack></VStack>
      </HStack>
 
</View>

    )
}

export default PieChart;