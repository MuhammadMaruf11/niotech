import Link from "next/link";

export default function NotFound() {
    return (
        <section className="py-20">
            <div className="container mx-auto text-center max-w-screen-xl">
                <div className="mb-12">
                    <h2 className="font-bold mb-2">404 Error!</h2>
                    <h4>Page Not Found</h4>
                </div>
                <Link className="btn-theme" href='/'>Retrun Home</Link>
            </div>
        </section>
    )
}