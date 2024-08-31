import { Router, Route, Link, Routes } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import PrivateRoutes from "./PrivateRoutes";
import TableUsers from "../components/TableUsers";
import NotFound from "./NotFound";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <PrivateRoutes path="/users">
          <TableUsers />
        </PrivateRoutes> */}

        <Route
          path="/users"
          element={
            <PrivateRoutes>
              <TableUsers />
            </PrivateRoutes>
          }
        />

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
};
export default AppRoutes;
