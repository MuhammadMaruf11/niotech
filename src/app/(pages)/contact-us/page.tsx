import ContactForm from "@/components/ContactUsComp/ContactForm";
import ContactInformation from "@/components/ContactUsComp/ContactInformation";
import ContactMap from "@/components/ContactUsComp/ContactMap";
import ContactUsBanner from "@/components/ContactUsComp/ContactUsBanner";

const ContactUs = () => {


    return (
        <main>
            <ContactUsBanner />
            <ContactForm />
            <ContactInformation />
            <ContactMap />
        </main>
    );
};

export default ContactUs;