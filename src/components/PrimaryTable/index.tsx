import Image from "next/image";
import React from "react";
import styles from "./style.module.scss";
import Table from "rc-table";

type Props = {
    columns: Array<any>;
    data: Array<any>;
};

export function PrimaryTable(props: Props) {
    return (
        <div className={styles.tableContainer}>
            <Table
                className={styles.table}
                columns={props.columns}
                data={props.data}
                tableLayout="auto"
                expandable={{ defaultExpandAllRows: true, columnWidth: 200 }}
            />
        </div>
    );
}
