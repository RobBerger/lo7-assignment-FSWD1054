import React from 'react';
import UserContext from './UserContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
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
