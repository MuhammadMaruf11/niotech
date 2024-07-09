

const ContactForm = () => {
    return (
        <section className='py-12'>
            <div className="container mx-auto max-w-screen-lg px-3">
                <div className="grid gap-6 grid-cols-12">
                    <div className="col-span-8">
                        <div className="mb-6">
                            <h4 className="mb-2">Online Enquiry</h4>
                            <p>Please fill the following form and send to us:</p>
                        </div>
                        <div className="space-y-2">
                            <input type="text" placeholder="Your Name" />
                        </div>
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