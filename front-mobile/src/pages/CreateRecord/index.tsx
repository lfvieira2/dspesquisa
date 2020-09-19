import React from 'react';
import { StyleSheet, Text} from 'react-native';
import Header from '../../components/Header';

const CreateRecord = () => {
    return (
        <>
            <Header />
            <Text style={styles.text}>Hello Record</Text>
        </>
    );
}

const styles = StyleSheet.create({
    text: {
      color: '#fff',
      fontSize: 50,
      textAlign: 'center',
      marginTop: 10
    },
});

export default CreateRecord;