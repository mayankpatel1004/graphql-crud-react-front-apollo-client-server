import React from 'react';
import { render } from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import { GET_USER_LIST } from './Graphql/Queries';

const client = new ApolloClient({
  uri: 'http://localhost:3002/graphql',
  cache: new InMemoryCache()
});

function App() {

  const data = useQuery(GET_USER_LIST);
  console.log("Data===>",data);

  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
    </div>
  );
}

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);