import { View, TextInput, Pressable, Text, Modal, Image } from "react-native";

const GoalInput = ({
  goalInputHandler,
  addGoalHandler,
  enteredGoalText,
  modalIsVisible,
  setModalIsVisible,
}) => {
  return (
    <>
      <Modal visible={modalIsVisible} animationType="slide">
        <View className="w-full bg-gray-600 px-2 space-y-4 flex-col flex-1 justify-center items-center">
          <Image
            source={require("../assets/images/goal.png")}
            className="w-15 h-15 rounded-full  "
            resizeMode="contain"
          />

          <View className="my-4 w-full">
            <TextInput
              onChangeText={goalInputHandler}
              className="text-white w-full text-lg border border-white p-2 rounded-md"
              placeholder="Your course goal"
              placeholderTextColor="#ccc"
              value={enteredGoalText}
            />
          </View>
          <View className="w-full max-w-[18rem] flex flex-row justify-center ">
            
            <Pressable
              onPress={() => setModalIsVisible(false)}
              className="ml-2 bg-white hover:bg-red-400  px-3 py-2 rounded-md"
            >
              <Text className="text-red-600  text-md hover:text-white text-center font-semibold">
                Cancel
              </Text>
            </Pressable>

            <Pressable
              onPress={addGoalHandler}
              className="ml-2 hover:bg-green-400  bg-white px-3 py-2 rounded-md"
            >
              <Text className="text-green-600 text-md text-center hover:text-white font-semibold">
                Add goal
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default GoalInput;
