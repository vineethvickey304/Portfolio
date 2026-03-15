import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer (Work Study)</h4>
                <h5>E.ON Drive Infrastructure</h5>
              </div>
              <h3>2024 - Present</h3>
            </div>
            <p>
              Developed operational data-driven solutions for EV infrastructure.
              Architected scalable pipelines using Databricks and Terraform,
              ensuring secure cloud architecture and global scalability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Business Data Engineering Analyst</h4>
                <h5>Impact Big data analytics</h5>
              </div>
              <h3>2022 - 2024</h3>
            </div>
            <p>
              Led the lifecycle of production-grade ETL/ELT pipelines, managing
              high-volume datasets. Partnered with cross-functional business units
              to align data solutions with domain-specific requirements.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer</h4>
                <h5>ASML via TCS</h5>
              </div>
              <h3>2020 - 2022</h3>
            </div>
            <p>
              Collaborated in an Agile team to modernize on-prem systems to
              cloud-native architectures. Contributed to modernization using
              Azure Databricks and Data Factory, improving performance by 40%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
