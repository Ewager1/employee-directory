import "./styles.css";
import Header from "./components/Header/Header";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import Footer from "./components/Footer/Footer";
import ContentContainer from "./components/ContentContainer/ContentContainer";

export default function App() {
  return (
    <div className="App">
      <Header className="header" />
      <ContentContainer />
    </div>
  );
}
