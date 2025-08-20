import { SITE_URL } from "@/config/siteConfig";
import ConceptText from "./ConceptText";
import ConceptsItem from "./ConceptsItem";

const Concepts = async () => {

    const res = await fetch(`${SITE_URL}/api/home/concepts`, {
        cache: "no-store",
    })

    const data = await res.json()

    const { conceptItemImgData } = data;

    return (
        <section className="py-20">
            <div className="container mx-auto max-w-screen-lg px-3">
                <ConceptsItem conceptItemImgData={conceptItemImgData} />
                <ConceptText />
            </div>
        </section>
    );
};

export default Concepts;