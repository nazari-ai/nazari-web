export const fetchData = <TData, TVariables>(query: string, variables?: TVariables): (() => Promise<TData>) => {
    return async (): Promise<TData> => {
        const res = await fetch(`https://analytics-api.herokuapp.com/analytics`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query, variables }),
        });

        const json = await res.json();

        if (json.errors) {
            const { message } = json.errors[0];

            throw new Error(message);
        }

        return json.data;
    };
};
