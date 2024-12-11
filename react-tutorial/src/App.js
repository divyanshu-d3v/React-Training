import React, { useCallback, useState, useRef } from 'react';
import './App.css';
import Hooks from './components/Hooks';
import LifeCycleMethod from './components/LifeCycleMethods';
import ChildComp from './components/ChildComp';
import { ThemeProvider } from './components/ContextProvider';
import UseMemoHook from './components/UseMemoHook';
import UseCallbackHook from './components/UseCallbackHook';
import ForwardRefChild from './components/ForwardRefChild';


const ChildComponent = React.memo(({ handleClick }) => {
  console.log('Child re-rendered');
  return <button onClick={handleClick}>Click me</button>;
});

function App() {
  const [count, setCount] = useState(0);
  const myRef = useRef(null);

  //Callback function would only be re-defined when count changes
  const increment = useCallback(() => {
    setCount(count + 1)
  }, []);

  // const increment = () => {
  //   setCount(prev => prev + 1)
  // }

  function handleClick() {
    myRef.current.focus();
  }

  function handleFocus() {
    myRef.current.focusTheInput();
  }
  function handleClear() {
    myRef.current.clearInput();
  }

  return (
    <ThemeProvider>
      <div className="App-header">
        <h2>Learning Life Cycle Methods</h2>
        {/* <LifeCycleMethod /> */}
        {/* <Hooks />
        <ChildComp />
        <UseMemoHook /> */}
        {/* <ChildComponent handleClick={increment} num={count} /> */}
        <ForwardRefChild label={"My input"} ref={myRef} />
        <button onClick={handleFocus}>Focus Input</button>
        <button onClick={handleClear}>Clear Input</button>
        <button type="button" onClick={handleClick}>
          Edit
        </button>
      </div>
    </ThemeProvider>
  );
}

export default App;
