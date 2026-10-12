import { getEduImgs } from "@/lib/factory/import-media";

async function Education() {
  const eduImgs = await getEduImgs();

  return (
    <section id="education">
      <aside>
        <h2>About my educations</h2>
        <blockquote>
          <i>
            Mathematics
            <br />-{">"} History
            <br />-{">"} Mechanical Engineering
            <br />-{">"} Computer Science
          </i>
        </blockquote>
      </aside>
      <div className="content">
        <div className="row">
          <hgroup>
            <h5>
              <span>National Taiwan University</span>{" "}
              <span>of Science and Technology</span>
            </h5>
            <div className="subtitle">
              <span>Bachelor of Science - BSc,</span>
              <span>
                Computer Science / <span>Mechanical Engineering</span>
              </span>
            </div>
            <div className="time">Sep 2018 - July 2022</div>
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
          </hgroup>
          <figure>
            <img src={eduImgs.TaiwanTech} alt="NTUST logo" width={64} />
          </figure>
        </div>
        <div className="row">
          <hgroup>
            <h5>
              <span>Hanoi - Amsterdam</span> <span>High School</span>{" "}
              <span>for the Gifted</span>
            </h5>
            <div className="subtitle">History</div>
            <div className="time">Aug 2015 - May 2018</div>
          </hgroup>
          <figure>
            <img
              src={eduImgs.HanoiAms}
              alt="Hanoi-Ams high school logo"
              width={64}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Education;
