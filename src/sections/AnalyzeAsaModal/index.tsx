import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "../../components/PrimaryButton";
import { PrimaryInput } from "../../components/PrimaryInput";
import styles from "./style.module.scss";
import { useFormik } from "formik";
import { useSpring, animated } from "react-spring";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { defaultAsa, useStore } from "src/store";
import { useAsaListQuery } from "src/generated/graphql";
import { AssetInfo } from "src/components/AssetInfo";
import { SearchInput } from "src/components/SearchInput";
import { asset, dateRangeType } from "src/types";
import { useRouter } from "next/router";
import CloseIcon from "src/components/Icons/CloseIcon";
import { ThemeContext } from "@pages/_app";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import dateRangeStyles from "src/components/DateRangePicker/style.module.scss";
// @ts-ignore
import { DateRange } from "react-date-range";
import { addDays, format } from "date-fns";

const validate = (values: any) => {
    const errors = {} as any;
    if (!values.first_name) {
        errors.first_name = "Required";
    }

    return errors;
};

export function AnalyzeAsaModal() {
    const router = useRouter();
    const theme = useContext(ThemeContext);

    const { openAnalyzeModal, selectedAsa, setSelectedAsa, pickedAsa, setPickedAsa, setDateRange } = useStore(
        (state: any) => ({
            openAnalyzeModal: state.openAnalyzeModal,
            selectedAsa: state.selectedAsa,
            setSelectedAsa: state.setSelectedAsa,
            pickedAsa: state.pickedAsa,
            setPickedAsa: state.setPickedAsa,
            setDateRange: state.setDateRange,
        }),
    );

    const { status, data, error, isFetching } = useAsaListQuery();
    const [filteredResults, setFilteredResults] = useState([] as asset[]);
    const [searchInput, setSearchInput] = useState("");
    const [removeAsaList, setRemoveAsaList] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setSearchInput(selectedAsa?.name as any);
        setRemoveAsaList(false);
    }, [selectedAsa]);

    const searchItems = (searchValue: string) => {
        setSearchInput(searchValue);
        if (searchInput !== "") {
            const filteredData = data?.asalist?.result.filter((item) => {
                return Object.values(item).join("").toLowerCase().includes(searchInput?.toLowerCase());
            });
            setFilteredResults(filteredData as any);
            // setSelectedAsa(defaultAsa);
            setRemoveAsaList(true);
        } else {
            setFilteredResults([]);
        }
    };

    const handleRemoveAsaList = (asa: asset) => {
        setSearchInput(asa.name);
        setRemoveAsaList(false);
        setPickedAsa(asa);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        openAnalyzeModal();
        setSelectedAsa(pickedAsa);
        setPickedAsa(defaultAsa);
        router.push(`/${pickedAsa.assetId}`);
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

    const handleDateRangeButton = () => {
        const makeRangeSameWithState = {
            startDate: format(range[0].startDate, "yyyy-MM-dd"),
            endDate: format(range[0].endDate ? range[0].endDate : new Date(), "yyyy-MM-dd"),
            activeTimeFrame: null,
        };
        setDateRange(makeRangeSameWithState);
        setIsOpen(false);
    };

    const handleDateRangeModal = () => {
        setIsOpen(!isOpen);
    };

    const [range, setRange] = useState<dateRangeType[]>([
        {
            startDate: new Date("2022-10-01"),
            endDate: new Date(),
            key: "selection",
        },
    ]);

    const formattedDate = `${format(range[0].startDate, "PPP")} to ${format(
        range[0].endDate ? range[0].endDate : new Date(),
        "PPP",
    )}`;

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

                    <div className={styles.headerCloseIcon} onClick={openAnalyzeModal}>
                        <CloseIcon fill={theme?.theme ? "#ffffff" : ""} />
                    </div>
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
                        error={!pickedAsa.assetId ? "No ASA Selected" : ""}
                    />

                    <PrimaryInput
                        placeholder="Select Date Range"
                        type="text"
                        id="twitter_keyword"
                        disabled={false}
                        name="twitter_keyword"
                        label="Date Range"
                        onClick={handleDateRangeModal}
                        value={formattedDate}
                    />

                    {isOpen && (
                        <div className={styles.dateRangeWrapper}>
                            <DateRange
                                editableDateInputs={true}
                                onChange={(item: any) => setRange([item.selection])}
                                moveRangeOnFirstSelection={true}
                                ranges={range}
                                rangeColors={["#000000", "#000000", "#000000"]}
                                minDate={new Date("2022-10-01")}
                                maxDate={new Date()}
                            />
                            <button data-testid="close-btn" className={styles.closeBtn} onClick={handleDateRangeButton}>
                                OK
                            </button>
                        </div>
                    )}

                    {searchInput && removeAsaList && (
                        <div>
                            {filteredResults?.length > 0 ? (
                                <div className={styles.assetList}>
                                    {filteredResults?.slice(0, 3)?.map((asset) => (
                                        <AssetInfo
                                            asset={asset}
                                            key={asset.assetId}
                                            className={!asset.available ? "unavailable" : ""}
                                            handleClick={handleRemoveAsaList}
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
                        disabled={!pickedAsa?.assetId}
                    />
                </form>
            </animated.div>
        </animated.div>
    );
}
