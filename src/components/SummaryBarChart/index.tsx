import Image from "next/image";
import React from "react";
import styles from "./style.module.scss";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

type Props = {
    title?: string;
    header?: string;
};

export function SummaryBarChart(props: Props) {
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
            data: 200,
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
                <p className={styles.chartHeader}>{props.header}</p>
                <h1 className={styles.chartTitle}>{props.title}</h1>
            </div>
            <ResponsiveContainer height={200}>
                <BarChart width={150} height={40} data={data}>
                    <Bar dataKey="data" fill="#6FD791" radius={[10, 10, 0, 0]} />
                    <XAxis
                        dataKey="name"
                        tickLine={false}
                        axisLine={false}
                        tick={{ color: "#333333", strokeWidth: 0.1, fontWeight: 300, fontSize: ".6em" }}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
