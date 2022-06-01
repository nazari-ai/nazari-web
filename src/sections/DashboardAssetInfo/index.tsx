import Image from "next/image";
import Link from "next/link";
import { AssetFinancial } from "src/components/AssetFinancial";
import { AssetInformation } from "src/components/AssetInformation";
import styles from "./style.module.scss";

export function DashboardAssetInfo() {
    return (
        <div className={styles.infoContainer}>
            <div className={styles.assetInfoContainer}>
                <AssetInformation />
            </div>
            <div className={styles.assetDetailsSection}>
                <div className={styles.assetDetailsContainer}>
                    <AssetFinancial header="Volatility" info="Exteremely Low" />
                    <AssetFinancial header="Liquidity" info="$14.732 M" />
                    <AssetFinancial header="Total Cap" info="$9.537 B" />
                    <AssetFinancial header="Total Supply" info="10.000 B" />
                    <AssetFinancial header="Circ. Supply" info="6.633 B" />
                </div>
            </div>
        </div>
    );
}
