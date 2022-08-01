import Image from "next/image";
import Link from "next/link";
import { AssetFinancial } from "src/components/AssetFinancial";
import { AssetInformation } from "src/components/AssetInformation";
import { useAsaDataQuery } from "src/generated/graphql";
import { useStore } from "src/store";
import styles from "./style.module.scss";
var approx = require("approximate-number");

export function DashboardAssetInfo() {
    const { analyzeModal, selectedAsa, openAnalyzeModal } = useStore();
    const { data, isFetching, error, status } = useAsaDataQuery({ asaID: selectedAsa.assetId });

    return (
        <div className={styles.infoContainer}>
            <div className={styles.assetInfoContainer}>
                <AssetInformation />
            </div>
            <div className={styles.assetDetailsSection}>
                <div className={styles.assetDetailsContainer}>
                    <AssetFinancial header="Reputation" info={data?.asaData?.result[0]?.reputation_Pera} />
                    <AssetFinancial
                        header="Value"
                        info={data?.asaData?.result[0]?.usdValue ? `USD${data?.asaData?.result[0]?.usdValue}` : "-"}
                    />
                    <AssetFinancial header="Total Cap" info="-" />
                    <AssetFinancial
                        header="Total Supply"
                        info={approx(data?.asaData?.result[0]?.totalSupply, { capital: true })}
                    />
                    <AssetFinancial
                        header="Circ. Supply"
                        info={approx(data?.asaData?.result[0]?.circSupply, { capital: true })}
                    />
                </div>
            </div>
        </div>
    );
}
