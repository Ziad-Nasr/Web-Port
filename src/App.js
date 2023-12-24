import logo from "./logo.svg";
import "./App.css";
import TabBar from "./TabBar/TabBar";
import Landing from "./Landing/Landing";
import AboutMe from "./AboutMe/AboutMe";
function App() {
  return (
    <div className="Components">
      <TabBar />
      <Landing />
      <AboutMe />
    </div>
  );
}

export default App;
