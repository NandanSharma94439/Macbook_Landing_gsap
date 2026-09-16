import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowCase = () => {

    const isTablet = useMediaQuery({
        query: "(max-width:1034px)"
    });

    useGSAP(() => {

        if (!isTablet) {

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: "#showcase",
                    start: "top top",
                    end: "+=1000",
                    scrub: 1,
                    pin: true,
                }
            });

            timeline
                .to(".mask img", {
                    scale: 1.1,
                    ease: "none",
                })
                .to(".content", {
                    opacity: 1,
                    y: 0,
                    ease: "none",
                });
        }

    }, [isTablet]);


    return (
        <section id="showcase">

            <div className="media">

                <video
                    src="/videos/game.mp4"
                    loop
                    muted
                    autoPlay
                    playsInline
                />

                <div className="mask">
                    <img
                        src="/mask-logo.svg"
                        alt="logo-mask"
                    />
                </div>

            </div>


            <div className="content">

                <div className="wrapper">

                    <div className="lg:max-w-md">

                        <h2>Rocket Chip</h2>

                        <div className="space-y-5 mt-7 pe-10">

                            <p>
                                Introducing{" "}
                                <span className="text-white">
                                    M4, the next generation of Apple Silicon
                                </span>
                                M4 Powers
                            </p>

                            <p>
                                It drives Apple Intelligence on iPad Pro,
                                so you can write, create, and accomplish more
                                with ease. All in a design that's unbelievably
                                thin, light, and powerful.
                            </p>

                            <p>
                                A brand-new display engine delivers breathtaking
                                precision, color accuracy, and brightness. And
                                a next-gen GPU with hardware-accelerated ray
                                tracing brings console-level graphics to your
                                fingertips.
                            </p>

                            <p className="text-primary">
                                Learn More about Apple Intelligence
                            </p>

                        </div>

                    </div>


                    <div className="max-w-3xs space-y-14">

                        <div className="space-y-2">
                            <p>Up To</p>
                            <h3>4x faster</h3>
                            <p>Pro rendering performance than M2</p>
                        </div>

                        <div className="space-y-2">
                            <p>Up To</p>
                            <h3>1.5x faster</h3>
                            <p>CPU performance than M2</p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ShowCase;