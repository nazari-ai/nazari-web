import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { BarChart, Bar, Cell, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { CustomTooltip } from "../CustomTooltip";

type Props = {
    title?: string;
    header?: string;
    data: Array<any>;
};

export function SummaryBarChart(props: Props) {
    const [data, setData] = useState([] as Array<any>);

    useEffect(() => {
        if (props.data) {
            setData(props.data);

            props.data?.sort(function (a, b) {
                return a - b;
            });
            props.data[props.data.length - 1];
        }
    }, [props.data]);

    return (
        <div className={styles.chartContainer}>
            <div className={styles.chartHeaderContainer}>
                <p className={styles.chartHeader}>{props.header}</p>
                <h1 className={styles.chartTitle}>{props.title}</h1>
            </div>
            <ResponsiveContainer height={300}>
                <BarChart width={150} height={40} barCategoryGap="3%" data={data}>
                    <Bar dataKey="data" fill="#6FD791" radius={[10, 10, 0, 0]} />
                    <XAxis
                        dataKey="name"
                        tickLine={false}
                        axisLine={false}
                        tick={{ color: "#333333", strokeWidth: 0.1, fontWeight: 300, fontSize: ".6em" }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
