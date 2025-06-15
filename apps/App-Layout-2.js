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
              <Text>Button Row</Text>
            </View>
            <View style={styles.buttonRow}>
              <Text>Button Row</Text>
            </View>
            <View style={styles.buttonRow}>
              <Text>Button Row</Text>
            </View>
            <View style={styles.buttonRow}>
              <Text>Button Row</Text>
            </View>
            <View style={styles.buttonRow}>
              <Text>Button Row</Text>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#00ffff',
    borderWidth: 10
  }
});
