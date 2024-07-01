

const VideoComp = () => {
    return (
        <section className="bg-[url('/img/bg/videobackground.jpg')] bg-cover bg-center bg-no-repeat py-20">
            <div className="container mx-auto max-w-screen-lg">
                <h2 className="text-3xl mb-2 uppercase text-white text-center">Life is On! Powered by Schneider Electric</h2>
                <div className="w-2/3 mx-auto text-center">
                    <video poster="/img/bg/videobg.jpg" width='100%' controls preload="none">
                        <source src="/video/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag
                    </video>
                </div>
            </div>
        </section>
    );
};

export default VideoComp;