import './App.css';
import Hooks from './components/Hooks';
import LifeCycleMethod from './components/LifeCycleMethods';
import ChildComp from './components/ChildComp';
import { ThemeProvider } from './components/ContextProvider';

function App() {
  return (
    <ThemeProvider>
      <div className="App-header">
        <h2>Learning Life Cycle Methods</h2>
        {/* <LifeCycleMethod /> */}
        <Hooks />
        <ChildComp />
      </div>
    </ThemeProvider>
  );
}

export default App;
