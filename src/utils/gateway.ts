import { GraphQLClient } from "graphql-request";
import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            retry: 3,
            retryOnMount: false,
            staleTime: 0,
        },
    },
});

export const GATEWAY_API = process.env.NEXT_PUBLIC_APOLLO_GATEWAY_URL;

export const Gateway = new GraphQLClient("/graphql");

export default Gateway;
