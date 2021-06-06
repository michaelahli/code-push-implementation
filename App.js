import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, Image, Button} from 'react-native';
import CodePush from 'react-native-code-push';


const App = ()=>{
  const [data,setData] = useState({
    display:'none',
  });

  useEffect(()=>{    
    CodePush.sync({
      installMode: CodePush.InstallMode.IMMEDIATE
    },
    syncWithCodePush,
    null)
  },[]);

  const syncWithCodePush = (status)=>{
    console.log(status)
  }

  const onClick = ()=>{
    if (data.display == 'none'){
      setData({
        ...data,
        display: 'flex',
      })
    } else{
      setData({
        ...data,
        display: 'none',
      })
    }
  }

  return(
    <SafeAreaView
    style={{
      flex:1,
      display: 'flex',
      paddingHorizontal:'20%',
      marginTop:"30%"
    }}
    >
      <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        width:"100%",
      }}
      >
        <Image 
        source={require('./src/asset/img/logo.png')}
        style={{
          width:"100%",
          resizeMode:'contain',
        }}
        />
      </View>
      <Text
        style={{
          fontSize:20,
          fontWeight:"bold",
          textAlign:'left',
          marginVertical:20
        }}
        >
          Code Push Implementation
        </Text>
        <Text>
          created by Michael Ahli to do experiment on implementing code push
        </Text>
      <View
      style={{
        width:"100%",
        display: 'flex',
        alignItems:'flex-end',
      }}
      >
        <Image 
        source={require('./src/asset/img/ttd.png')} 
        style={{
          width:"25%",
          resizeMode:'contain',
        }}
        />
        <Text
        style={{
          marginBottom:30,
          marginTop:-30
        }}
        >
          Michael Ahli
        </Text>
      </View>
      <Button
      title="Click Me"
      onPress={() =>{
        onClick();
      }}
      />

      <View
      style={{
        width:"100%",
        display: data.display,
        alignItems:'center',
        marginVertical:30,
        backgroundColor:"black",
        paddingVertical:30,
      }}
      >
        <Text
        style={{
          fontSize:20,
          fontWeight:"bold",
          color:"white"
        }}
        >
          UPDATE ME :)
        </Text>
        <Text
        style={{
          color:"white",
          textAlign:"center",
          paddingVertical:20,
        }}
        >
          You can change background color, text style, etc
        </Text>
      </View>
    </SafeAreaView>
  )
}

const CODE_PUSH_OPTIONS = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START
};

export default CodePush(CODE_PUSH_OPTIONS)(App);