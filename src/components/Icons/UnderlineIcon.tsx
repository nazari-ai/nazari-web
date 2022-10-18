import React from "react";

function UnderlineIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width="110" height="12" viewBox="0 0 284 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1 16.1339C112.227 3.1018 172.172 3.97841 283 19"
                stroke={props.stroke || "black"}
                strokeOpacity="0.3"
                strokeWidth="13"
            />
        </svg>
    );
}

const SunIcon = React.memo(UnderlineIcon);
export default UnderlineIcon;
