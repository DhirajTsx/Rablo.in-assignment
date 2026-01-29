export default function WelcomeCard({ onNext }: { onNext: () => void }) {
  return (
    <div className="absolute bottom-0 w-full font-sans text-white">
      {/* Splash Background */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 py-10 px-2.5 flex flex-col gap-4">
        <h1 className="text-[45px] italic font-bold leading-tight">
          Manage Your <br />
          <span className="text-lime-400">Fitness Centre</span>
          <br /> with us!
        </h1>

        <p className="text-white font-medium text-[16px] leading-tight">
          All your business operations in one place, ready for you to take charge.
        </p>
        <div className="w-full h-[1px] bg-white/20" />

        <button
          onClick={onNext}
          className="mt-4 w-full rounded-xl bg-lime-400 py-3 text-black font-semibold"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
