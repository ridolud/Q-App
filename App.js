import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

import QrApi from './app/services/QrApi';
import SuratBox from './app/components/SuratBox';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      _data: null
    };
  }

  componentDidMount() {
    QrApi.build(this);
  }

  render() {
     let surats = () => {
      let SuratBoxs = [];
      let dataSurats = this.state._data;
      if(dataSurats != null){
        dataSurats.forEach( (val,key) =>{
          console.log(val);
          SuratBoxs.push(<SuratBox key={key} dataSurat={val}></SuratBox>);
        });
      }
      return SuratBoxs;
    }   
    return (
      <ScrollView style={styles.container}>
        { surats() }
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: '#fff',
  },
});
