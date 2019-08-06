import React, { Component } from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

class DetailScreen extends Component {
  render() {
    const pictures = this.props.navigation.getParam('item');
    return (
      <View style={styles.container}>
        <Image
          // Якщо буде активний параметр contain то фотку розтягне максимально, щоб вона влізла в екран
          resizeMode={'contain'}
          source={{ uri: pictures.urls.full }}
          style={styles.image}
        />
      </View>
    );
  }
}

export default DetailScreen;
