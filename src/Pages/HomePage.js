import React, { Suspense, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoadingScreen from "../Components/Loading/loading";
import { fetchUsers } from "../Services/slices/users/userSlice";
const CardComponent = React.lazy(() => import("../Components/CardComponent"));

function HomePage() {
  
  const data = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const fetch = () => dispatch(fetchUsers());

  useEffect(() => {
    fetch();
  }, []);
  return (
    <Suspense fallback={<LoadingScreen />}>
      {data.error ? <p>{data.error}</p> : <CardComponent />}
      <CardComponent />
    </Suspense>
  );
}

export default HomePage;
