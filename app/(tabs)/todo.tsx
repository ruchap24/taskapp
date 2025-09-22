import { useState } from "react"; // Importing useState hook from React
import {
  View,         
  Text,  
  TextInput,    // user input
  TouchableOpacity, // Importing TouchableOpacity for button-like behavior      iykyu :)
  FlatList,    // Importing FlatList for rendering lists
  StyleSheet, 
} from "react-native";

// Main App component
const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  // State to track the index of the task being edited
  const [editIndex, setEditIndex] = useState(-1);


  const handleAddTask = () => {
    if (task) {
      if (editIndex !== -1) {
        // If editIndex is not -1, update the existing task
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = task; // Update the task at the specified index
        setTasks(updatedTasks); 
        setEditIndex(-1); // Reset editIndex
      } else {
        // If editIndex is -1, add a new task
        setTasks([...tasks, task]); // Add the new task to the tasks array
      }
      setTask(""); // Clear the input field
    }
  };

  // Function to handle editing a task
  const handleEditTask = (index) => {
    const taskToEdit = tasks[index]; // Get the task to be edited
    setTask(taskToEdit); // Set the task in the input field
    setEditIndex(index); // Set the index of the task being edited
  };

  // Function to handle deleting a task
  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1); // Remove the task at the specified index
    setTasks(updatedTasks); // Update the tasks state
  };

  // Function to render each task item
  const renderItem = ({ item, index }) => (
    <View style={styles.task}>
      <Text style={styles.itemList}>{item + " "}</Text> {/* Display the task */}
      <View style={styles.taskButtons}>
        <TouchableOpacity onPress={() => handleEditTask(index)}>
          <Text style={styles.editButton}>Edit</Text> {/* Edit button */}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteTask(index)}>
          <Text style={styles.deleteButton}>Delete</Text> {/* Delete button */}
        </TouchableOpacity>
      </View>
    </View>
  );

  // Main UI rendering
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>rucha's</Text>
      <Text style={styles.title}>ToDo App</Text> 
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={task} 
        onChangeText={(text) => setTask(text)}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAddTask}
      >
        <Text style={styles.addButtonText}>
          {editIndex !== -1 ? "Update Task" : "Add Task"} {/* Button text changes based on edit mode */}
        </Text>
      </TouchableOpacity>

      <FlatList
        data={tasks} // Pass tasks array as data
        renderItem={renderItem} // Render each task using renderItem
        keyExtractor={(_item, index) => index.toString()} // Unique key for each item
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1, // Take full screen height
    padding: 40, 
    marginTop: 40,
  },
  title: {
    color: "white",
    fontSize: 24, 
    fontWeight: "bold",
    marginBottom: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 7, 
    color: "white",
  },
  input: {
    color :"white",
    borderWidth: 3,
    borderColor: "white",
    padding: 10, 
    marginBottom: 10, 
    borderRadius: 10, // Rounded corners
    fontSize: 18, 
  },
  addButton: {
    color: "white", //
    backgroundColor: "green", 
    padding: 10, //
    borderRadius: 5, // Rounded corners
    marginBottom: 10, 
  },
  addButtonText: {
    color: "white", 
    fontWeight: "bold", 
    textAlign: "center", 
    fontSize: 18, 
  },
  task: {
    color :"while",
    flexDirection: "row", // Arrange items in a row
    justifyContent: "space-between", // Space between items
    alignItems: "center", // Align items vertically in the center
    marginBottom: 15, 
    fontSize: 18,
  },
  itemList: {
    color :"black",
    backgroundColor:"orange",
    fontSize: 19,
    padding: 10, 
    borderRadius: 5,
    flex: 1, // Take up available space
  },
  taskButtons: {
    flexDirection: "row",
  },
  editButton: {
    marginLeft: 10,
    marginRight: 10, 
    color: "green",
    fontWeight: "bold", 
    fontSize: 18,
    backgroundColor:"white",
    padding:10,
    borderRadius:5,
  },
  deleteButton: {
    color: "red", 
    fontWeight: "bold", 
    fontSize: 18, 
    backgroundColor:"white",
    padding:10,
    borderRadius:5,
  },
});

export default App;