import type { NextPage } from "next";
import styles from "../styles/assets.module.scss";
import { useContext, useState } from "react";
import { AssetsPageHero } from "src/sections/AssetsPageHero";
import AssetsWrapper from "src/sections/AssetsWrapper";
import AssetsCard from "src/components/AssetsCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ThemeContext } from "./_app";
import { AssetsLayout } from "src/layouts/AssetsLayout";
import { useInfiniteAsaListQuery } from "src/generated/graphql";
import React from "react";
import { PrimaryButton } from "src/components/PrimaryButton";

const Assets: NextPage = () => {
    const theme = useContext(ThemeContext);

    const { data, fetchNextPage, isFetchingNextPage, isLoading, isError } = useInfiniteAsaListQuery(
        {
            endIndex: 50,
            startIndex: 0,
        },
        {
            getNextPageParam(lastPage, allPages) {
                const assetTotal = lastPage.asalist.result[0].assetTotal;
                const totalLocal = (allPages.length ?? 0) * 50;
                if (totalLocal < assetTotal) {
                    return {
                        endIndex: totalLocal + 50,
                        startIndex: totalLocal,
                    };
                }
            },
        },
    );

    return (
        <AssetsLayout>
            <AssetsPageHero />

            {isError ? (
                <p className={styles.error_text}>We cannot process your request right now</p>
            ) : !isLoading ? (
                <AssetsWrapper>
                    {data?.pages.map((group, i) => (
                        <React.Fragment key={i}>
                            {group.asalist.result
                                .filter((asa) => asa.available === true)
                                .map((asa) => (
                                    <AssetsCard assets={asa} />
                                ))}
                        </React.Fragment>
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
            <div className={styles.loadMore}>
                <PrimaryButton text={"Load More"} type={"button"} onClick={() => fetchNextPage()} />
            </div>

            {isFetchingNextPage && (
                <Skeleton
                    count={3}
                    height="100px"
                    containerClassName={styles.skeletonWrapper}
                    baseColor={theme?.theme ? "#333333" : "#ebebeb"}
                />
            )}
        </AssetsLayout>
    );
};

export default Assets;
