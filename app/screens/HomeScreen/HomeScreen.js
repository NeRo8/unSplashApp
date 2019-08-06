import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, Button } from 'react-native';
import { connect } from 'react-redux';

import { itemsFetchData } from '../../actions/actions';

import style from './styles';

class HomeScreen extends Component {
  state = {};

  componentDidMount() {
    this.props.onLoadData();
  }

  render() {
    const { isLoading } = this.props;

    if (isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return <View />;
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
