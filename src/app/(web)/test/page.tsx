import { getAllProjects } from '@/lib/apis'
import React from 'react'

export default async function test() {
  const data=await getAllProjects()
  console.log(data);
  
  return (
    <div>test</div>
  )
}
