import * as React from "react";

function SorryIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_193)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M60 120C93.1371 120 120 93.1371 120 60C120 26.8629 93.1371 0 60 0C45.133 0 39.4818 17.8318 29 26.7868C16.1188 37.7917 0 41.7299 0 60C0 93.1371 26.8629 120 60 120Z"
                    fill="#EEF0F6"
                />
                <g filter="url(#filter0_f_1_193)">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M61 110C84.196 110 103 91.196 103 68C103 44.804 84.196 26 61 26C50.5931 26 46.6373 38.4823 39.3 44.7508C30.2832 52.4542 19 55.2109 19 68C19 91.196 37.804 110 61 110Z"
                        fill="#E1E5EF"
                    />
                </g>
                <path
                    d="M61 98C80.33 98 96 82.33 96 63C96 43.67 80.33 28 61 28C41.67 28 26 43.67 26 63C26 82.33 41.67 98 61 98Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M55.0712 55.5355C55.0712 57.1924 53.728 58.5355 52.0712 58.5355H43.0001C41.3432 58.5355 40.0001 57.1924 40.0001 55.5355C40.0001 53.8787 41.3432 52.5355 43.0001 52.5355H52.0712C53.728 52.5355 55.0712 53.8787 55.0712 55.5355Z"
                    fill="#676C93"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M81.0712 55.5355C81.0712 57.1924 79.728 58.5355 78.0712 58.5355H69.0001C67.3432 58.5355 66.0001 57.1924 66.0001 55.5355C66.0001 53.8787 67.3432 52.5355 69.0001 52.5355H78.0712C79.728 52.5355 81.0712 53.8787 81.0712 55.5355Z"
                    fill="#676C93"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M69.9636 76.1951C69.047 77.5754 67.1851 77.9513 65.8049 77.0347L60.4943 73.5082L55.2845 77.0226C53.911 77.9491 52.0464 77.5868 51.1198 76.2132C50.1932 74.8397 50.5556 72.9751 51.9291 72.0485L58.8035 67.4112C59.8108 66.7317 61.1285 66.7269 62.1408 67.3991L69.124 72.0364C70.5043 72.953 70.8802 74.8149 69.9636 76.1951Z"
                    fill="#676C93"
                />
            </g>
            <defs>
                <filter
                    id="filter0_f_1_193"
                    x="8"
                    y="15"
                    width="106"
                    height="106"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="5.5" result="effect1_foregroundBlur_1_193" />
                </filter>
                <clipPath id="clip0_1_193">
                    <rect width="120" height="120" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}

const MemoSorryIcon = React.memo(SorryIcon);
export default MemoSorryIcon;
