import React from 'react'
import HelloWorld from './components/HelloWorld'
import CounterApp from './components/CounterApp'
import DeepDiveIntoJSX from './components/DeepDiveIntoJSX'

const App = () => {
  return (
    <div className='flex justify-center flex-wrap px-5 py-4'>
    <HelloWorld />
    <CounterApp />
    <DeepDiveIntoJSX />
    </div>
  )
}

export default App