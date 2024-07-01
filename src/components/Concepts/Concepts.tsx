import ConceptText from "./ConceptText";
import ConceptsItem from "./ConceptsItem";

const Concepts = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto max-w-screen-lg px-3">
                <ConceptsItem />
                <ConceptText />
            </div>
        </section>
    );
};

export default Concepts;