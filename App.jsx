import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";

import Task from "./components/Task";
import { TextInput } from "react-native-gesture-handler";

export default function App() {
	const [task, setTask] = useState();
	const [taskItems, setTaskItems] = useState([]);


	const handleAddTask = () => {
		if (task) {
			setTaskItems([...taskItems, task]);
			setTask(null);
		}
	};

	const complateTask = (index) => {
		let itemsCopy = [...taskItems];
		itemsCopy.splice(index, 1);
		setTaskItems(itemsCopy);
	}

	return <View style ={styles.container}> 
		<View style ={styles.tasksWrapper}>
			<Text style={styles.sectionTitle}>Today's tasks</Text>
			
			<View style={styles.items}>
				{taskItems.map((task, index) => {
					return <TouchableOpacity onPress={() => complateTask(index)}>
											<Task key={index} text={task} />
								</TouchableOpacity>
				})}
			</View>
		</View>

		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.writeTaskWrapper}
		>
			<TextInput style={styles.input} placeholder={'write a task'} value={task} onChangeText={text => setTask(text)}></TextInput>
			<TouchableOpacity onPress={()=>handleAddTask()}>
				<View style={styles.addWrapper}>
					<Text style={styles.addText}>+</Text>
				</View>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	</View>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor:'#EBEAED',
	},
	tasksWrapper: {
		paddingTop: 80,
		paddingHorizontal:20,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		
	},
	items: {
		marginTop:30,
	},
	writeTaskWrapper: {
		paddingHorizontal:20,
		position: 'absolute',
		bottom: 60,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems:'center',
	},
	input: {
		borderColor: '#C0C0C0',
		borderWidth: 1,
		borderRadius: 60,
		paddingVertical: 15,
		paddingHorizontal: 15,
		backgroundColor: '#FFF',
		width: 250,
	},
	addWrapper: {
		width: 60,
		height: 60,
		backgroundColor: '#FFF',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 30,
		borderColor: '#C0C0C0',
		borderWidth: 1,
	},
})

