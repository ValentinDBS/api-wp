"use client"

import React from 'react'
import { useParams } from 'next/navigation'

const AgentDetail = ( {params}) => {
    const paramsTest = useParams();

  return (
    <div>
        <h1>Agent Detail {params.uuid} </h1>
    </div>
  )
}

export default AgentDetail