import { useEffect, useState } from 'react'
import './App.css'
import LabReport from './component/labReport/LabReport'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Layout } from './component/layout/layout'
import Forms from './pages/Forms/Forms'
import CoverPage from './pages/coverpage/CoverPage'
import BodyChart from './component/bodyChart/bodyChart'
import SmartInterpreter from './component/smartInterpreter/SmartInterpreter'
import Welcome from './pages/welcome/Welcome'

import VisuallyAided from "./component/visuallyAided/Visually.jsx";
import Loading from './component/loading/Loading.jsx'
import Home from './pages/home/home.jsx'
import Error from './component/error/Error.jsx'

  const App = () => {

    if(!window.localStorage.getItem('isLoggedIn')) {
      window.localStorage.setItem('isLoggedIn', true);
    }
    const login = window.localStorage.getItem('isLoggedIn');

    const router = createBrowserRouter(
      createRoutesFromElements(
        
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Welcome/>} />
          <Route path="/coverpage" element={<CoverPage />} />
          <Route path="/labreport" element={<LabReport />} />
          <Route path="/bodyChart" element={<BodyChart />} />
          <Route path="/interpreter" element={<SmartInterpreter />} />
          <Route path="/visualaid" element={<VisuallyAided />} />
        </Route>
      )
      );

      if(login === 'true') {
        return(
          <div className="App">
            <Home/>
         </div>)
      }

      return <RouterProvider router = {router}/>;
  }

export default App