import { getEduImgs } from "@/lib/factory/importMedia";

async function Education() {
  const eduImgs = await getEduImgs();

  return (
    <section className="mb-5 row">
      <h2 className="col-4 pt-2 pb-3">Where I studied</h2>
      <div className="col-8">
        <div className="pt-2 pb-2 d-flex">
          <div className="about-l-wrapper__edu-content pe-3">
            <h5>
              <span>National Taiwan University</span>{" "}
              <span>of Science and Technology</span>
            </h5>
            <div className="bt-1">
              <span>Bachelor of Science - BSc,</span>
              <span>
                Computer Science / <span>Mechanical Engineering</span>
              </span>
            </div>
            <div className="bt-1 mb-2" style={{ opacity: 0.5 }}>
              Sep 2018 - July 2022
            </div>
            <div>
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
          <div className="about-c-img__edu">
            <img src={eduImgs.TaiwanTech} alt="" width={64} />
          </div>
        </div>
        <div className="mt-3 pt-2 pb-2 d-flex">
          <div className="about-l-wrapper__edu-content pe-3">
            <h5>
              <span>Hanoi - Amsterdam</span> <span>High School</span>{" "}
              <span>for the Gifted</span>
            </h5>
            <div className="bt-1">History</div>
            <div className="bt-1 mb-3" style={{ opacity: 0.5 }}>
              Aug 2015 - May 2018
            </div>
          </div>
          <div className="about-c-img__edu">
            <img src={eduImgs.HanoiAms} alt="" width={64} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
