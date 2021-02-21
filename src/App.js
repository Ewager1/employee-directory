import "./styles.css";
import Header from "./components/Header";
import ContentContainer from "./components/ContentContainer";

export default function App() {
  return (
    <div className="App">
      <Header className="header" />
      <ContentContainer />
    </div>
  );
}
