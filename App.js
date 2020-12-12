import React, { useState } from 'react';
import { ShoppingList } from './components/ShoppingList/ShoppingList';
import { WelcomePage } from './components/WelcomePage/WelcomePage';

export default function App() {
  const [startApp, setStartApp] = useState(false);

    const isAppStarted = () => {
        setStartApp(true);
    }
  return (
    <>
      {startApp ? <ShoppingList /> : <WelcomePage isAppStarted={isAppStarted} />}
    </>
  );
}