import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Data Engineer with 4+ years of experience building scalable ETL/ELT pipelines
          using Databricks, Azure Data Factory, Python, and PySpark. Skilled in
          modernizing on-prem systems to cloud-native architectures, IoT data integrations,
          and ensuring secure cloud infrastructure using Kubernetes and Terraform.
          Passionate about creating high-performance, production-ready data solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
