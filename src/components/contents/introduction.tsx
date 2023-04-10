import { SkillBtnGroup } from "../button";


function AboutIntro() {
    return (
        <>
            <section className="mb-5">
                <h3 className="header-txt">
                    Get to know me
                </h3>
                <div className="row">
                    <div className="col-7 description-txt lightgray-box p-2">
                        <p className="">
                            I am a new-grad student who just have graduated from the 
                            International Advanced Technology Program (IATP) at NTUST. 
                        </p>
                        <p className="mt-2">
                            I initially chose Mechanical Engineering as my main major, 
                            but with enthusiasm for programming and intelligent systems, 
                            since my Sophomore year in late 2020, I have started self-studying Computer Science
                            simultaneously with advice from my seniors and professors 
                            and attempted to develop further in this major. 
                        </p>
                        <p className="mt-2">
                            Currently, I am focusing on fullstack web development
                            and cloud services; and seeking a full-time position 
                            in backend or frontend. But if there is any opportunity
                            in other software-related fields (such as game, mobile, system,
                            etc...), I would love to challenge myself as well.
                        </p>
                    </div>
                    <div className="col-5 flex-image">
                        <img src="https://media.giphy.com/media/j0HjChGV0J44KrrlGv/giphy.gif" alt="typing cat" width={300} />
                    </div>
                </div>
            </section>
            <section className="mb-5">
                <div className="row">
                    <h3 className="header-txt">
                        I love learning and trying new things, here are some tools that I have used
                    </h3>
                </div>
                <SkillBtnGroup />
            </section>
        </>
    );
}

export default AboutIntro;