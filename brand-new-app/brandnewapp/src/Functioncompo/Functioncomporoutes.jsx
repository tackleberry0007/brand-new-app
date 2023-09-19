import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Functioncompomenu from './Functioncompomenu';
import Functioncompointro from './Functioncompointro';
import Usestate from './Usestate';
import Usereducer from './UseReducer';
import Useref from './Useref';
import API from './API';
import APIchild from './APIchild';
import Crud from './Crud';


const Functioncomporoutes = () => {
    return ( 
        <>
        <Routes>

            <Route path='/' element={<Functioncompomenu />}>
            <Route path='Functioncompointro' element={<Functioncompointro />} />
            <Route path='Usestate' element={<Usestate />} />
            <Route path='Usereducer' element={<Usereducer />} />
            <Route path='Usereducer' element={<Usereducer />} />
            <Route path='Useref' element={<Useref />} />
            <Route path='API' element={<API />} />
            <Route path='APIchild' element={<APIchild />} />
            <Route path='Crud' element={<Crud />} />



             
             



            </Route>

            
        </Routes>
          </>
     );
}
 
export default Functioncomporoutes;