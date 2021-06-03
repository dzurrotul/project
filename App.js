import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
      <Image
      style={styles.img}
      source={require('./src/gambar/tenis.jpg')}/>
      <TouchableOpacity
      style={styles.button}>
        <Image
        style={styles.icon}
        source={require('./src/gambar/search.png')} />
        <TextInput
        placeholder='Search'
        style={styles.text1} >
        </TextInput>
      </TouchableOpacity>
      <Text style={styles.text2}>
        Popular places</Text>
      <View style={styles.container}>
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
          key: 'Zenith Tennis Center',
          harga: '$15 per hour',
          src:require('./src/gambar/a.png')
        },
        {
          key: 'Lacoste Club',
          harga: '$25 per hour',
          src:require('./src/gambar/b.png')
        },
        {
          key: 'Hatch End',
          harga: '$20 per hour',
          src:require('./src/gambar/c.png')
        },
      ]}/>
      <View>
        <Image
        style={styles.img3}
        source={require('./src/gambar/d.png')}/>
      </View>
    </View>
    </View>
  )
    }
export default App

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    flex:1,
  },
  img:{
    position:'absolute',
    height:250,
    width:360,
  },
  button:{
    marginTop:50,
    backgroundColor:'white',
    height:60,
    width:295,
    borderRadius:10,
    marginTop:220,
    marginLeft:30,
    backgroundColor:'white',
    shadowRadius:4.65,
    shadowColor:'#000',
    shadowOpacity:0.29,
    shadowOffset:{
      width:0,
      height:3,
    },
    elevation:7,
  },
  text1:{
    marginLeft:50,
    marginTop:5,
    color:'black'
  },
  icon:{
    position: 'absolute',
    marginLeft:15,
    marginTop:18,
  },
  text2:{
    marginLeft:35,
    marginTop:23,
    fontSize: 35,
    color:'black',
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
  img3:{
    marginLeft:270,
    marginBottom:20,
    width:50,
    height:50
  },
  img1:{
    marginLeft:40,
    resizeMode:'cover',
    marginTop:30,
    position:'absolute',
    width:50,
    height:50,
  }
})
