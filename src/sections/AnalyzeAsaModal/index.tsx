import { PrimaryButton } from "../../components/PrimaryButton";
import { PrimaryInput } from "../../components/PrimaryInput";
import styles from "./style.module.scss";
import { useSpring, animated } from "react-spring";
import { useContext, useEffect, useState } from "react";
import { defaultAsa, useStore } from "src/store";
import { useAsanameSearchQuery } from "src/generated/graphql";
import { AssetInfo } from "src/components/AssetInfo";
import { SearchInput } from "src/components/SearchInput";
import { asset, dateRangeType } from "src/types";
import { useRouter } from "next/router";
import CloseIcon from "src/components/Icons/CloseIcon";
import Skeleton from "react-loading-skeleton";
import { ThemeContext } from "@pages/_app";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
// @ts-ignore
import { DateRange } from "react-date-range";
import { format, subMonths } from "date-fns";

export function AnalyzeAsaModal() {
    const router = useRouter();
    const theme = useContext(ThemeContext);

    const { openAnalyzeModal, setSelectedAsa, setDateRange } = useStore((state: any) => ({
        openAnalyzeModal: state.openAnalyzeModal,
        setSelectedAsa: state.setSelectedAsa,
        setDateRange: state.setDateRange,
    }));

    const [searchInput, setSearchInput] = useState("");
    const [searchVariable, setSearchVariable] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [asa, setAsa] = useState(defaultAsa);

    const { data, isLoading } = useAsanameSearchQuery({
        nameSearch: searchInput,
    });

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
        setSearchVariable(e.target.value);
    };

    const handleRemoveAsaList = (asa: asset) => {
        setSearchVariable(asa.name);
        setSearchInput("");
        setAsa(asa);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        openAnalyzeModal();
        setSelectedAsa(asa);
        router.push(`/${asa.assetId}`);
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
                        onChange={handleSearchChange}
                        value={searchVariable}
                        error={!asa.assetId ? "No ASA Selected" : ""}
                    />

                    <PrimaryInput
                        placeholder="Select Date Range"
                        type="text"
                        id="twitter_keyword"
                        disabled={false}
                        readonly={true}
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
                                rangeColors={["#141517", "#141517", "#141517"]}
                                minDate={subMonths(new Date(), 3)}
                                maxDate={new Date()}
                            />
                            <button data-testid="close-btn" className={styles.closeBtn} onClick={handleDateRangeButton}>
                                OK
                            </button>
                        </div>
                    )}

                    {searchInput.length > 3 && (
                        <div>
                            {data && data?.asanameSearch?.result?.length > 0 ? (
                                <div className={styles.assetList}>
                                    {data.asanameSearch.result?.slice(0, 3)?.map((asset) => (
                                        <AssetInfo
                                            asset={asset}
                                            key={asset.assetId}
                                            className={!asset.available ? "unavailable" : ""}
                                            handleClick={handleRemoveAsaList}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className={styles.assetList}>{isLoading ? "Fetching..." : "No result found"}</div>
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
                        value={searchVariable}
                    />
                    <PrimaryInput
                        placeholder="Github Keyword"
                        type="github_keyword"
                        id="github_keyword"
                        disabled={true}
                        name="github_keyword"
                        label="Github"
                        value={searchVariable}
                    />
                    <PrimaryInput
                        placeholder="Reddit Keyword"
                        type="reddit_keyword"
                        id="reddit_keyword"
                        disabled={true}
                        name="reddit_keyword"
                        label="Reddit"
                        value={searchVariable}
                    />
                    <PrimaryButton
                        isLoading={isLoading}
                        type="submit"
                        text="Analyze Asset"
                        className="primaryButton"
                        disabled={!asa?.assetId}
                    />
                </form>
            </animated.div>
        </animated.div>
    );
}
