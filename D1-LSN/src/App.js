import logo from './logo.svg'
import './App.css'
import Heading, { name, greetUser } from './components/Heading' // all the exports ASIDE from the default one must use {}

// App is our first React Component
// a React Component can be function that returns some JSX

// react components are independent, encapsulated

const App = function () {
  let studentName = 'Saidev'

  return (
    <div className="App">
      {/* all the classes are declared as classNames -> class === className */}
      <header className="App-header">
        <Heading />
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello! {studentName}</p>
        <p>
          Hello Strive! Edit <code>src/App.js</code> and save to reload.
        </p>
        <Heading />
      </header>
    </div>
  )
}

export default App

// PROPS
// STATE
