import React from 'react'
import HelloWorld from './components/HelloWorld'
import CounterApp from './components/CounterApp'

const App = () => {
  return (
    <div className='flex justify-center flex-wrap px-5 py-4'>
    <HelloWorld />
    <CounterApp />
    </div>
  )
}

export default App