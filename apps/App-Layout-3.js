import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  
  const SafeAreaViewWraper = Platform.OS === 'web' ? View : SafeAreaView;

  return (
    <SafeAreaViewWraper style={{ flex: 1 }}>
      <View style={styles.container}>
          <View style={styles.displayArea}>
            <Text>Display Area</Text>
          </View>
          <View style={styles.buttonArea}>
            <View style={styles.buttonRow}>
              <View style={styles.button}>
                <Text>C</Text>  
              </View>
              <View style={styles.button}>
                <Text></Text>  
              </View>
              <View style={styles.button}>
                <Text>⌫</Text>  
              </View>
              <View style={styles.button}>
                <Text>/</Text>  
              </View>
            </View>
            <View style={styles.buttonRow}>
              <View style={styles.button}>
                <Text>7</Text>  
              </View>
              <View style={styles.button}>
                <Text>8</Text>  
              </View>
              <View style={styles.button}>
                <Text>9</Text>  
              </View>
              <View style={styles.button}>
                <Text>*</Text>  
              </View>
            </View>
            <View style={styles.buttonRow}>
              <View style={styles.button}>
                <Text>4</Text>  
              </View>
              <View style={styles.button}>
                <Text>5</Text>  
              </View>
              <View style={styles.button}>
                <Text>6</Text>  
              </View>
              <View style={styles.button}>
                <Text>-</Text>  
              </View>
            </View>
            <View style={styles.buttonRow}>
              <View style={styles.button}>
                <Text>1</Text>  
              </View>
              <View style={styles.button}>
                <Text>2</Text>  
              </View>
              <View style={styles.button}>
                <Text>3</Text>  
              </View>
              <View style={styles.button}>
                <Text>+</Text>  
              </View>
            </View>
            <View style={styles.buttonRow}>
              <View style={styles.button}>
                <Text></Text>  
              </View>
              <View style={styles.button}>
                <Text>0</Text>  
              </View>
              <View style={styles.button}>
                <Text>.</Text>  
              </View>
              <View style={styles.button}>
                <Text>=</Text>  
              </View>
            </View>            
          </View>
          <StatusBar style="auto" />
      </View>
    </SafeAreaViewWraper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    borderColor: '#0000ff',
    borderWidth: 10
  },
  displayArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#00ff00',
    borderWidth: 10
  },
  buttonArea: {
    flex: 4,
    alignItems: 'stretch',
    justifyContent: 'center',
    borderColor: '#00ff00',
    borderWidth: 10
  },
  buttonRow: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    borderColor: '#00ffff',
    borderWidth: 10
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ffff00',
    borderWidth: 10
  }
});
