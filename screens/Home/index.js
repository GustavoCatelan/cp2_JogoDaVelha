import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { getAuth, signOut } from "firebase/auth";

const HomeScreen = ({ navigation }) => {
  const auth = getAuth();

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Jogo da Veia
        </Text>
        <Image source={'assets/home.png'} style={styles.image} />
        <Button style={styles.btnGroup}
          title="Play"
          onPress={() => navigation.navigate('Game')}
        />
        <Button style={styles.btnGroup}
          title="Configuração"
          onPress={() => navigation.navigate('Profile')}
        />
        <Button style={styles.btnGroup}
        title="Sair"
        onPress={() => signOut(auth)}
      />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
      justifyContent: 'space-around',
      backgroundColor: '#eee',
      alignItems: 'center',
      flex: 1,
  },
  title: {
      fontWeight: 'bold',
      fontSize: '50px',
      color: '#842'
  },
  image: {
    width: '80%',
    aspectRatio: 1
  },
  btnGroup: {
    gap: '20px',
    marginBottom: '30px',
    width: '50%'
  },
})

export default HomeScreen;