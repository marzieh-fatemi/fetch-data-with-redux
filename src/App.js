import React, { useEffect, useState } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Services/store";
import HomePage from "./Pages/HomePage";
import LoadingScreen from "./Components/Loading/loading";

function App() {
  const [loadingComponent, setLoadingComponent] = useState(true);

  useEffect(() => {
    setLoadingComponent(false);
  }, []);

  return (
    <Provider store={store}>
      <div className="container">
        {loadingComponent ? <LoadingScreen /> : <HomePage />}
      </div>
    </Provider>
  );
}

export default App;
