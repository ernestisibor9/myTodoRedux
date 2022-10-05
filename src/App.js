import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducer/rootReducer";
// import Home from "./components/Home";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

// Redux Persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const persistConfig = {
    key: "root",
    storage,
  };
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);

  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <Home /> */}
          <Header />
          <Tasks />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
