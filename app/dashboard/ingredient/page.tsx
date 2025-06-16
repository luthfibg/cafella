import React from 'react'
import { Card } from '@/app/ui/card'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="flex gap-4 h-full w-full">
      <Card className='flex-3/4 flex items-center justify-center h-full'>Panel 1</Card>
      <Card className='flex-1/4 flex items-center justify-center h-full'>Panel 2</Card>
    </div>
  )
}

export default page