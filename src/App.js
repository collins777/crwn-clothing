import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"; // store users into our applications state
import { setCurrentUser } from "./redux/user/user.actions";
import "./App.css";

class App extends React.Component {
  unsubcribeFromAuth = null; // allows us to close subscription

  componentDidMount() {
    const { setCurrentUser } = this.props;
    // we want to be aware of when a user signs in or out using Google
    // Our app is listening to authentication state changes on the firebase backend
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      // if user logs out set currentUser to nulll
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth(); // closes subscripiton to prevent js data leaks
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          {/* // Switch: the moment a route is found, it will only render that route / without exact, as long as the path matches then the component will
          render */}
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

// returns user
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) // a way for redux to know that it will be passed an action object
});

export default connect(null, mapDispatchToProps)(App);
