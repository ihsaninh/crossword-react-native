import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";

class index extends Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: 50, alignItems: "center" }}>
        <Button
          title="OPEN BOTTOM SHEET"
          onPress={() => {
            this.RBSheet.open();
          }}
        />
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={320}
          duration={250}
          customStyles={{
            container: {
             borderTopLeftRadius: 20,
             borderTopRightRadius: 20,
            }
          }}
        >
          <View style={{marginLeft: 10, marginTop: 10}}>
            <Text style={{fontSize: 16, color: 'salmon', fontStyle: 'italic', fontWeight: '500', paddingBottom: 10}}>Soal Mendatar</Text>
              <Text style={{fontSize: 16, paddingBottom: 5}}>1. Alat Untuk memotong kuku</Text>
              <Text style={{fontSize: 16, paddingBottom: 5}}>3. Ibukota Indonesia</Text>
              <Text style={{fontSize: 16, paddingBottom: 5}}>5. Alat pernapasan ikan</Text>
              <Text style={{fontSize: 16, paddingBottom: 5}}>7. Klub Sepakbola asal Bandung</Text>
              <Text style={{fontSize: 16, paddingBottom: 5}}>10. Makanan dari Bogor</Text>

            <Text style={{fontSize: 16, color: 'salmon', fontStyle: 'italic', fontWeight: '500', paddingTop: 10, paddingBottom: 10}}>Soal Menurun</Text>
              <Text style={{fontSize: 16, paddingBottom: 5}}>2. Kata tanya untuk menanyakan nama </Text>
              <Text style={{fontSize: 16, paddingBottom: 5}}>4. Yang mendapatkan julukan Kota Hujan</Text>
              <Text style={{fontSize: 16, paddingBottom: 5}}>6. Tempat Bootcamp di Bintaro</Text>
              <Text style={{fontSize: 16, paddingBottom: 5}}>8. Hewan Berkaki Empat</Text>
              <Text style={{fontSize: 16, paddingBottom: 5}}>9. Makanan khas dari Brebes</Text>
          </View>
        </RBSheet>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default index;