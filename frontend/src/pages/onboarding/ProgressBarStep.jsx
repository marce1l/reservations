import TickIcon from "../../assets/icons/TickIcon";

export default function ProgressBarStep({
  step,
  stepName,
  isActive,
  isCompleted,
}) {
  return (
    <div
      className={
        isCompleted
          ? `relative flex h-8 w-8 items-center justify-center rounded-full bg-green-700 p-2
            transition-all`
          : isActive
            ? `relative flex h-8 w-8 items-center justify-center rounded-full bg-primary/70
              transition-all`
            : "relative flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 p-2"
      }
    >
      {isCompleted ? (
        <TickIcon height="20" width="20" styles="fill-white" />
      ) : (
        `${step}`
      )}
      <span
        className={
          isCompleted
            ? "absolute top-10 text-nowrap text-sm tracking-tight text-gray-500"
            : "absolute top-10 text-nowrap text-sm tracking-tight"
        }
      >
        {stepName}
      </span>
    </div>
  );
}
