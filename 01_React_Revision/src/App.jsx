import React from 'react'
import HelloWorld from './components/HelloWorld'
import CounterApp from './components/CounterApp'
import DeepDiveIntoJSX from './components/DeepDiveIntoJSX'
import PropsTesting from './components/PropsTesting'
import CombinedLiftAndUnLiftState from './components/LiftingstateUp/CombinedLiftAndUnLiftState'

const App = () => {

  const getDataBack = (data) => console.log(data);

  return (
    <div className='flex justify-center flex-wrap px-5 py-4'>
    <HelloWorld />
    <CounterApp />
    <DeepDiveIntoJSX />
    <PropsTesting name={"Govind"} role={"Developer"} isOnline={true} />
    <PropsTesting name={"Ajay"} role={"Tester"} isOnline={false} />
    <PropsTesting getDataBack={getDataBack}/>
    <CombinedLiftAndUnLiftState />
    </div>
  )
}

export default App