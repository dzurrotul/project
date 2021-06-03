import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'

const layar2 = () => {
    return (
      <View style={styles.container}>
        <Image
        style={styles.img}
        source={require('./src/gambar/bi.png')}/>
        <Image
        style={styles.img2}
        source={require('./src/gambar/a.png')}/>
        <Text style={styles.text1}>
            Zenith Tennis</Text>
        <Text style={styles.text2}>
            Center</Text>
        <Image
        style={styles.icon}
        source={require('./src/gambar/star.png')} />
        <Text style={styles.text3}>
            4.8
        </Text>
        <TouchableOpacity
             style={styles.button}>
        <Text style={styles.text4}>
        Details</Text>
        <FlatList
        renderItem={({item}) =>
        <View>
          <Image source={item.src}style={styles.img1}/>
          <Text style={styles.item}>{item.key}</Text>
          <Text style={styles.harga}>{item.harga}</Text>
        </View>
      }
        data={[
          {
            key: 'Thursday, June 10',
            harga: '9:30-11:00 PM',
            src:require('./src/gambar/calender.png')
          },
          {
            key: 'Washington, DC',
            harga: '129 0akway Lane',
            src:require('./src/gambar/location.png')
          },
        ]}/>
        </TouchableOpacity>
        </View>
    )
}
export default layar2

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F1A737',
        flex:1
    },
    img:{
        marginTop:30,
        marginLeft:280,
        height:30,
        width:30,
      },
    img2:{
        marginTop:30,
        marginLeft:30,
        height:60,
        width:60,
    },
    text1:{
        marginTop: -55,
        marginLeft:100,
        fontSize: 20,
        color:'white',
    },
    text2:{
        marginLeft:100,
        fontSize: 20,
        color:'white',
    },
    icon:{
        position:'absolute',
        marginTop:150,
        marginLeft:100,
        height:15,
        width:15,
    },
    text3:{
        marginLeft:120,
        marginTop:2,
        fontSize: 10,
        color:'white',
    },
    button:{
        marginTop:30,
        backgroundColor:'white',
        height:600,
        width:360,
        borderRadius:30,
        backgroundColor:'white',
      },
      text4:{
        marginTop: 40,
        marginLeft:30,
        fontSize: 25,
        color:'black',
      },
      img1:{
        marginLeft:40,
        resizeMode:'cover',
        marginTop:30,
        position:'absolute',
        width:50,
        height:50,
      },
      item:{
        marginLeft:110,
        marginTop:35,
        fontSize:20,
      },
      harga:{
        marginLeft:110,
        color:'grey',
      },
})
