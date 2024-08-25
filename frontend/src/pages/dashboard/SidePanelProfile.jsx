import XIcon from "../../assets/XIcon";

export default function SidePanelProfile({
  image,
  text,
  closeSidePanel,
  windowSize,
}) {
  return (
    <div className="flex flex-row items-center">
      <img className="basis-1/8 rounded-full" src={image} />
      <span className="ml-2 basis-auto">{text}</span>
      {windowSize === "sm" ? (
        <XIcon onClick={closeSidePanel} styles="basis-1/8 ml-auto h-7 w-7" />
      ) : (
        <></>
      )}
    </div>
  );
}