
import { AsideVar } from "./components/AsideVar";
import { Outlet } from "react-router-dom";

export const PanelEcomerceLayout = () => {

  return (
    <div className="flex">
      <AsideVar />
      <main className="flex-1 p-1">
        <Outlet/>
      </main>
    </div>
  );
}




