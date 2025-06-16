import { Card } from '@/app/ui/card'
import React from 'react'

const page = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 w-full h-full">
      {/* Panel kiri: Panel 1, 2, 3 */}
      <div className="xl:col-span-2 grid grid-rows-[auto_auto_1fr] gap-4 h-full">
        <div className="grid grid-cols-2 gap-4">
          <Card className="h-[150px] flex items-center justify-center">Panel 1</Card>
          <Card className="h-[150px] flex items-center justify-center">Panel 2</Card>
        </div>
        <Card className="row-span-2 flex items-center justify-center">Panel 3</Card>
      </div>

      {/* Panel kanan: Panel 4 */}
      <div className="h-full">
        <Card className="h-full flex items-center justify-center">Panel 4</Card>
      </div>
    </div>
  )
}

export default page