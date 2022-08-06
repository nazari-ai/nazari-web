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
                        info={
                            data?.asaData?.result[0]?.usdValue
                                ? `$${Number(data?.asaData?.result[0]?.usdValue)}`
                                : // ? `${approx(data?.asaData?.result[0]?.usdValue, { prefix: "$", capital: true })}`
                                  "-"
                        }
                    />
                    <AssetFinancial header="Total Cap" info="-" />
                    {data?.asaData?.result[0]?.totalSupply ? (
                        <AssetFinancial
                            header="Total Supply"
                            info={approx(
                                Number(data?.asaData?.result[0]?.totalSupply) /
                                    Math.pow(10, data?.asaData?.result[0].fractionDecimals as number),
                                { capital: true },
                            )}
                        />
                    ) : (
                        ""
                    )}
                    {data?.asaData?.result[0]?.circSupply ? (
                        <AssetFinancial
                            header="Circ. Supply"
                            info={approx(
                                Number(data?.asaData?.result[0]?.circSupply) /
                                    Math.pow(10, data?.asaData?.result[0].fractionDecimals as number),
                                { capital: true },
                            )}
                        />
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
}
