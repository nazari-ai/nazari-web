import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "../../components/PrimaryButton";
import { PrimaryInput } from "../../components/PrimaryInput";
import styles from "./style.module.scss";
import { useFormik } from "formik";
import { useSpring, animated } from "react-spring";
import { useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useStore } from "src/store";

const validate = (values: any) => {
    const errors = {} as any;
    if (!values.first_name) {
        errors.first_name = "Required";
    }

    if (!values.email) {
        errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }

    return errors;
};

export function AnalyzeAsaModal() {
    const { openAnalyzeModal } = useStore();
    //Data
    const [isLoading, setIsLoading] = useState(false);

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

    //Form validator and handler
    const formik = useFormik({
        initialValues: {
            asa_id: "",
            twitter_keyword: "",
            github_keyword: "",
            reddit_keyword: "",
        },
        validate,
        onSubmit: (values) => {
            setIsLoading(true);
            axios
                .post("https://api.getwaitlist.com/api/v1/waiter", {
                    api_key: process.env.NEXT_PUBLIC_GET_WAITLIST_API_KEY,
                    ...values,
                })
                .then(
                    (response: any) => {
                        openAnalyzeModal();
                        setIsLoading(false);
                        toast("You've been added to our waitlist", {
                            id: "waitlist-toast",
                            icon: "👏",
                            style: {
                                borderRadius: "10px",
                                background: "#333",
                                color: "#fff",
                            },
                        });
                    },
                    (error: any) => {
                        setIsLoading(false);
                        openAnalyzeModal();
                        toast.error("Error Occurred");
                        console.log(error);
                    },
                );
        },
    });
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

                <form className={styles.form} onSubmit={formik.handleSubmit} name="Analyze ASA">
                    <PrimaryInput
                        placeholder="Select your favorite ASA"
                        type="asa_id"
                        name="asa_id"
                        id="asa_id"
                        label="Algorand Standard Asset"
                        onChange={formik.handleChange}
                        value={formik.values.asa_id}
                        error={formik.errors.asa_id}
                    />
                    <PrimaryInput
                        placeholder="Twitter Keyword"
                        type="twitter_keyword"
                        id="twitter_keyword"
                        name="twitter_keyword"
                        label="Twitter"
                        onChange={formik.handleChange}
                        value={formik.values.twitter_keyword}
                        error={formik.errors.twitter_keyword}
                    />
                    <PrimaryInput
                        placeholder="Github Keyword"
                        type="github_keyword"
                        id="github_keyword"
                        name="github_keyword"
                        label="Github"
                        onChange={formik.handleChange}
                        value={formik.values.github_keyword}
                        error={formik.errors.github_keyword}
                    />
                    <PrimaryInput
                        placeholder="Reddit Keyword"
                        type="reddit_keyword"
                        id="reddit_keyword"
                        name="reddit_keyword"
                        label="Reddit"
                        onChange={formik.handleChange}
                        value={formik.values.reddit_keyword}
                        error={formik.errors.reddit_keyword}
                    />
                    <PrimaryButton
                        isLoading={isLoading}
                        type="submit"
                        disabled={!formik.isValid}
                        text="Analyze Asset"
                        className="primaryButton"
                    />
                </form>
            </animated.div>
        </animated.div>
    );
}
