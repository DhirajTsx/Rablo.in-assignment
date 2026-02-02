type Props = {
  label: string;
  provider: "google" | "linkedin" | "facebook";
  onClick?: () => void;
};

export default function SocialButton({ label, provider, onClick }: Props) {
  const icon =
    provider === "google" ? (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path
            d="M19.9895 10.1871C19.9895 9.36767 19.9214 8.76973 19.7742 8.14966H10.1992V11.848H15.8195C15.7062 12.7671 15.0943 14.1512 13.7346 15.0813L13.7155 15.2051L16.7429 17.4969L16.9527 17.5174C18.8789 15.7789 19.9895 13.221 19.9895 10.1871Z"
            fill="#4285F4"
          />
          <path
            d="M10.1993 19.9313C12.9527 19.9313 15.2643 19.0454 16.9527 17.5174L13.7346 15.0813C12.8734 15.6682 11.7176 16.0779 10.1993 16.0779C7.50242 16.0779 5.21352 14.3395 4.39759 11.9366L1.08887 14.4391C2.76588 17.6945 6.2106 19.9313 10.1993 19.9313Z"
            fill="#34A853"
          />
          <path
            d="M4.39748 11.9366C4.18219 11.3165 4.05759 10.6521 4.05759 9.96559C4.05759 9.27902 4.18219 8.61467 4.38615 7.9946L1.08876 5.49208C0.397576 6.84299 0.000976562 8.36002 0.000976562 9.96559C0.000976562 11.5712 0.397576 13.0881 1.08876 14.439L4.39748 11.9366Z"
            fill="#FBBC05"
          />
          <path
            d="M10.1993 3.85336C12.1142 3.85336 13.406 4.66168 14.1425 5.33718L17.0207 2.59107C15.253 0.985496 12.9527 0 10.1993 0C6.2106 0 2.76588 2.23672 1.08887 5.49214L4.38626 7.99466C5.21352 5.59183 7.50242 3.85336 10.1993 3.85336Z"
            fill="#EB4335"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ) : provider === "linkedin" ? (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect width="20" height="20" rx="2" fill="#117EB8" />
        <path
          d="M3.6 7.7H6.3V16.3H3.6V7.7ZM5 3.46C5.85 3.46 6.54 4.15 6.54 5C6.54 5.86 5.85 6.56 5 6.56C4.14 6.56 3.45 5.86 3.45 5C3.45 4.15 4.14 3.46 5 3.46ZM8 7.7H10.56V8.9H10.6C10.96 8.23 11.83 7.52 13.13 7.52C15.83 7.52 16.33 9.3 16.33 11.62V16.33H13.66V12.15C13.66 11.16 13.64 9.87 12.27 9.87C10.88 9.87 10.67 10.96 10.67 12.08V16.33H8V7.7Z"
          fill="white"
        />
      </svg>
    ) : (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect width="20" height="20" rx="2" fill="#1976D2" />
        <path
          d="M16.875 10H13.75V7.5C13.75 6.81 14.31 6.87 15 6.87H16.25V3.75H13.75C11.68 3.75 10 5.43 10 7.5V10H7.5V13.12H10V20H13.75V13.12H15.62L16.875 10Z"
          fill="white"
        />
      </svg>
    );

  return (
    <button
      onClick={onClick}
      className="
        w-full
        bg-[#0E5A6F]
        hover:bg-[#0c4e60]
        active:scale-[0.98]
        transition
        text-white
        py-2.5
        rounded-[10px]
        text-[13px]
        font-medium
        flex
        items-center
        justify-center
        gap-3
        mb-3
      "
    >
      <span
        className={`rounded-full p-[3px] flex items-center justify-center ${
          provider === "google" ? "bg-white" : ""
        }`}
      >
        {icon}
      </span>

      {label}
    </button>
  );
}
