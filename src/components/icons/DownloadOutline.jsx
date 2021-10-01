import React from 'react'

const DownloadOutline = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={512}
            height={512}
            viewBox="0 0 512 512"
            {...props}
        >
            <title>{"ionicons-v5-a"}</title>
            <path
                d="M336 176h40a40 40 0 0140 40v208a40 40 0 01-40 40H136a40 40 0 01-40-40V216a40 40 0 0140-40h40"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
            />
            <path
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
                d="M176 272l80 80 80-80M256 48v288"
            />
        </svg>
    )
}

export default DownloadOutline
