import React from 'react';
import { Leftsidebar } from '../left-panel/left.component';
import { Middlesection } from '../middle-panel/middle.component';
import { Rightsection } from '../right-panel/rightsection.component';


export const Dashboard = () => {
  return (
    <div className='container-fluid mt-4'>
        <div className='row'>
            <div className='col-12 col-md-3'>
                <div className='shadow rounded'>
                <Leftsidebar />
                </div>
                
            </div>
            <div className='col-12 col-md-6'>
                <div className='shadow p-3 rounded'>
                <Middlesection age='25' text='This is Middle section' apple={[{apple:500},{apple:400},{apple:600}]}/>
                </div>
            
            </div>
            <div className='col-12'>
              <div className='shadow p-3 rounded'>
              <Rightsection/>
              </div>
                
            </div>
        </div>
    </div>
    
  )
}
