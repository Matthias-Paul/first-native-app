import { View, Pressable, Text } from "react-native";
import { useState } from "react";
import GoalItems from "../components/GoalItems";
import GoalInput from "../components/GoalInput";

export default function Index() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [goalList, setGoalList] = useState([]);

  const goalInputHandler = (enterText) => {
    console.log(enterText);
    setEnteredGoalText(enterText);
  };

  const addGoalHandler = () => {
    if (enteredGoalText === "") {
      return;
    }
    setGoalList((prevGoals) => [...prevGoals, enteredGoalText]);
    setModalIsVisible(false);
    console.log("added")
    setEnteredGoalText("");
  };

  const deleteGoalHandler = (index) => {
    setGoalList((goals) => goals.filter((_, i) => i !== index));
  };

  return (
    <View className="w-full flex-1  px-4 pt-5 items-center bg-blue-900">
      <Pressable
        onPress={() => setModalIsVisible(true)}
        className=" w-full mb-8 bg-white py-2 rounded-md"
      >
        <Text className="text-green-600 text-lg text-center font-semibold">
          Add New Goal
        </Text>
      </Pressable>

      <GoalInput
        enteredGoalText={enteredGoalText}
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
        modalIsVisible={modalIsVisible}
        setModalIsVisible={setModalIsVisible}
      />

      {/* Goals List */}
      <GoalItems deleteGoalHandler={deleteGoalHandler} goalList={goalList} />
    </View>
  );
}
