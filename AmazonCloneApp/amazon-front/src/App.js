import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Payment from "./Payment";
import Home from "./Home";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./Orders";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const promise = loadStripe(
    "pk_test_51OPPwVFIMHZ2ryulhLuyCvkJJCJTIVOcbGrys36qikhPpOcvg3uNVWq1tbXPJwL3QYlOLccwWbtvETubspiq98xt007sKd3cJT"
);
function App() {
    const [{}, dispatch] = useStateValue();
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            //console.log("authUser:", authUser);
            if (authUser) {
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, []);
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route
                        path="/checkout"
                        element={
                            <>
                                <Header />
                                <Checkout />
                            </>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/"
                        element={
                            <>
                                <Header />
                                <Home />
                            </>
                        }
                    />
                    <Route
                        path="/orders"
                        element={
                            <>
                                <Header /> <Orders />
                            </>
                        }
                    />
                    <Route
                        path="/payment"
                        element={
                            <>
                                <Header />
                                <Elements stripe={promise}>
                                    <Payment />
                                </Elements>
                            </>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
