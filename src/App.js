import classes from "./App.module.scss";
import Dashboard from "./pages/dashboard";
import MyComponent from "./pages/dashboard";
import Main from "./pages/main";
function App() {
    return (
        <div className={classes.App}>
            <Main />
        </div>
    );
}

export default App;
