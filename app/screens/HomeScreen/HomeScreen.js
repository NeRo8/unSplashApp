import React, { Component } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Text
} from 'react-native';
import { connect } from 'react-redux';

import IconImage from '../../components/IconImage';

import { itemsFetchData } from '../../actions/actions';

import styles from './styles';

class HomeScreen extends Component {
  state = {};

  componentDidMount() {
    this.props.onLoadData();
  }

  renderItemFlatList = item => <IconImage pictures={item} />;

  render() {
    const { isLoading } = this.props;

    if (isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.items}
          renderItem={({ item }) => this.renderItemFlatList(item)}
          keyExtractor={(item, index) => item.id}
          numColumns={2}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
  isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => {
  return {
    onLoadData: () => {
      dispatch(itemsFetchData());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
