import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "../../components/PrimaryButton";
import { PrimaryInput } from "../../components/PrimaryInput";
import styles from "./style.module.scss";
import { useFormik } from "formik";
import { useSpring, animated } from "react-spring";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { defaultAsa, useStore } from "src/store";
import { useAsaListQuery } from "src/generated/graphql";
import { AssetInfo } from "src/components/AssetInfo";
import { SearchInput } from "src/components/SearchInput";
import { asset } from "src/types";
import { useRouter } from "next/router";

const validate = (values: any) => {
    const errors = {} as any;
    if (!values.first_name) {
        errors.first_name = "Required";
    }

    return errors;
};

export function AnalyzeAsaModal() {
    const router = useRouter();
    const { id } = router.query;
    const { openAnalyzeModal, selectedAsa, setSelectedAsa } = useStore();
    const { status, data, error, isFetching } = useAsaListQuery();
    const [filteredResults, setFilteredResults] = useState([] as asset[]);
    const [searchInput, setSearchInput] = useState("");
    const [removeAsaList, setRemoveAsaList] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setSearchInput(selectedAsa?.name as any);
        setRemoveAsaList(false);
    }, [selectedAsa]);

    const searchItems = (searchValue: string) => {
        setSearchInput(searchValue);
        if (searchInput !== "") {
            console.log(data?.asalist.result);
            const filteredData = data?.asalist?.result.filter((item) => {
                return Object.values(item).join("").toLowerCase().includes(searchInput?.toLowerCase());
            });
            setFilteredResults(filteredData as any);
            console.log(filteredData);
            setSelectedAsa(defaultAsa);
            setRemoveAsaList(true);
        } else {
            setFilteredResults([]);
        }
    };

    const handleSubmit = (e: any) => {
        openAnalyzeModal();
        e.preventDefault();
        router.push(`/dashboard`);
    };

    //Animation and Transitions
    const opacityAnimation: any = useSpring({
        config: { duration: 300 },
        from: { opacity: 0 },
        to: { opacity: 1 },
    });

    const slideInAnimation: any = useSpring({
        from: { marginTop: -30 },
        to: { marginTop: 0 },
        config: { duration: 300 },
    });

    // //Form validator and handler
    // const formik = useFormik({
    //     initialValues: {
    //         asa_id: "",
    //     },
    //     validate,
    //     onSubmit: (values) => {
    //         setIsLoading(true);
    //     },
    // });
    return (
        <animated.div
            className={styles.modalContainer}
            style={{
                ...opacityAnimation,
            }}
        >
            <animated.div
                className={styles.formContainer}
                style={{
                    ...slideInAnimation,
                }}
            >
                <div className={styles.modalHeader}>
                    <div className={styles.headerLogoContainer}></div>
                    <Image
                        className={styles.headerCloseIcon}
                        onClick={openAnalyzeModal}
                        src="/images/close.svg"
                        alt="Close Icon"
                        width={50}
                        height={60}
                        priority={true}
                    />
                </div>

                <form className={styles.form} onSubmit={handleSubmit} name="Analyze ASA">
                    <SearchInput
                        placeholder="Select your favorite ASA"
                        type="asa_id"
                        name="asa_id"
                        id="asa_id"
                        label="Algorand Standard Asset"
                        onChange={(e) => searchItems(e.target.value)}
                        value={searchInput}
                        error={!selectedAsa.assetId ? "No ASA Selected" : ""}
                    />

                    {searchInput && removeAsaList && (
                        <div>
                            {filteredResults?.length > 0 ? (
                                <div className={styles.assetList}>
                                    {filteredResults?.slice(0, 3)?.map((asset) => (
                                        <AssetInfo
                                            asset={asset}
                                            key={asset.assetId}
                                            className={!asset.available ? "unavailable" : ""}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className={styles.assetList}>No result found</div>
                            )}
                        </div>
                    )}
                    <PrimaryInput
                        placeholder="Twitter Keyword"
                        type="twitter_keyword"
                        id="twitter_keyword"
                        disabled={true}
                        name="twitter_keyword"
                        label="Twitter"
                        value={searchInput}
                    />
                    <PrimaryInput
                        placeholder="Github Keyword"
                        type="github_keyword"
                        id="github_keyword"
                        disabled={true}
                        name="github_keyword"
                        label="Github"
                        value={searchInput}
                    />
                    <PrimaryInput
                        placeholder="Reddit Keyword"
                        type="reddit_keyword"
                        id="reddit_keyword"
                        disabled={true}
                        name="reddit_keyword"
                        label="Reddit"
                        value={searchInput}
                    />
                    <PrimaryButton
                        isLoading={isLoading}
                        type="submit"
                        text="Analyze Asset"
                        className="primaryButton"
                        disabled={!selectedAsa?.assetId}
                    />
                </form>
            </animated.div>
        </animated.div>
    );
}
