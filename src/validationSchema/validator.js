import * as Yup from "yup";



export const rateValidator = Yup.object({
    giftname: Yup.string()
    .required("Giftname is required"),
    category: Yup.string()
      .required("Select a category"),
    amount: Yup.string()
      .required("Enter an amount")
      .matches(/^-?[0-9]+(.[0-9]{1-7})?$/, "Enter a valid amount")
      .min(2, "Minimum amount is $25"),
  });


export const loginValidator = Yup.object({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Password cannot be less than 3 characters")
    .required("Password is required"),
});



export const forgotPasswordValidator = Yup.object({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
});


export const resetPasswordValidator = Yup.object({
  password: Yup.string()
    .min(6, "Password cannot be less than 6 characters")
    .required("Password is required"),
  confirm_password: Yup.string()
    .required("Passwords must match")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const registerValidator = Yup.object({
  firstName: Yup.string().required("Firstname is required"),
  lastName: Yup.string().required("Lastname is required"),
  phoneNumber: Yup.string()
    .required("Phonenumber is required")
    .matches(/(^[+]?[234]\d{12}$)/, "Enter a valid phone number"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password cannot be less than 6 characters")
    .required("Password is required"),
  confirm_password: Yup.string()
    .required("Passwords must match")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

