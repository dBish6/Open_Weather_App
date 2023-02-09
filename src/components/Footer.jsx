// *Design Imports*
import { ImGithub } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="quizFooter">
      <div>
        <p className="ifSnow">
          Developer: <span>David Bishop</span>
        </p>
        &nbsp;
        <a
          href="https://github.com/dBish6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImGithub />
        </a>
      </div>
      <h2 className="ifSnow">Global Weather</h2>
    </footer>
  );
};

export default Footer;
