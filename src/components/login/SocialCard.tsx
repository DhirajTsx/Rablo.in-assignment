import SocialButton from "@/components/login/SocialButton";

export default function SocialCard({ onGoogle }: { onGoogle: () => void }) {
  return (
    <div className="absolute inset-0 flex items-end justify-center pb-6 z-10">
      <div className="w-[92%] rounded-2xl bg-[#2e7c90]/40 backdrop-blur-xl px-5 py-8">

        <h2 className="text-center text-[32px] italic font-bold text-white">
          Hi there!
        </h2>

        <p className="mt-2 text-center text-[13px] text-white/80">
          Sign in to keep things running smoothly.
        </p>

        <div className="my-5 h-px w-full bg-white/20" />

        <div className="space-y-3">
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
