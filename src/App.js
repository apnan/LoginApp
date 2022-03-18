import React, { useState } from 'react';
//use state:for capture state.ex:when we give email,password in app then it keep value
import LoginPage from './components/LoginPage';
import RegisterForm from './components/Register';

function App() {

  const [currentPage, setCurrentPage] = useState({ value: "register" })
  const [user, setUser] = useState({ name: "", email: "" });
  //4.that funtion catch loging inf .so that we save database and same reg page
  const Login = details => {
    //4.get data
    console.log(details);
    setUser({
      email: details.email
    });
  }

  const Register = details => {
    //data save
 
    console.log(details);
    setUser({
      email: details.email
    });
  }

//3.get currentpage value from manu method.pass 2 method 1 is loging and 2 menu.when we pass that  then get  return value in login page.
  const Menu = currentmenu => {
    setCurrentPage({
      value: currentmenu.value
    });    
  }
  const Logout = () => {
    console.log("Logout");
    setUser({ email: "", password: "" })
  }

  return (
    <div className="App">
      {//2.user.email emty tn show that loging and reg page
        (user.email == "") ? (
          (//1.if currentpage=login then show login
            currentPage.value == "login") ? <LoginPage Login={Login} Menu={Menu} /> : (currentPage.value == "register") ? <RegisterForm Register={Register} Menu={Menu} /> : null
        ) : (
          //when log in then loging page and logout 
          <div className="welcome">
            <h2>Welcome To the Loging Page</h2>
            <button onClick={Logout}>Logout</button>
          </div>)
      }

    </div>
  );
}

export default App;
