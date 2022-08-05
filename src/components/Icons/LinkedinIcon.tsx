import * as React from "react";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_115_646)">
                <path
                    d="M18.5195 0.25H1.47656C0.660156 0.25 0 0.894531 0 1.69141V18.8047C0 19.6016 0.660156 20.25 1.47656 20.25H18.5195C19.3359 20.25 20 19.6016 20 18.8086V1.69141C20 0.894531 19.3359 0.25 18.5195 0.25ZM5.93359 17.293H2.96484V7.74609H5.93359V17.293ZM4.44922 6.44531C3.49609 6.44531 2.72656 5.67578 2.72656 4.72656C2.72656 3.77734 3.49609 3.00781 4.44922 3.00781C5.39844 3.00781 6.16797 3.77734 6.16797 4.72656C6.16797 5.67188 5.39844 6.44531 4.44922 6.44531ZM17.043 17.293H14.0781V12.6523C14.0781 11.5469 14.0586 10.1211 12.5352 10.1211C10.9922 10.1211 10.7578 11.3281 10.7578 12.5742V17.293H7.79688V7.74609H10.6406V9.05078H10.6797C11.0742 8.30078 12.043 7.50781 13.4844 7.50781C16.4883 7.50781 17.043 9.48438 17.043 12.0547V17.293Z"
                    fill={props.fill || "#B7BECC"}
                />
            </g>
            <defs>
                <clipPath id="clip0_115_646">
                    <rect width="20" height="20" fill="white" transform="translate(0 0.25)" />
                </clipPath>
            </defs>
        </svg>
    );
}

const MemoLinkedinIcon = React.memo(LinkedinIcon);
export default MemoLinkedinIcon;
