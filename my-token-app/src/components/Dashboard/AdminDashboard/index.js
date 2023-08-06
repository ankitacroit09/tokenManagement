import React from 'react'
import Token from '../../Controls/Token/index'
const AdminDashboard = () => {

  return (
    <>
        <div className="flex justify-between bg-slate-100 py-5 px-6 border-blue-200 border-b">
          <Token tokenNumber={1} text={"One coffee with "} />
          <Token tokenNumber={2}  status="ready" text={"One coffee witt milk  "} />
          <Token tokenNumber={3} text={"One coffee with "} />
          <Token tokenNumber={4} text={"One coffee with "} />
        </div>
    </>
  )
}

export default AdminDashboard;
