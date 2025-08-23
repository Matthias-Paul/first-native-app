import { Pressable, Text, TextInput, View, FlatList  } from "react-native";
import { useState } from "react";

export default function Index() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [goalList, setGoalList] = useState([]);

  const goalInputHandler = (enterText) => {
    console.log(enterText);
    setEnteredGoalText(enterText);
  };

  const addGoalHandler = () => {
    setGoalList((prevGoals) => [...prevGoals, enteredGoalText]);
    // setEnteredGoalText("");
  };
  return (
    <View className="w-full flex-1 px-2 pt-5 items-center bg-blue-900">
      <View className="w-full mb-8 flex-row justify-center items-center">
        <View className="flex-1">
          <TextInput
            onChangeText={goalInputHandler}
            className="text-white text-lg border border-white p-2 rounded-md"
            placeholder="Your course goal"
            placeholderTextColor="#ccc"
          />
        </View>

        <Pressable
          onPress={addGoalHandler}
          className="ml-2 bg-white px-3 py-2 rounded-md"
        >
          <Text className="text-green-600 text-lg text-center font-semibold">
            Add goal
          </Text>
        </Pressable>
      </View>

      {/* Goals List */}
      <View  className="pt-8 flex-1 border-t border-white w-full ">
          <FlatList data={goalList} renderItem={ (itemData) => (
            <View
            className="rounded-md p-2 mx-4 border text-white mb-4 border-white shadow-md"
            style={{ elevation: 4 }}>
            <Text className="leading-tight text-white ">{itemData.item}</Text>
          </View>
          )
          }
          keyExtractor={(item, index) => index.toString() }
          />
      
      </View>
      
    </View>
  );
}
