import React from 'react'

const Progress = ({barProgress}) => {
    return (
        <div className="progress">
        <span className="percent">{barProgress}%</span>
        <div className="bar" style={{ width: `${barProgress}%` }}></div>
      </div>
    )
}

export default Progress
