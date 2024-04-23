import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function Root() {
  return (
    <div>
      <div className="content" >
        {/* Make the magic happens for SPA -> It brings the Root component children content*/}
        <Outlet/>
      </div>
    </div>
  );
}
export default Root;