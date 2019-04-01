//nothing yet
import React from 'react';
import {DataApi} from '../actions/dataActions';
class OrderScreen extends React.Component {
  static navigationOptions = {
    title: 'Order',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Order"
        onPress={() => navigate('Home')}
      />
    );
  }
}
