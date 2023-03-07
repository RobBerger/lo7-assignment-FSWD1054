import React, { useContext } from 'react';
import UserContext from './UserContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Welcome from './Welcome';
import SignInForm from './SignInForm';
import user from './user-data';
import DisplayName from './DisplayName';

function App() {

  function addUser(credentials) {
    user.push(credentials);
  }

  return (
    <UserContext.Provider value={{ user: user, addUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Welcome />} />
            <Route path="sign-in" element={<SignInForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
