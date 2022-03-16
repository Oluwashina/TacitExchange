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
    .min(6, "Password cannot be less than 6 characters")
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
  .min(11, 'Phone number cannot be less than 11 digits')
  .max(11, 'Exceeded characters for phone number')
    .required("Phonenumber is required")
    .matches(/^-?[0-9]+(.[0-9]{1-7})?$/, "Enter a valid phone number"),
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

export const RegisterAdminValidator = Yup.object({
  firstname: Yup.string().required("Firstname is required"),
  lastname: Yup.string().required("Lastname is required"),
  phoneNumber: Yup.string()
  .min(11, 'Phone number cannot be less than 11 digits')
  .max(11, 'Exceeded characters for phone number')
  .required("Phonenumber is required").matches(
    /^-?[0-9]+(.[0-9]{1-7})?$/,
    "Enter a valid phone number"),
  email: Yup.string().email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Password cannot be less than 3 characters")
    .required("Password is required"),
});

export const ChangePasswordValidator = Yup.object({
  password:  Yup.string()
  .required('Password is required'),
  newpassword:  Yup.string()
  .required('Enter a new password'),
   confirm_password:Yup.string()
   .required("Passwords must match")
   .oneOf([Yup.ref('newpassword'), null], 'Passwords must match')
});


export const contactValidator = Yup.object({
  name: Yup.string().required("Name is required"),
  subject: Yup.string().required('Subject is required'),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

export const addGiftCardValidator = Yup.object({
  category: Yup.string()
    .required("Category is required"),
  newcategory: Yup.string(),
  subcategory: Yup.string()
    .required("Subcategory is required"),
  minAmount: Yup.string()
  .required("Minimum Amount is required")
  .matches(/^-?[0-9]+(.[0-9]{1-7})?$/, "Enter a valid amount"),
  maxAmount: Yup.string()
  .required("Maximum Amount is required")
  .matches(/^-?[0-9]+(.[0-9]{1-7})?$/, "Enter a valid amount"),
  rate: Yup.string()
  .required("Rate is required")
  .matches(/^-?[0-9]+(.[0-9]{1-7})?$/, "Enter a valid amount"),
  terms: Yup.string(),
});

export const accountDetailsValidator = Yup.object({
  bankCode: Yup.string()
  .required("Bank Name is required"),
  accountNumber:  Yup.string()
  .min(10, 'Account number cannot be less than 10 digits')
  .max(10, 'Exceeded characters for Account Number')
  .required("Account Number is required").matches(
    /^-?[0-9]+(.[0-9]{1-7})?$/,
    "Enter a valid Account Number"),
  accountName: Yup.string()
    .required("Account Name is required"),
});

export const DeclineTradeValidator = Yup.object({
  reason: Yup.string().required("Reason is required"),
});



export const tradeValidator = Yup.object({
  giftname: Yup.string()
  .required("Giftname is required"),
  category: Yup.string()
    .required("Select a category"),
  amount: Yup.string()
    .required("Enter an amount")
    .matches(/^-?[0-9]+(.[0-9]{1-7})?$/, "Enter a valid amount")
    .min(2, "Minimum amount is $25"),
  comment: Yup.string(),
});

export const withdrawValidator = Yup.object({
  accountType: Yup.string().required("Select an account"),
  narration: Yup.string(),
  amount: Yup.string()
    .required("Enter an amount")
    .matches(/^[0-9]*\.?[0-9]*$/, "Enter a valid amount"),
  pin: Yup.string()
    .min(4, "Pin cannot be less than 4 characters")
    .max(4, "Pin cannot be more than 4 characters")
    .required("Pin is required")
    .matches(/^-?[0-9]+(.[0-9]{1-7})?$/, "Enter a valid pin"),
});

export const airtimeValidator = Yup.object({
  provider: Yup.string().required("Select an provider"),
  amount: Yup.string()
    .required("Enter an amount")
    .matches(/^[0-9]*\.?[0-9]*$/, "Enter a valid amount"),
  phoneNumber: Yup.string()
    .min(10, "Phone number cannot be less than 10 digits")
    .max(10, "Exceeded characters for phone number")
    .required("Phonenumber is required")
    .matches(/^-?[0-9]+(.[0-9]{1-7})?$/, "Enter a valid phone number"),
});

export const filterValidator = Yup.object({
  status: Yup.string().required("Select a status"),
  amount: Yup.string()
    .matches(/^[0-9]*\.?[0-9]*$/, "Enter a valid amount"),
});


