import { Navigate } from "react-router-dom";

export type ProtectedRouteProps = {
  outlet: JSX.Element;
};

const ProtectedRoute = ({ outlet }: ProtectedRouteProps) => {
  const redirectPath = "/signin";
  const token = localStorage.getItem("token");
  if (token) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: redirectPath }} />;
  }
};
export default ProtectedRoute;
