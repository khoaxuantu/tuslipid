import ImportMedia from "../../lib/factory/importMedia";


const reqEduImgs = require.context('../../../public/images/edu', true, /\.webp$/);
const EduImgs = new ImportMedia(reqEduImgs).get();

function Education() {
    return (
        <section className="mb-5">
            <h3 className="header-txt">
                Where I studied
            </h3>
            <div className="p-2 works-grp d-flex">
                <div className="edu-image">
                    <img src={EduImgs.TaiwanTech} alt="" width={64}/>
                </div>
                <div className="ps-2 pe-2 edu-content-grp">
                    <h3>National Taiwan University of Science and Technology</h3>
                    <div className="bt-1">
                        Bachelor of Science - BS, Computer Science / Mechanical Engineering
                    </div>
                    <div className="bt-1 mb-2" style={{opacity: 0.5}}>
                        Sep 2018 - July 2022
                    </div>
                    <div className="description-txt">
                        <ul style={{listStyleType: "unset", listStylePosition:"inside"}}>
                            <b><i>Specialization: </i></b>
                            <li className="">Software Engineering</li>
                            <li>Algorithms & Data Structure</li>
                            <li>Machine Learning</li>
                            <li>Automation Control</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-3 p-2 works-grp d-flex">
                <div className="edu-image">
                    <img src={EduImgs.HanoiAms} alt="" width={64}/>
                </div>
                <div className="ps-2 pe-2 edu-content-grp">
                    <h3>Hanoi - Amsterdam High School for the Gifted</h3>
                    <div className="bt-1">History</div>
                    <div className="bt-1 mb-3" style={{opacity: 0.5}}>
                        Aug 2015 - May 2018
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;