export const sortByWeekday = (data: any) => {
    const sorter = {
        monday: 1,
        tuesday: 2,
        wednesday: 3,
        thursday: 4,
        friday: 5,
        saturday: 6,
        sunday: 7,
    };

    return data.sort(function sortByDay(a: any, b: any) {
        let day1 = a.lastPushDateWeekday ? a.lastPushDateWeekday.toLowerCase() : "";
        let day2 = b.lastPushDateWeekday ? b.lastPushDateWeekday.toLowerCase() : "";

        return sorter[day1 as keyof typeof sorter] - sorter[day2 as keyof typeof sorter];
    });
};

export const sortByWeekdayTwitter = (data: any) => {
    const sorter = {
        monday: 1,
        tuesday: 2,
        wednesday: 3,
        thursday: 4,
        friday: 5,
        saturday: 6,
        sunday: 7,
    };

    return data.sort(function sortByDay(a: any, b: any) {
        let day1 = a.weekday ? a.weekday.toLowerCase() : "";
        let day2 = b.weekday ? b.weekday.toLowerCase() : "";

        return sorter[day1 as keyof typeof sorter] - sorter[day2 as keyof typeof sorter];
    });
};

export const sortByHour = (data: any) => {
    return data.sort(function sortByDay(a: any, b: any) {
        return a.hour - b.hour;
    });
};

export const sortByDay = (data: any) => {
    return data.sort(function sortByDay(a: any, b: any) {
        return a.day - b.day;
    });
};
