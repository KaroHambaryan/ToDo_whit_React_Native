import { View, StyleSheet, Text } from "react-native"

export default function App() {
	return <View style ={styles.container}> 
		<View style ={styles.TasksWrapper}>
			<Text style={styles.sectionTitle}>Today's tasks</Text>
			
			<View style={styles.items}></View>
		</View>
	</View>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems:'center',
	},
})

