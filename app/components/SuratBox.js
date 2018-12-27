import React, { Component } from 'react';
import { View, Text, StyleSheet, WebView} from 'react-native';

export default class SuratBox extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	nama: this.props.dataSurat.nama,
	  	asma: this.props.dataSurat.asma,
	  	keterangan: this.props.dataSurat.keterangan, 
	  };
	}

	render() {
		if(this.props.dataSurat != null){
			return (
			<View style={styles.suratBox}>
				<Text style={styles.suratText}>{this.state.nama}</Text>
				<Text style={styles.suratText}>{this.state.asma}</Text>
			</View>
			);
		}
		return(
			<View style={styles.suratBox}>
				<Text style={styles.suratText}>Name</Text>
				<Text style={styles.suratText}>Asma</Text>
			</View>
			)
	}
};

const styles = StyleSheet.create({
	suratBox: {
		backgroundColor: '#1abc9c',
		padding: 20,
		margin: 15,
		marginBottom: 5,
		marginTop: 0.5,
		borderRadius: 5,
	},
	suratText: {
		color: '#fff',
	}
});