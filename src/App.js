import React from "react";
import "./App.css";
import CoursesContainer from "./components/CoursesContainer";
import ShowCourse from "./components/ShowCourse";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Route exact path='/' component={CoursesContainer} />
        <Route exact path='/:courseId' component={ShowCourse} />
      </Router>
    </div>
  );
}

export default App;
