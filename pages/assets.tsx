import type { NextPage } from "next";
import styles from "../styles/assets.module.scss";
import { useContext } from "react";
import { AssetsPageHero } from "src/sections/AssetsPageHero";
import AssetsWrapper from "src/sections/AssetsWrapper";
import AssetsCard from "src/components/AssetsCard";
import { useAsaListQuery } from "src/generated/graphql";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ThemeContext } from "./_app";
import { AssetsLayout } from "src/layouts/AssetsLayout";

const Assets: NextPage = () => {
    const { isLoading, isError, data } = useAsaListQuery();
    const theme = useContext(ThemeContext);

    return (
        <AssetsLayout>
            <AssetsPageHero />
            {isError ? (
                <p className={styles.error_text}>We cannot process your request right now</p>
            ) : !isLoading ? (
                <AssetsWrapper>
                    {data?.asalist.result
                        .filter((asa) => asa.available === true)
                        .map((asa) => (
                            <AssetsCard assets={asa} />
                        ))}
                </AssetsWrapper>
            ) : (
                <Skeleton
                    count={3}
                    height="200px"
                    containerClassName={styles.skeletonWrapper}
                    baseColor={theme?.theme ? "#333333" : "#ebebeb"}
                />
            )}
        </AssetsLayout>
    );
};

export default Assets;
