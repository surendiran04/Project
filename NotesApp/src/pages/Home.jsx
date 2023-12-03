import React from 'react'
import TaskCard from '../components/Taskcard'
import Notecard from '../components/Notecard'

export default function Home() {
  return (
    <div className="container">
        <TaskCard/>
        <Notecard/>
    </div>
  )
}
