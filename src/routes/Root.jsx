import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function Root() {
  return (
    <div>
      <Header />
      <div className="content" >
        {/* Makes the magic happen for SPA */}
        <Outlet/>
      </div>
    </div>
  );
}
export default Root;