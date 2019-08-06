/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import styles from './styles';

class IconImage extends React.Component {
  render() {
    const { pictures } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Detail', { item: pictures });
          }}
        >
          <Image
            resizeMode='cover'
            source={{ uri: pictures.urls.small }}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

IconImage.propTypes = {
  pictures: PropTypes.object.isRequired
};

export default withNavigation(IconImage);
