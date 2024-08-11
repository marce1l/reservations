import { useRef, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { MIN_PASSWORD_LENGTH } from "../../lib/constants";

const defaultPasswordData = {
  password: {
    value: "",
    isValid: false,
  },
  confirmPassword: {
    value: "",
    isValid: false,
  },
};

export default function PasswordForm({ isCompleted, sendInputData }) {
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [passwordData, setPasswordData] = useState(defaultPasswordData);

  function passwordValidation(password) {
    return password.length > MIN_PASSWORD_LENGTH;
  }

  function confirmPasswordValidation(confirmPassword) {
    return confirmPassword;
  }

  function handleInputData(data) {
    setPasswordData((prevPasswordData) => ({
      ...prevPasswordData,
      [data.name]: {
        value: data.value,
        isValid: data.isValid,
      },
    }));
  }

  function handleClick(e) {
    let hasError = false;

    if (!passwordData.password.isValid) {
      passwordRef.current.triggerValidationError();
      hasError = true;
    }

    if (!passwordData.confirmPassword.isValid) {
      confirmPasswordRef.current.triggerValidationError();
      hasError = true;
    }

    if (passwordData.password.value !== passwordData.confirmPassword.value) {
      confirmPasswordRef.current.triggerValidationError();
      hasError = true;
    }

    if (!hasError) {
      sendInputData({
        password: passwordData.password.value,
        confirmPassword: passwordData.confirmPassword.value,
      });
      e.target.form.requestSubmit();
      isCompleted(true);
    }
  }

  return (
    <>
      <h2 className="mt-8 py-2 text-2xl sm:mt-4">Enter your password</h2>
      <Input
        styles=""
        ref={passwordRef}
        type="password"
        name="password"
        id="passwordInput"
        ariaLabel="Password"
        autoComplete="new-password"
        labelText="Password"
        labelHtmlFor="passwordInput"
        errorText="Please enter a valid password!"
        inputValidation={passwordValidation}
        inputData={handleInputData}
      />
      <Input
        styles=""
        ref={confirmPasswordRef}
        type="password"
        name="confirmPassword"
        id="confirmPasswordInput"
        ariaLabel="Confirm Password"
        autoComplete="new-password"
        labelText="Confirm Password"
        labelHtmlFor="confirmPasswordInput"
        errorText="The two password should match"
        inputValidation={confirmPasswordValidation}
        inputData={handleInputData}
      />
      <div className="flex items-center justify-center">
        <Button
          styles="mt-10 w-full font-semibold"
          type="button"
          onClick={handleClick}
        >
          Finish
        </Button>
      </div>
    </>
  );
}