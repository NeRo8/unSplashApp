import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const IconImage = ({ pictures }) => (
  <View style={styles.container}>
    <Image
      resizeMode='cover'
      source={{ uri: pictures.item.urls.small }}
      style={styles.image}
    />
  </View>
);

IconImage.propTypes = {
  pictures: PropTypes.object.isRequired
};

export default IconImage;
