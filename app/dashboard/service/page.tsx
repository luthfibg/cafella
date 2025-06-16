import { Card } from '@/app/ui/card'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="flex gap-4 h-full w-full">
      <Card className='flex items-center justify-center h-full'>SERVICE Panel</Card>
    </div>
  )
}

export default page