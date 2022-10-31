import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { XAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Cell, ReferenceLine } from "recharts";
import randomColor from "randomcolor";
import { CustomTooltip } from "../CustomTooltip";

const colors = randomColor({
    count: 200,
    luminosity: "bright",
});

type Props = {
    title?: string;
    data: Array<any>;
};

export function SentimentBarChart(props: Props) {
    // const [data, setData] = useState([] as Array<any>);

    // useEffect(() => {
    //     if (props.data) {
    //         setData(props.data);
    //     }
    // }, [props.data]);

    return (
        <div className={styles.chartContainer}>
            <div className={styles.chartHeaderContainer}>
                <h1 className={styles.chartTitle}>{props.title}</h1>
            </div>
            <ResponsiveContainer height={300}>
                <BarChart width={150} height={40} barCategoryGap="1%" data={props.data}>
                    <Bar dataKey="data" fill="#6FD791" radius={[5, 5, 0, 0]}>
                        {props.data.map((datum, entry, index) => {
                            return <Cell key={`cell-${index}`} fill={datum.data > 0 ? "#6FD791" : "#ff0033"} />;
                        })}
                    </Bar>
                    <ReferenceLine y={0} stroke="rgb(102, 102, 102)" />
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
