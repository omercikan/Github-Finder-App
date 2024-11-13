import Header from "./components/Header";
import Search from "./components/Search";
import UserList from "./components/UserList";
import Alert from "./components/Alert";
import UsersContextProvider from "./context/usersContext";
import AlertContextProvider from "./context/alertContext";

function App() {
  return (
    <main className="parent-element">
      <Header />

      <UsersContextProvider>
        <AlertContextProvider>
          <Search />
          <Alert />
          <UserList />
        </AlertContextProvider>
      </UsersContextProvider>
    </main>
  );
}

export default App;
