import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Avatar, Icon } from 'react-native-elements'

const CrossWordCategory = (props) => {
    return (
      	<View style={styles.categoryContainer}>        
 			<View style={styles.categoryMark}>
 			 <Avatar rounded icon={{ name: props.iconTitle, color: props.iconColor, type: props.iconType }} 
 			 overlayContainerStyle={[styles.markIcon, {borderColor: props.colorBorder}]} />
 			</View>
 			<View style={styles.categoryTitleContainer}>
 			 <Text style={styles.categoryTitle}>{props.title}</Text>
 			</View>
 			<View style={{flex: 1}}>
 				<Icon name='rightcircleo' type='antdesign' color='grey' />
 			</View>
 		</View>
    );
}

const styles = StyleSheet.create({
	categoryContainer: {
		flexDirection: 'row', 
		height: 50, 
		marginHorizontal: 15, 
		marginBottom: 10, 
		borderRadius: 30, 
		borderWidth: 1, 
		borderColor: '#ddd', 
		padding: 10
	},
	categoryMark: {
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'center'
	},
	markIcon: {
		backgroundColor: 'transparent',  
		borderWidth: 1, 
		borderRadius: 100
	},
	categoryTitleContainer: {
		flex: 5,
		justifyContent: 'center'
	},
	categoryTitle: {
		fontSize: 16, 
		fontWeight: '500', 
		paddingLeft: 5,
	}
});

export default CrossWordCategory;