import { Routes, Route } from "react-router-dom";
import { client } from "./graphql/client";
import { ApolloProvider } from "@apollo/client";
import Register from "./routes/Register/Register";
import Login from "./routes/Login/Login";
import Dashboard from "./routes/Dashboard/Dashboard";
import { QueryParamProvider } from "use-query-params";
import { RouteAdapter } from "./components/RouteAdapter/RouteAdapter";

function App() {
  return (
    <QueryParamProvider ReactRouterRoute={RouteAdapter}>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/*" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ApolloProvider>
    </QueryParamProvider>
  );
}

export default App;
