import { Router, Route, Link, Routes } from "react-router-dom";
import TableUsers from "../components/TableUsers";
import { UserContext } from "../context/UserContext";
import { useContext, useEffect } from "react";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const PrivateRoutes = (props) => {
    const { user } = useContext(UserContext);
if(user && !user.auth){
    return <>
        

        <Alert variant="danger" className="mt-3">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
        You don't have permission to acess this route!
        </p>
      </Alert>
    </>
}

  return (
    <>
      {/* <Routes>
        <Route path={props.path} element={props.children} />
      </Routes> */}
      {props.children}
    </>
  );
};
export default PrivateRoutes;
