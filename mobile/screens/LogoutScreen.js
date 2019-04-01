//nothing yet
class LogoutScreen extends React.Component {
  static navigationOptions = {
    title: 'Logout',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Logout"
        onPress={() => navigate('Home')}
      />
    );
  }
}
