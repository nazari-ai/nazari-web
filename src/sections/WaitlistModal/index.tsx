import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "../../components/PrimaryButton";
import { PrimaryInput } from "../../components/PrimaryInput";
import styles from "./style.module.scss";
import { useFormik } from "formik";
import { useSpring, animated } from "react-spring";
import { useRef } from "react";

type Props = {
    closePopup: Function;
};

const validate = (values: any) => {
    const errors = {} as any;
    if (!values.name) {
        errors.name = "Required";
    }

    if (!values.email) {
        errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }

    return errors;
};

export function WaitlistModal(props: Props) {

    //This is used to encode the formData for Netlify Form Submission
    const encode = (data: any) => {
        return Object.keys(data)
            .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };


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



    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
        },
        validate,
        onSubmit: (values) => {
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "Waitlist", ...values }),
            })
                .then(() => {
                    props.closePopup();
                })
                .catch((error) => console.log("Error", error));
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

                <form
                    className={styles.form}
                    name="Waitlist"
                    method="POST"
                    action="/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                >
                    <input type="hidden" name="form-name" value="Waitlist" />
                    <PrimaryInput
                        placeholder="John Doe"
                        type="name"
                        name="name"
                        id="name"
                        label="Your First Name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        error={formik.errors.name}
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
