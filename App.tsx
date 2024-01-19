import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

const App = ()=>{
  const [show,setShow] = useState(true);
  return(
    <View> 
      <Text style={{backgroundColor:'cyan',color:'purple',textAlign:'center',fontSize:23}}>!! UseEffect for Unmount Life Cycle !!</Text>
      <Button title='Toggle()' onPress={()=>setShow(!show)}/>
      {
        show ? <Student/> : null
      }
      
    </View>
  )
}
const Student = ()=>{
 let timer =  setInterval(()=>{
    console.warn("Timer Called");
    
  },2000);
  useEffect(()=>{

    return()=>clearInterval(timer);
  })
  return(
   
    <View>
      <Text style={{backgroundColor:'black',color:'orange',textAlign:'center',fontSize:23}}>
        Student
      </Text>

    </View>
  )
}
export default App;
