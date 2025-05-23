import ReactDOM from "react-dom/client";
import Head from "./components/Head";
import Body from "./components/Body";

const App = () => {
  return (
    <div>
      <Head />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
