import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"; // store users into our applications state
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubcribeFromAuth = null; // allows us to close subscription

  componentDidMount() {
    // we want to be aware of when a user signs in or out using Google
    // Our app is listening to authentication state changes on the firebase backend
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      }
      // if user logs out set currentUser to nulll
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth(); // closes subscripiton to prevent js data leaks
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
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

export default App;
