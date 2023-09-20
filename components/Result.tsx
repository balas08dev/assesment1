import React from 'react'
import { ResultProps } from '@/types'

const Result = ({id, name,status,species, type, gender, origin,location,image,episode, url, created } : ResultProps) => {
  return (
        
    <div className="max-w-sm rounded overflow-hidden shadow-lg place-self-center">

      <div className="w-full h-48">
        <img className="w-full h-full object-cover" src={image} alt={name} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
      </div>
      
     
    </div>

  )
}

export default Result