import { Alert, FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import TodoStyles from "./styles/TodoStyles";
import {IconButton} from "react-native-paper";
import Fallback from "./src/components/Fallback";

const TodoScreen = () => {

  // Init local states
  const [todo, settodo] = useState("")
  const [todolist, settodolist] = useState([])
  const [edittodo, setedittodo] = useState(null)
  // Handle Add Todo
  const handleAdd = () =>{
    settodolist([...todolist, {id: Date.now().toString(), title: todo}])
    settodo("")
  };

  // Handle delete
  const handledelete = (id) => {
    const updated = todolist.filter((todo) => todo.id !== id)
    settodolist(updated)
  }

  // Handle edit
  const handledit = (todo) => {
    setedittodo(todo)
    settodo(todo.title)
  };

  // Handle Update
  const handleUpdate = () => {
    const updated = todolist.map((item) => {
      if (item.id === edittodo.id){
        return {...item, title: todo}
      }
      return item
    });
    settodolist(updated);
    setedittodo(null);
    settodo("");
  }
  // Render todo
  const renderTodo = ({item, index}) => {
    return (
      <View style={TodoStyles.item}>
        <Text style = {TodoStyles.itemText}>{item.title}</Text>
        <IconButton icon= "pencil" iconColor="#fff" onPress={() => handledit(item)}/>
        <IconButton icon="delete" iconColor="#fff" onPress={() => handledelete(item.id)}/>
        
      </View>
    )
  }
    return (
      
      <SafeAreaView>
        <View style={{marginHorizontal: 16, marginVertical:50}}>
            <TextInput style= {TodoStyles.input} placeholder="Add a Task" value={todo} onChangeText={(userText) => settodo(userText)}/>
            {edittodo ? 
              <TouchableOpacity style={TodoStyles.button} onPress={() => handleUpdate()}>
                <Text style={TodoStyles.buttonText}>Save</Text>
              </TouchableOpacity> :
              <TouchableOpacity style={TodoStyles.button} onPress={() => handleAdd()}>
                <Text style={TodoStyles.buttonText}>Add</Text>
              </TouchableOpacity>
            }
        {/* Render ToDo List*/}
        <FlatList data = {todolist} renderItem={renderTodo}/>

        {todolist.length <=0 && <Fallback/>}
        </View>
        </SafeAreaView>
    )
}

export default TodoScreen