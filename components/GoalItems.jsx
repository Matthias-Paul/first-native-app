import { View, FlatList, Text, Pressable } from "react-native"

const GoalItems =({goalList, deleteGoalHandler})=> {

  return (
    <>
       <View  className="pt-8 flex-1 border-t border-white w-full ">
          <FlatList data={goalList} renderItem={ (itemData) => (

            <Pressable onPress={() => deleteGoalHandler(itemData.index)}  >
              <View
                className="rounded-md p-2 mx-4 border text-white mb-4 border-white shadow-md"
                style={{ elevation: 4 }}>
                <Text className="leading-tight text-white ">{itemData.item}</Text>
              </View>
            </Pressable>

          )
          }
          keyExtractor={(item, index) => index.toString() }
          />
      
      </View>
      
    </>
  )
}

export default GoalItems
