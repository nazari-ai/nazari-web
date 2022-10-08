export const removeDuplicate = (data: any) => {
    const arrayUniqueByKey = [...new Map(data.map((item: any) => [item["name"], item])).values()];

    return arrayUniqueByKey;
};

export const getMostDoneInWeekDay = <T>(data: T[], key: string) => {
    const res = Math.max.apply(
        Math,
        data.map((o: any) => {
            return o[key];
        }),
    );

    const rr = data.find((o) => o[key as keyof T] == res);

    return rr;
};
