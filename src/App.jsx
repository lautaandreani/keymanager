import { useAuth0 } from "@auth0/auth0-react";
import { Box } from "@chakra-ui/react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import "./App.css";

function App() {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();
  return (
    <Box bg="#16161A" h="100vh">
      {isAuthenticated ? <Home logout={logout} /> : <Login loginWithRedirect={loginWithRedirect} isLoading={isLoading} />}
    </Box>
  );
}

export default App;
