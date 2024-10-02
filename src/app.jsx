import ReactDOM from "react-dom"

const App = () => {
    return (
        <div>
            <h1>Rendered via parcel</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);