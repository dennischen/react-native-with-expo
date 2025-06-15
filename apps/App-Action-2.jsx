import { useCallback, useState } from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {

  const [previousInput, setPreviousInput] = useState('')
  const [currentInput, setCurrentInput] = useState('')
  const doInputChar = useCallback((char) => {
    setPreviousInput(currentInput)
    setCurrentInput(char)
  },[currentInput])

  const SafeAreaViewWraper = Platform.OS === 'web' ? View : SafeAreaView

  return (
    <SafeAreaViewWraper style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.displayArea}>
          <Text style={styles.previousResultText}>{previousInput}</Text>
          <Text style={styles.currentInputText}>{currentInput}</Text>
        </View>
        <View style={styles.buttonArea}>
          <View style={styles.buttonRow}>
            <View style={styles.buttonBlock}>
              <TouchableOpacity style={styles.button} onPress={() => doInputChar('C')}>
                <Text>C</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonBlock}>
              <Text></Text>
            </View>
            <View style={styles.buttonBlock}>
              <TouchableOpacity style={styles.button} onPress={() => doInputChar('⌫')}>
                <Text>⌫</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonBlock}>
              <TouchableOpacity style={styles.button} onPress={() => doInputChar('/')}>
                <Text>/</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.buttonBlock}>
              <TouchableOpacity style={styles.button} onPress={() => doInputChar('7')}>
                <Text>7</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonBlock}>
              <TouchableOpacity style={styles.button} onPress={() => doInputChar('8')}>
                <Text>8</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonBlock}>
              <TouchableOpacity style={styles.button} onPress={() => doInputChar('9')}>
                <Text>9</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonBlock}>
              <TouchableOpacity style={styles.button} onPress={() => doInputChar('*')}>
                <Text>*</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.buttonBlock}>
              <TouchableOpacity style={styles.button} onPress={() => doInputChar('4')}>
                <Text>4</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonBlock}>
              <TouchableOpacity style={styles.button} onPress={() => doInputChar('5')}>
                <Text>5</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonBlock}>
              <TouchableOpacity style={styles.button} onPress={() => doInputChar('6')}>
                <Text>6</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonBlock}>
              <TouchableOpacity style={styles.button} onPress={() => doInputChar('-')}>
                <Text>-</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.buttonBlock}>
              <TouchableOpacity style={styles.button} onPress={() => doInputChar('1')}>
                <Text>1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonBlock}>
              <TouchableOpacity style={styles.button} onPress={() => doInputChar('2')}>
                <Text>2</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonBlock}>
              <TouchableOpacity style={styles.button} onPress={() => doInputChar('3')}>
                <Text>3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonBlock}>
              <TouchableOpacity style={styles.button} onPress={() => doInputChar('+')}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.buttonBlock}>
              <Text></Text>
            </View>
            <View style={styles.buttonBlock}>
              <TouchableOpacity style={styles.button} onPress={() => doInputChar('0')}>
                <Text>0</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonBlock}>
              <TouchableOpacity style={styles.button} onPress={() => doInputChar('.')}>
                <Text>.</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonBlock}>
              <TouchableOpacity style={styles.button} onPress={() => doInputChar('=')}>
                <Text>=</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaViewWraper>
  )
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
    alignItems: 'stretch',
    justifyContent: 'center',
    borderColor: '#ffff00',
    borderWidth: 10
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff00ff'
  }
})
