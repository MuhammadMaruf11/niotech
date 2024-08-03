'use client';
import { contactInitialValue } from "@/initialValue/ContactInitialValue";
import { contactValidationSchema } from "@/schema/ContactValidationSchema";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { motion } from 'framer-motion';

interface MyFormValues {
    name: string;
    email: string;
    mobile: string;
    subject: string;
    message: string;
}

const ContactForm = () => {
    const handleSubmit = (values: MyFormValues, { setSubmitting }: FormikHelpers<MyFormValues>) => {
        // Handle form submission logic (e.g., send data to server)
        console.log('Form submitted:', values);
        setSubmitting(false); // Reset form submit state
    };

    const animationProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    return (
        <section className='py-12 bg-gray-50'>
            <div className="container mx-auto max-w-screen-lg px-3">
                <div className="grid gap-6 grid-cols-12">
                    <motion.div
                        className="lg:col-span-8 col-span-12 bg-white p-6 rounded-lg shadow-lg"
                        {...animationProps}
                    >
                        <div className="mb-6">
                            <h4 className="text-xl font-semibold mb-2">Online Enquiry</h4>
                            <p>Please fill out the form below and send it to us:</p>
                        </div>
                        <Formik initialValues={contactInitialValue} validationSchema={contactValidationSchema} onSubmit={handleSubmit}>
                            {({ isSubmitting }) => (
                                <Form className="space-y-4">
                                    {['name', 'email', 'mobile', 'subject', 'message'].map((field, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex flex-col"
                                            {...animationProps}
                                            transition={{ ...animationProps.transition, delay: index * 0.1 }}
                                        >
                                            <Field
                                                type={field === 'message' ? 'textarea' : 'text'}
                                                name={field}
                                                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                                className="p-3 border border-gray-300 rounded-md"
                                            />
                                            <ErrorMessage name={field} component="div" className="text-red-500 text-sm mt-1" />
                                            {field === 'message' && (
                                                <span className="text-sm text-gray-500 mt-1">
                                                    <strong>Hint:</strong> Please enter between 80 - 300 characters.
                                                </span>
                                            )}
                                        </motion.div>
                                    ))}
                                    <motion.div
                                        className="flex justify-center"
                                        {...animationProps}
                                        transition={{ ...animationProps.transition, delay: 0.5 }}
                                    >
                                        <button
                                            type="submit"
                                            className="btn-theme px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? 'Submitting...' : 'Submit'}
                                        </button>
                                    </motion.div>
                                </Form>
                            )}
                        </Formik>
                    </motion.div>
                    <motion.div
                        className="lg:col-span-4 col-span-12"
                        {...animationProps}
                        transition={{ ...animationProps.transition, delay: 0.3 }}
                    >
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h4 className="text-xl font-semibold mb-2">Address:</h4>
                            <ul className="space-y-2">
                                {[
                                    "Niotech Smart Solutions Ltd.",
                                    "House: 14, Road: 15,",
                                    "Rupnagar R/A, Mirpur, Dhaka - 1216",
                                    "Bangladesh",
                                    "Tel: +8809611900351",
                                    "Email: info@theniotech.com"
                                ].map((line, index) => (
                                    <motion.li
                                        key={index}
                                        {...animationProps}
                                        transition={{ ...animationProps.transition, delay: 0.2 + index * 0.1 }}
                                    >
                                        {line}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
