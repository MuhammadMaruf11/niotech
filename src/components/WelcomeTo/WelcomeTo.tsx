const WelcomeTo = () => {
    return (
        <section className="bg-theme py-20">
            <div className="container mx-auto max-w-screen-xl">
                <h2 className="text-3xl uppercase text-center">
                    WELCOME TO NIOTECH
                </h2>
                <div className="py-6 text-white">
                    <ul className="flex justify-center gap-12 text-2xl list-disc ">
                        <li>Safer</li>
                        <li>Smarter</li>
                        <li>Simpler</li>
                    </ul>
                </div>
                <div className="space-y-5 text-white">
                    <p>Safer
                        Smarter
                        Simpler
                        Niotech Smart Solutions Ltd. has built its business around these core principles. We are system integrators, whose work is characterized by a steady stream of innovations that significantly influence the latest trends in automation. This is the way we achieve our ambitious goals.</p>
                    <p>We put all of our knowledge and creativity into efficiently integrating products that become trendsetting innovations. At Niotech, we turn this motto into reality by providing our customers with a complete automation solution that provides maximum flexibility and economic efficiency. We Believe, Our customers deserve the best. They deserve a simpler way into a safer, smarter solution.</p>
                    <p className="font-bold text-[#ffc107]">Come and experience the ultimate luxury with us!</p>
                </div>
            </div>
        </section>
    );
};

export default WelcomeTo;