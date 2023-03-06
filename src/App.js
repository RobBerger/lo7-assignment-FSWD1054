import React, { useContext } from 'react';
import UserContext from './UserContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Welcome from './Welcome';
import SignInForm from './SignInForm';

function App() {

  let user = useContext(UserContext);
  console.log(user);

  return (
    <UserContext.Provider value={user}>
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
