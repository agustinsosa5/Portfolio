import "../../assets/Styles/section.css";

export default function section() {
  return (
    <section className="section">
      <div className="circle"></div>
      <div className="title">
        <h1 className="title-section">
          Web Developer<span>.</span>
        </h1>
        <p className="p-section">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit,
          deserunt!
        </p>
      </div>
      <div className="container-section">
        <div className="section-elements">
          <h2>Agustin Sosa</h2>
          <p>Web Developer</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos voluptates, illo quasi architecto rem praesentium eaque
            modi veritatis sint quos suscipit
          </p>

          <a href="" className="draw-border">Ver mas</a>
        </div>
        <div className="photo"></div>
      </div>
    </section>
  );
}
