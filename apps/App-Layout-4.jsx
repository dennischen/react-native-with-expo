import { Platform, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  
  const SafeAreaViewWraper = Platform.OS === 'web' ? View : SafeAreaView;

  return (
    <SafeAreaViewWraper style={{ flex: 1 }}>
      <View style={styles.container}>
          <View style={styles.displayArea}>
            <Text style={styles.previousResultText}>Previsus Result</Text>
            <Text style={styles.currentInputText}>Current Input</Text>
          </View>
          <View style={styles.buttonArea}>
            <View style={styles.buttonRow}>
              <View style={styles.buttonBlock}>
                <Text>C</Text>  
              </View>
              <View style={styles.buttonBlock}>
                <Text></Text>  
              </View>
              <View style={styles.buttonBlock}>
                <Text>⌫</Text>  
              </View>
              <View style={styles.buttonBlock}>
                <Text>/</Text>  
              </View>
            </View>
            <View style={styles.buttonRow}>
              <View style={styles.buttonBlock}>
                <Text>7</Text>  
              </View>
              <View style={styles.buttonBlock}>
                <Text>8</Text>  
              </View>
              <View style={styles.buttonBlock}>
                <Text>9</Text>  
              </View>
              <View style={styles.buttonBlock}>
                <Text>*</Text>  
              </View>
            </View>
            <View style={styles.buttonRow}>
              <View style={styles.buttonBlock}>
                <Text>4</Text>  
              </View>
              <View style={styles.buttonBlock}>
                <Text>5</Text>  
              </View>
              <View style={styles.buttonBlock}>
                <Text>6</Text>  
              </View>
              <View style={styles.buttonBlock}>
                <Text>-</Text>  
              </View>
            </View>
            <View style={styles.buttonRow}>
              <View style={styles.buttonBlock}>
                <Text>1</Text>  
              </View>
              <View style={styles.buttonBlock}>
                <Text>2</Text>  
              </View>
              <View style={styles.buttonBlock}>
                <Text>3</Text>  
              </View>
              <View style={styles.buttonBlock}>
                <Text>+</Text>  
              </View>
            </View>
            <View style={styles.buttonRow}>
              <View style={styles.buttonBlock}>
                <Text></Text>  
              </View>
              <View style={styles.buttonBlock}>
                <Text>0</Text>  
              </View>
              <View style={styles.buttonBlock}>
                <Text>.</Text>  
              </View>
              <View style={styles.buttonBlock}>
                <Text>=</Text>  
              </View>
            </View>            
          </View>
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
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    padding: 8,
    borderColor: '#00ff00',
    borderWidth: 10
  },
  previousResultText: {
    fontSize: 16
  },
  currentInputText: {
    fontSize: 32,
    fontWeight: 'bold'
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
  buttonBlock: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ffff00',
    borderWidth: 10
  }
});
