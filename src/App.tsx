import React, {useEffect} from 'react';
import "./App.css";
import {useStateContext} from "./contexts/ContextProvider";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import routers from "./router/Router";
import NavBar from "./component/NavBar";
import GlobalStyles from "./component/SingleComponentStyles/GlobalStyles";
import Footer from "./component/Footer";

const App: React.FC = () => {

    const {
        currentMode,
        setCurrentMode,
    } = useStateContext();

    useEffect(() => {
        const currentThemeMode = localStorage.getItem('themeMode');
        if (currentThemeMode) {
            setCurrentMode(currentThemeMode);
        }
    }, [currentMode, setCurrentMode]);

    return (
        <>
            <GlobalStyles/>
            <div className={`${currentMode === "Dark" ? 'dark' : ''}`}>
                <BrowserRouter>
                    <NavBar/>
                    <div className="min-h-screen bg-light dark:bg-dark-mode text-dark dark:text-light">
                        <Routes>
                            {routers.map((route, index) => (
                                <Route key={index} path={route.path} element={route.element} />
                            ))}
                        </Routes>
                    </div>
                    <Footer/>
                </BrowserRouter>
            </div>
        </>
    );
};

export default App;
