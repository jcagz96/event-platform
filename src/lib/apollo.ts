import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-eu-central-1.graphcms.com/v2/cl4omwg5i0fxl01xxbp1o0vk5/master',
  cache: new InMemoryCache()
});