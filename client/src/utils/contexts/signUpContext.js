import React, { createContext, useContext, useState } from "react";

const SignUpContext = createContext();

export const useSignUp = () => useContext(SignUpContext);

export const SignUpProvider = ({ children }) => {
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    birthday: "",
    allAgreementsAccepted: false,
    termsOfUse: false,
    agePolicy: false,
    privacyPolicy: false,
  });

  const updateSignUpData = (newData) => {
    setSignUpData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <SignUpContext.Provider value={{ signUpData, updateSignUpData }}>
      {children}
    </SignUpContext.Provider>
  );
};
