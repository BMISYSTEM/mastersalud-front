import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import usePanel from "./Hooks/usePanel";
import { User } from './interface/userInterface';
export const PanelLayout = () => {
  const {data} = usePanel({middleware:'auth',url:'/panel/home'})
  const user:User = data?.data
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar rol={user?.rol}/>
      <div className="flex-1">
        <Header />
        <main className=" h-[90%]  gap-6 w-full overflow-auto ">
          <Outlet/>
        </main>
      </div>
      <ToastContainer/>
    </div>
  );
};
interface propsSidebar{
  rol:number
}
const Sidebar = ({rol = 0}:propsSidebar) => {
  return (
    <aside className="w-20 bg-blue-700 min-h-screen flex flex-col items-center py-6">
      <div className="space-y-6 w-20 p-2 flex flex-col ">
        <Link to={'/panel/home'} className="bg-blue-500 rounded-lg text-white  p-2 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </Link >
        {/* ecomerce */}
        {rol === 1 ? 
        <>
          <Link to={'/panel/ecomerce/productos'} className="bg-blue-500 p-2 rounded-lg text-white flex items-center justify-center ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </Link>
          <Link to={'/panel/config'} className="bg-blue-500 p-2 rounded-lg text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
          </Link>
        
        </>
          :
          null   
        }
      </div>
    </aside>
  );
};

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow">
      <div className="text-xl font-bold text-gray-700">Dashboard</div>
      <div className="flex items-center space-x-4">
  
      </div>
    </header>
  );
};
