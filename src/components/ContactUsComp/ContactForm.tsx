'use client'
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { contactValidationSchema } from "../schema/ContactValidationSchema";
import { contactInitialValue } from "../initialValue/ContactInitialValue";

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
        console.log('Form submitted:', typeof values);
        setSubmitting(false); // Reset form submit state
    };

    return (
        <section className='py-12'>
            <div className="container mx-auto max-w-screen-lg px-3">
                <div className="grid gap-6 grid-cols-12">
                    <div className="col-span-8">
                        <div className="mb-6">
                            <h4 className="mb-2">Online Enquiry</h4>
                            <p>Please fill the following form and send to us:</p>
                        </div>
                        <Formik initialValues={contactInitialValue} validationSchema={contactValidationSchema} onSubmit={handleSubmit}>
                            {({ isSubmitting }) => (
                                <Form className="space-y-4">
                                    <div className="">
                                        <Field type="text" name="name" placeholder="Enter Name" />
                                        <ErrorMessage name="name" component="div" className="error" />
                                    </div>
                                    <div className="">
                                        <Field type="email" name="email" placeholder="Email Address" />
                                        <ErrorMessage name="email" component="div" className="error" />
                                    </div>
                                    <div className="">
                                        <Field type="text" name="mobile" placeholder="Mobile" />
                                        <ErrorMessage name="mobile" component="div" className="error" />
                                    </div>
                                    <div className="">
                                        <Field type="text" name="subject" placeholder="Enter Subject" />
                                        <ErrorMessage name="subject" component="div" className="error" />
                                    </div>
                                    <div className="">
                                        <Field as="textarea" name="message" placeholder="Enter Message" id="" />
                                        <ErrorMessage name="message" component="div" className="error" />
                                        <span><strong>Hint:</strong> Please enter between 80 - 300 characters.</span>
                                    </div>
                                    <div className="">
                                        <button type="submit" className="btn-theme" disabled={isSubmitting}>
                                            {isSubmitting ? 'Submitting...' : 'Submit'}
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className="col-span-4">
                        <div className="mb-6">
                            <h4 className="mb-2">Address:</h4>
                        </div>
                        <ul>
                            <li> <strong>Niotech Smart Solutions Ltd.</strong></li>
                            <li>House: 14, Road: 15,</li>
                            <li>Rupnagar R/A, Mirpur, Dhaka - 1216</li>
                            <li>Bangladesh</li>
                            <li>Tel: +8809611900351</li>
                            <li>Email: info@theniotech.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;