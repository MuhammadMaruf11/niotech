import * as Yup from "yup";

export const contactValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  mobile: Yup.string().required("Mobile number is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string()
    .required("Message is required")
    .min(80, "Message must be at least 80 characters")
    .max(300, "Message cannot exceed 300 characters"),
});
