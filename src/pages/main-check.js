import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

const styles = {
    title: {
        marginBottom: 16,
        fontSize: 14,
      },
      palette: {
            background: '#2e7d32',
      },
    message:{
        marginLeft: 10,
        marginRight: 10
    },
    flex: {
        flexGrow: 1,
      },
};

class MainPage extends Component {
//   componentDidMount() {
//     const { user } = this.props;

//     if(user !== undefined) {
//       this.props.history.push('/dashboard');
//     }
//   }
  render() {
    return (
        <div>
        <AppBar position='static' style={styles.palette}> 
        <Toolbar>
            <Typography variant='title' color='inherit' style={styles.flex}>
                Stock-tracker v1    
            </Typography>
            <Button color="inherit">Login</Button>
        </Toolbar>
        </AppBar>
        <Card>
            <CardContent>
                    <Typography variant='title' color='inherit' style={styles.flex}>
                        Welcome to Stock-tracker add a watch on all of your stocks to get
                        an alert when your stock breaks out   
                    </Typography>
            </CardContent>
            <CardActions>
                <Typography>
                    Don't have an account?<Button color='primary'>Sign Up!</Button>
                </Typography>
                
            </CardActions>
        </Card>
        </div>
    );
  }
}

 const mapStateToProps = ({ auth }) => {
   return { user: auth.user };
 };

 export default connect(mapStateToProps, null)(MainPage);
//export default WelcomePage;