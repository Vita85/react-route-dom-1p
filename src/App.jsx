import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactsPage";
import AboutPage from "./components/AboutPage";
import TeamPage from "./components/TeamPage";
import ProjectPage from "./components/ProjectPage";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <nav>
          <NavLink to="/" activeClassName="active">
            Головна сторінка
          </NavLink>
          <NavLink to="/contacts" activeClassName="active">
            Сторінка контактів
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            Про нас
          </NavLink>
        </nav>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/contacts" element={<ContactPage />}></Route>
          <Route path="/about" element={<AboutPage />}>
            <Route path="team" element={<TeamPage />}></Route>
            <Route path="project" element={<ProjectPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
