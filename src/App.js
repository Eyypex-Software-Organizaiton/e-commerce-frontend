import AppRouter from "./router/AppRouter";
import UserContextProvider from "./context/UserContext";
import CardContextProvider from "./context/CardContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <CardContextProvider>
          <AppRouter />
        </CardContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
