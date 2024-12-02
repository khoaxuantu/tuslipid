import TabList from "../navtab";

function Works() {
  return (
    <section className="mb-5 row">
      <aside className="col-4 pb-3">
        <h2>About my experiences</h2>
        <blockquote>
          <i>
            I do mostly backend at work and frontend in my free time
          </i>
        </blockquote>
      </aside>
      <TabList />
    </section>
  );
}

export default Works;
