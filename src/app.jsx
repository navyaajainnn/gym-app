import ReactDOM from "react-dom"
import Body from "./components/Body";

const App = () => {
    return (
        <div className="text-white">
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);