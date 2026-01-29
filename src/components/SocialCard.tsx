import SocialButton from "./SocialButton";

export default function SocialCard({ onGoogle }: { onGoogle: () => void }) {
  return (
    <div className="absolute  font-sans bottom-0 w-full flex justify-center gap-0  px-1 pb-2">
      <div
        className="
        rounded-xl
        bg-[#55A6C4]/30
        backdrop-blur-xl
        flex
        flex-col
        items-center
        py-10
        w-90
        px-3.75
        // gap-6.25
      "
      >
        <div className="text-center">
          <h2 className="text-[45px] text-white italic font-bold leading-tight">
            Hi there!
          </h2>

          <p className="text-white  font-medium text-[16px] leading-tight mt-2.5">
            Sign in to keep things running smoothly.
          </p>
        </div>

        <div className="w-full h-px bg-white/20" />
        <div className="w-full space-y-3">
          <SocialButton
            label="Continue with Google"
            provider="google"
            onClick={onGoogle}
          />

          <SocialButton label="Continue with LinkedIn" provider="linkedin" />

          <SocialButton label="Continue with Facebook" provider="facebook" />
        </div>
      </div>
    </div>
  );
}
