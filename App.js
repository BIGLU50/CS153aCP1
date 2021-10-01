import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageBackground,StyleSheet, Text, View, Button,SafeAreaView,TextInput} from 'react-native';

const Stack = createNativeStackNavigator();

const image = { uri: "https://ak.picdn.net/shutterstock/videos/20845297/thumb/1.jpg" };

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome to Stork Watcher'}}/>
      <Stack.Screen name="Watchlist" component={WatchlistScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  const [text, onChangeText] = React.useState("Enter Value");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:8, flexDirection:'column'}}>
        <View style={{flex:10, backgroundColor:'lightgreen',flexDirection:'row'}}>
          <View style={{flex:4}}>
            <Text style={{fontSize:32,fontFamily:'Courier',marginVertical:8,marginHorizontal:16}}>
              Watchlist Snapshot
            </Text>
            <Text style={{fontSize:18,fontFamily:'Calibri',color:'gray',marginHorizontal:16}}>
              Watched tickers go here
            </Text>
          </View>
          <View style={{flex:4}}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Button
              color="#0096FF"
              title="Watchlist"
              onPress={() =>
                navigation.navigate('Watchlist')
              }
            />
            <Button
              color="#0096FF"
              title="Settings"
              onPress={() =>
                navigation.navigate('Settings')
              }
            />
            <Button
              color="#0096FF"
              title="About"
              onPress={() =>
                navigation.navigate('About')
              }
            />
            </ImageBackground>
          </View>
        </View>
        <View style={{flex:5,backgroundColor:'ivory',flexDirection:'row'}}>
            <View style={{flex:6}}>
              <Text style={{fontSize:32,fontFamily:'Courier',marginVertical:8,marginHorizontal:16}}>
              Market News
              </Text>
              <Text style={{fontSize:18,fontFamily:'Calibri',color:'gray',marginHorizontal:16}}>
              WSJ, Bloomberg, Mktwatch news
              </Text>
            </View>
            <View style={{flex:3, backgroundColor:'gray'}}>
              <Text style={{fontSize:32,fontFamily:'Courier',marginVertical:8,marginHorizontal:16}}>
              Index Values
              </Text>
              <Text style={{fontSize:18,marginHorizontal:16}}>
                SPX^500 <TextInput style={styles.input} onChangeText={onChangeText} value={text}/> {"\n"}
                NDAQ    <TextInput style={styles.input} onChangeText={onChangeText} value={text}/> {"\n"}
                DOWJ    <TextInput style={styles.input} onChangeText={onChangeText} value={text}/> {"\n"}
                RUT     <TextInput style={styles.input} onChangeText={onChangeText} value={text}/> {"\n"}
                FVX     <TextInput style={styles.input} onChangeText={onChangeText} value={text}/> {"\n"}
                //haven't figured out how to implement multiple text inputs ;p
              </Text>

            </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

function WatchlistScreen() {
  return (
    <View style={styles.title}>
      <Text>Watchlist Screen</Text>
    </View>
  )
};

function SettingsScreen() {
  return(
    <View style={styles.title}>
      <Text>Settings Screen</Text>
    </View>
  )
};

function AboutScreen() {
  return (
    <View style={styles.title}>
      <Text>About Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    flexDirection:'row',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 6,
    backgroundColor: "sky blue",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  input: {
    height: 20,
    margin: 0,
    borderWidth: 1,
    padding: 10,
  },
  fixToText: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default App;
