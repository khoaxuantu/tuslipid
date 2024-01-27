import { getEduImgs } from "@/lib/factory/importMedia";

async function Education() {
  const eduImgs = await getEduImgs();

  return (
    <section className="mb-5 row">
      <h3 className="header-txt col-4 pe-5">Where I studied</h3>
      <div className="col-8">
        <div className="pt-2 pb-2 d-flex">
          <div className="edu-content-grp pe-3">
            <h3>
              <span>National Taiwan University</span>{" "}
              <span>of Science and Technology</span>
            </h3>
            <div className="bt-1">
              <span>Bachelor of Science - BSc,</span>
              <span>
                Computer Science / <span>Mechanical Engineering</span>
              </span>
            </div>
            <div className="bt-1 mb-2" style={{ opacity: 0.5 }}>
              Sep 2018 - July 2022
            </div>
            <div className="body-txt">
              <b>
                <i>Specialization: </i>
              </b>
              <ul
                style={{ listStyleType: "unset", listStylePosition: "inside" }}
              >
                <li>Software Engineering</li>
                <li>Algorithms & Data Structure</li>
                <li>Machine Learning</li>
                <li>Automation Control</li>
              </ul>
            </div>
          </div>
          <div className="edu-image">
            <img src={eduImgs.TaiwanTech} alt="" width={64} />
          </div>
        </div>
        <div className="mt-3 pt-2 pb-2 d-flex">
          <div className="edu-content-grp pe-3">
            <h3>
              <span>Hanoi - Amsterdam</span> <span>High School</span>{" "}
              <span>for the Gifted</span>
            </h3>
            <div className="bt-1">History</div>
            <div className="bt-1 mb-3" style={{ opacity: 0.5 }}>
              Aug 2015 - May 2018
            </div>
          </div>
          <div className="edu-image">
            <img src={eduImgs.HanoiAms} alt="" width={64} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
