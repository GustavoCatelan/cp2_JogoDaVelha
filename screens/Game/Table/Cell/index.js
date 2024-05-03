import { useState } from 'react';
import { View, Image, Pressable, Text, StyleSheet } from 'react-native';

const Cell = ({ id, cellState = id % 3, onClick }) => {
  const [showFeedback, setShowFeedback] = useState(false)
  const imgSrc = `assets/pieces/peca${cellState}.png`
    
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', width: '33.3%', height: '33.3%' }}>
        <Pressable 
          onLongPress={() => setShowFeedback(false)}
          onPressIn={() => setShowFeedback(true)} 
          onPress={() => onClick(id)} 
          onPressOut={() => setShowFeedback(false)}
          style={[styles.pressable, {backgroundColor: showFeedback ? '#A9A9A9' : '#fff'}]}
          disabled={cellState !== 0}
          delayLongPress={2000}
        >
              {
                cellState !== 0 && <Image source={imgSrc} style={styles.pieceImg} />
              }
        </Pressable>
      </View>
    );
  }

const styles = StyleSheet.create({
  pieceImg: {
    width: '100%',
    aspectRatio: 1
  },
  pressable: {
    width: '100%',
    height: '100%',
    padding: 10,
    borderWidth: 3,
    borderColor: '#222'
  }
})

export default Cell;