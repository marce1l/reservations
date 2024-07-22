import Input from "../../components/Input";

export default function PersonalInfo() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-6">
      {/* Full name input box*/}
      <div className="relative flex items-center justify-center w-full border-2 border-customtxt focus-within:border-primary focus-within:outline-none">
        <Input
          styles={"peer mt-4"}
          type={"text"}
          ariaLabel={"first name"}
          name={"first Name"}
          required={true}
          autoComplete={"family-name"}
          id={"firstName"}
        />
        <label
          className="absolute left-2.5 text-gray-400 scale-110 pointer-events-none transition-all peer-focus:scale-90 peer-focus:-translate-y-4 peer-focus:left-1 peer-focus:text-primary peer-valid:scale-90 peer-valid:-translate-y-4 peer-valid:left-1 peer-valid:text-customtxt peer-autofill:scale-90 peer-autofill:-translate-y-4 peer-autofill:left-0.5 peer-autofill:text-customtxt"
          htmlFor="firstName"
        >
          First Name
        </label>
      </div>
      <div className="relative flex items-center justify-center w-full border-2 border-customtxt focus-within:border-primary focus-within:outline-none ">
        <Input
          styles={"peer mt-4"}
          type={"text"}
          ariaLabel={"last name"}
          name={"Last Name"}
          required={true}
          autoComplete={"given-name"}
          id={"lastName"}
        />
        <label
          className="absolute left-2.5 text-gray-400 scale-110 pointer-events-none transition-all peer-focus:scale-90 peer-focus:-translate-y-4 peer-focus:left-1 peer-focus:text-primary peer-valid:scale-90 peer-valid:-translate-y-4 peer-valid:left-1 peer-valid:text-customtxt peer-autofill:scale-90 peer-autofill:-translate-y-4 peer-autofill:left-0.5 peer-autofill:text-customtxt"
          htmlFor="lastName"
        >
          Last Name
        </label>
      </div>
    </div>
  );
}
