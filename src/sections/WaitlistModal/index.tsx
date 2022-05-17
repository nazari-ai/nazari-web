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

type Props = {
    closePopup: Function;
};

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

export function WaitlistModal(props: Props) {
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
            first_name: "",
            email: "",
        },
        validate,
        onSubmit: (values) => {
            setIsLoading(true)
            axios
                .post("https://api.getwaitlist.com/api/v1/waiter", {
                    api_key: process.env.NEXT_PUBLIC_GET_WAITLIST_API_KEY,
                    ...values,
                })
                .then(
                    (response: any) => {
                        props.closePopup();
                        setIsLoading(false)
                        toast("You've been added to our waitlist", {
                            id:"waitlist-toast",
                            icon: "👏",
                            style: {
                                borderRadius: "10px",
                                background: "#333",
                                color: "#fff",
                            },
                        });
                    },
                    (error: any) => {
                        setIsLoading(false)
                        props.closePopup();
                        toast.error("Error Occurred")
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
                        onClick={() => props.closePopup(false)}
                        src="/images/close.svg"
                        alt="Close Icon"
                        width={50}
                        height={60}
                        priority={true}
                    />
                </div>

                <form className={styles.form} onSubmit={formik.handleSubmit} name="Waitlist">
                    <PrimaryInput
                        placeholder="Ernest"
                        type="first_name"
                        name="first_name"
                        id="first_name"
                        label="Your First Name"
                        onChange={formik.handleChange}
                        value={formik.values.first_name}
                        error={formik.errors.first_name}
                    />
                    <PrimaryInput
                        placeholder="hello@asalytics.ai"
                        type="email"
                        id="name"
                        name="email"
                        label="Your Email Address"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        error={formik.errors.email}
                    />
                    <PrimaryButton
                    isLoading={isLoading}
                        type="submit"
                        disabled={!formik.isValid}
                        text="Join Our Waitlist"
                        className="secondaryButton"
                    />
                </form>
            </animated.div>
        </animated.div>
    );
}
