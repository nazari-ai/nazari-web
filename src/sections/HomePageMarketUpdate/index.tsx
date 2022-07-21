import Image from "next/image";
import Link from "next/link";
import MemoRedditIcon from "src/components/Icons/RedditIcon";
import { PrimaryTable } from "src/components/PrimaryTable";
import { PrimaryButton } from "../../components/PrimaryButton";
import { PrimaryLogo } from "../../components/PrimaryLogo";
import styles from "./style.module.scss";

export function HomePageMarketUpdate() {
    const columns = [
        {
            title: "NAME",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "PRICE",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "GITHUB",
            dataIndex: "github",
            key: "github",
        },
        {
            title: "REDDIT",
            dataIndex: "reddit",
            key: "reddit",
        },
        {
            title: "TWITTER",
            dataIndex: "twitter",
            key: "twitter",
        },
    ];

    const data = [
        {
            name: "Algorand",
            price: "$0.32",
            github: <Image height={40} width={71} src="/images/green-graph.svg" />,
            twitter: <Image height={40} width={71} src="/images/green-graph.svg" />,
            reddit: <Image height={40} width={71} src="/images/green-graph.svg" />,
        },
        {
            name: "Algorand",
            price: "$0.32",
            github: <Image height={40} width={71} src="/images/green-graph.svg" />,
            twitter: <Image height={40} width={71} src="/images/green-graph.svg" />,
            reddit: <Image height={40} width={71} src="/images/green-graph.svg" />,
        },
        {
            name: "Algorand",
            price: "$0.32",
            github: <Image height={40} width={71} src="/images/green-graph.svg" />,
            twitter: <Image height={40} width={71} src="/images/green-graph.svg" />,
            reddit: <Image height={40} width={71} src="/images/green-graph.svg" />,
        },
        {
            name: "Algorand",
            price: "$0.32",
            github: <Image height={40} width={71} src="/images/green-graph.svg" />,
            twitter: <Image height={40} width={71} src="/images/green-graph.svg" />,
            reddit: <Image height={40} width={71} src="/images/green-graph.svg" />,
        },
        {
            name: "Algorand",
            price: "$0.32",
            github: <Image height={40} width={71} src="/images/green-graph.svg" />,
            twitter: <Image height={40} width={71} src="/images/green-graph.svg" />,
            reddit: <Image height={40} width={71} src="/images/green-graph.svg" />,
        },
        {
            name: "Algorand",
            price: "$0.32",
            github: <Image height={40} width={71} src="/images/green-graph.svg" />,
            twitter: <Image height={40} width={71} src="/images/green-graph.svg" />,
            reddit: <Image height={40} width={71} src="/images/green-graph.svg" />,
        },
    ];
    return (
        <div className={styles.marketContainer}>
            <h1 className={styles.marketHeader}>Market Update</h1>
            <p className={styles.marketParagraph}>Algorand Standard Assets (ASAs) Categories</p>
            <div className={styles.tableContainer}>
                <PrimaryTable columns={columns} data={data} />
            </div>
        </div>
    );
}
