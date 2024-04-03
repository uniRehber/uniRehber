import React, { useContext } from "react";
import { HomePage } from "../pages/HomePage"; // named export
import { Universiteler } from "../pages/Universiteler"; // named export
import { Bolumler } from "../pages/Bolumler"; // named export
import PrivatePage from "../pages/PrivatePage"; // default export
import { 
    BrowserRouter as Router, 
    Routes,
    Route,
    Navigate // 'Redirect' yerine 'Navigate' kullanıldı
} from "react-router-dom";

import { AppContext } from "../providers/AppProvider";

function PrivateRoute({ children, ...rest }) {
    const { state } = useContext(AppContext);
  
    console.log(state);

    return (
      <Route
        {...rest}
        render={({ location }) =>
          state.loggedIn ? (
            children
          ) : (
            <Navigate to="/" /> // 'Redirect' yerine 'Navigate' kullanıldı
          )
        }
      />
    );
}

export const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} exact />
                <Route path="/Universiteler" element={<Universiteler />} />
                <Route path="/Bolumler" element={<Bolumler />} />
                <PrivateRoute path="/private" element={<PrivatePage />} exact />
            </Routes>
        </Router>
    );
}

export default PrivateRoute;
