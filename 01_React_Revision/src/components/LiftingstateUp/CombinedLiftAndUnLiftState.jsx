import React, { useState } from 'react'
import ComponentA from './WithoutLiftingStateUp/ComponentA'
import ComponentALift from './WithLiftingStateUp/ComponentA'
import ComponentB from './WithoutLiftingStateUp/ComponentB'
import ComponentBLift from './WithLiftingStateUp/ComponentB'

const CombinedLiftAndUnLiftState = () => {
     const [count ,setCount] = useState(0);

  return (
    <div className=' w-full px-2 py-1 bg-gray-700'>
    <p>Without Lifting state Up</p>
    <ComponentA />
    <ComponentB />
    <br />
    <h3>With Lifting state up</h3>
    <ComponentALift count={count} setCount={setCount} />
    <ComponentBLift count={count} />
    </div>
  )
}

export default CombinedLiftAndUnLiftState