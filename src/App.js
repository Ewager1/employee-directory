import "./styles.css";
import Header from "./components/Header";
import ContentContainer from "./components/ContentContainer";
import "react-table/react-table.css";

export default function App() {
  return (
    <div className="App">
      <Header className="header" />
      <ContentContainer />
    </div>
  );
}
