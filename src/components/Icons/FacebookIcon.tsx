import * as React from "react";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_115_638)">
                <path
                    d="M20 10.25C20 4.72715 15.5229 0.25 10 0.25C4.47715 0.25 0 4.72715 0 10.25C0 15.2412 3.65684 19.3783 8.4375 20.1285V13.1406H5.89844V10.25H8.4375V8.04688C8.4375 5.54063 9.93047 4.15625 12.2146 4.15625C13.3084 4.15625 14.4531 4.35156 14.4531 4.35156V6.8125H13.1922C11.95 6.8125 11.5625 7.5834 11.5625 8.375V10.25H14.3359L13.8926 13.1406H11.5625V20.1285C16.3432 19.3783 20 15.2412 20 10.25Z"
                    fill={props.fill || "#B7BECC"}
                    fill-opacity="1"
                />
            </g>
            <defs>
                <clipPath id="clip0_115_638">
                    <rect width="20" height="20" fill="white" transform="translate(0 0.25)" />
                </clipPath>
            </defs>
        </svg>
    );
}

const MemoFacebookIcon = React.memo(FacebookIcon);
export default MemoFacebookIcon;
