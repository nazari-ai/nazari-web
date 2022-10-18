export const fetchData = <TData, TVariables>(query: string, variables?: TVariables): (() => Promise<TData>) => {
    return async (): Promise<TData> => {
        const res = await fetch(`https://asalytics-backend-lhnwbn4frq-uc.a.run.app/analytics`, {
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
