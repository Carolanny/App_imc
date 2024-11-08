import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SectionListComponent, StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native';

export default function App() {
  const [peso,setPeso] = useState (0);
  const [altura,setAltura] = useState(0);
  const [imc,setImc] = useState(null);
  const calcularimc = () =>{
    var resultado = peso / (altura * altura)
    setImc(resultado);
  }
  /* */
  return (
    <View style={styles.container}>
      <Text>Aplicativo.Calculo.IMC</Text>
      <TextInput placeholder='Peso' keyboardType='numeric' 
      placeholder= "Peso"
      keyboardType= "numeric"
      value={peso}
      onChangeText={(peso)=>setPeso(peso)}
      />
      <TextInput placeholder='Altura' keyboardType='numeric' 
      placeholder= "Altura"
      keyboardType= "numeric"
      value={altura}
      onChangeText={(altura)=>setAltura(altura)}
      />
      {imc &&(
      <Text style={styles.titulo}>Imc: {imc}</Text>
      )}
      <Button title="Calcular"onPress={()=>{calcularimc()}}/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
  fontSize: 25,
  fontWeight: 'bold'
  }
});
