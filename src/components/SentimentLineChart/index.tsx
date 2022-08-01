import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { LineChart, Line, Tooltip, ResponsiveContainer, CartesianGrid, XAxis, YAxis } from "recharts";

type Props = {
    title?: string;
    data: Array<any>;
};

export function SentimentLineChart(props: Props) {
    const [data, setData] = useState([] as Array<any>);

    useEffect(() => {
        if (props.data) {
            setData(props.data);
        }
    }, [props.data]);
    return (
        <div className={styles.chartContainer}>
            <div className={styles.chartHeaderContainer}>
                <h1 className={styles.chartTitle}>{props.title}</h1>
            </div>
            <ResponsiveContainer height={300}>
                <LineChart data={data}>
                    <Line type="monotone" dataKey="data" stroke="#6FD791" />
                    <Tooltip />
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
