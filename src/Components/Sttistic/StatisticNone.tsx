import React from 'react'

type Props = {}

const StatisticNone = (props: Props) => {
  return (
      <div>
           <h2>Progress</h2>
          <p>Here you will see when and how much you read.
              To record, click on the red button above.</p>
          <div className='round'>
            🌟
          </div>
    </div>
  )
}

export default StatisticNone