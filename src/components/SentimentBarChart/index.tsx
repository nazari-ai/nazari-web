import React from "react";
import styles from "./style.module.scss";
import { XAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

type Props = {
    title?: string;
};

export function SentimentBarChart(props: Props) {
    const data = [
        {
            name: "Sun",
            data: 3490,
        },
        {
            name: "Mon",
            data: 4000,
        },
        {
            name: "Tues",
            data: 3000,
        },
        {
            name: "Wed",
            data: 2000,
        },
        {
            name: "Thurs",
            data: 234,
        },
        {
            name: "Fri",
            data: 1890,
        },
        {
            name: "Sat",
            data: 2390,
        },
        {
            name: "Sun",
            data: 3490,
        },
        {
            name: "Mon",
            data: 4000,
        },
        {
            name: "Tues",
            data: 3000,
        },
        {
            name: "Wed",
            data: 2000,
        },
        {
            name: "Thurs",
            data: 1000,
        },
        {
            name: "Fri",
            data: 1890,
        },
        {
            name: "Sat",
            data: 2390,
        },
    ];

    return (
        <div className={styles.chartContainer}>
            <div className={styles.chartHeaderContainer}>
                <h1 className={styles.chartTitle}>{props.title}</h1>
            </div>
            <ResponsiveContainer height={300}>
                <BarChart width={150} height={40} barCategoryGap="3%" data={data}>
                    <Bar dataKey="data" fill="#6FD791" radius={[5, 5, 0, 0]} />
                    <XAxis
                        dataKey="name"
                        tickLine={false}
                        axisLine={false}
                        tick={{ color: "#333333", strokeWidth: 0.1, fontWeight: 300, fontSize: ".6em" }}
                    />
                    <Tooltip />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
