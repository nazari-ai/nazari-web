import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { XAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

type Props = {
    title?: string;
    data: Array<any>;
};

export function SentimentBarChart(props: Props) {
    const [data, setData] = useState([] as Array<any>);

    useEffect(() => {
        if (props.data) {
            setData(props.data);
        }
        console.log(data);
    }, [props.data]);

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
