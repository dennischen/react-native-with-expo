import { useCallback, useState } from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

function isNumberText(text) {
  const n = parseFloat(text)
  return isFinite(n)
}

export default function App() {

  const [previousResultText, setPreviousResultText] = useState('')
  const [currentCalculationText, setCurrentCalculation] = useState('')

  const doClear = useCallback(() => {
    setPreviousResultText('')
    setCurrentCalculation('')
  },[])

  const doBackspace = useCallback(() => {
    if (currentCalculationText.length > 0) {
      setCurrentCalculation(currentCalculationText.substring(0, currentCalculationText.length - 1))
    }else if(previousResultText.length > 0) {
      setCurrentCalculation(previousResultText.substring(0, previousResultText.length - 1))
    }
  },[currentCalculationText, previousResultText])

  const doCalculate = useCallback(() => {
    if (currentCalculationText) {
      try {
        const result = eval(currentCalculationText)
        setCurrentCalculation('')
        setPreviousResultText(`${result}`)
      } catch (err) {
        setCurrentCalculation(`${NaN}`)
      }
    }
  },[currentCalculationText])

  const doInputChar = useCallback((char) => {
    if (!currentCalculationText && isNumberText(previousResultText) && ['+', '-', '*', '/'].includes(char)) {
      setCurrentCalculation(previousResultText + char)
    } else if(isNumberText(currentCalculationText)){
      setCurrentCalculation(currentCalculationText + char)
    } else {
      setCurrentCalculation(char)
    }
  }, [currentCalculationText, previousResultText])


  const SafeAreaViewWraper = Platform.OS === 'web' ? View : SafeAreaView

  return (
    <SafeAreaViewWraper style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.displayArea}>
          <Text style={styles.previousResultText}>{previousResultText}</Text>
          <Text style={styles.currentInputText}>{currentCalculationText}</Text>
        </View>
        <View style={styles.buttonArea}>
          <View style={styles.buttonRow}>
            <View style={styles.buttonBlock}>
              <TouchableOpacity style={styles.button} onPress={doClear}>
                <Text>C</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonBlock}>
              <Text></Text>
            </View>
            <View style={styles.buttonBlock}>
              <TouchableOpacity style={styles.button} onPress={doBackspace}>
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
              <TouchableOpacity style={styles.button} onPress={doCalculate}>
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
    justifyContent: 'center'
  },
  displayArea: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    padding: 8,
    backgroundColor: '#aaa'
  },
  previousResultText: {
    fontSize: 32
  },
  currentInputText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  buttonArea: {
    flex: 4,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#eee'
  },
  buttonRow: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  buttonBlock: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
