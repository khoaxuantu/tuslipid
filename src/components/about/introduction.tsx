import { SkillBtnGroup } from "../button";


function AboutIntro() {
    return (
        <>
            <section className="mb-5">
                <h3 className="header-txt">
                    Get to know me
                </h3>
                <div className="row">
                    <div className="col-7 body-txt about-c-box__me p-2">
                        <p className="">
                            I am a web developer from Vietnam. You have learned how to call
                            me above, but I also use Tuslipid as my nickname across social medias and games.
                        </p>
                        <p className="mt-2">
                            I initially chose Mechanical Engineering as my major.
                            Still, with enthusiasm for programming and intelligent systems,
                            since my Sophomore year in late 2020, I have started self-studying Computer Science
                            simultaneously with advice from my seniors and professors
                            and attempted to develop further in this major.
                        </p>
                        <p className="mt-2">
                            I'm passionate about full-stack web development and cloud services, and currently
                            continuing my career development journey at {" "}
                            <a href="https://pixta.vn/" target="_blank" rel="noreferrer">Pixta Vietnam</a>.
                        </p>
                    </div>
                    <div className="col-5 sl-c-img__flex">
                        <img src="https://media.giphy.com/media/j0HjChGV0J44KrrlGv/giphy.gif" alt="typing cat" width={300} />
                    </div>
                </div>
            </section>
            <section className="mb-5 row">
                <h3 className="header-txt col-4 pe-5">
                    <span>I love learning and trying new things...</span>
                    <span>Let's me show you the things I'm confident</span>
                </h3>
                <SkillBtnGroup />
            </section>
        </>
    );
}

export default AboutIntro;
