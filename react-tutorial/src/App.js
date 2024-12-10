import './App.css';
import Hooks from './components/Hooks';
import LifeCycleMethod from './components/LifeCycleMethods';
import ChildComp from './components/ChildComp';
import { ThemeProvider } from './components/ContextProvider';
import UseMemoHook from './components/UseMemoHook';
import UseCallbackHook from './components/UseCallbackHook';
import React, { useCallback, useState } from 'react';

const ChildComponent = React.memo(({ handleClick }) => {
  console.log('Child re-rendered');
  return <button onClick={handleClick}>Click me</button>;
});

function App() {
  const [count, setCount] = useState(0);

  //Callback function would only be re-defined when count changes
  const increment = useCallback(() => {
    setCount(count + 1)
  }, []);

  // const increment = () => {
  //   setCount(prev => prev + 1)
  // }

  return (
    <ThemeProvider>
      <div className="App-header">
        <h2>Learning Life Cycle Methods</h2>
        {/* <LifeCycleMethod /> */}
        {/* <Hooks />
        <ChildComp />
        <UseMemoHook /> */}
        <ChildComponent handleClick={increment} num={count} />
        <p>Count:{count}</p>
      </div>
    </ThemeProvider>
  );
}

export default App;
