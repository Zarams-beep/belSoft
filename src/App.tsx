import LandingPage from "./view/LandingPage"
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:"/",
    element: <LandingPage/>,
  },])
const App =()=>{
  
  return(
    <>
       <RouterProvider router={router}/>
    </>
  )
}
export default App