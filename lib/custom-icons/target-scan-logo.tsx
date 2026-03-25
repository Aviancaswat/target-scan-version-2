export default function TargetScanLogo({ className = "h-10 w-10" }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="8" opacity="0.3" />
            <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="6" opacity="0.6" />
            <circle cx="100" cy="100" r="45" fill="currentColor" opacity="0.8" />
            <g opacity="0.5">
                <line x1="30" y1="100" x2="170" y2="100" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="100" y1="30" x2="100" y2="170" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
            </g>
            <g fill="currentColor" opacity="0.7">
                <circle cx="45" cy="45" r="4" />
                <circle cx="155" cy="45" r="4" />
                <circle cx="45" cy="155" r="4" />
                <circle cx="155" cy="155" r="4" />
                <circle cx="155" cy="155" r="4" />
            </g>
            <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
            <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.2" />
        </svg>
    );
}
