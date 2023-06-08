import Container from "../Container/Container";
import img from "../../../assets/summer-camp.jpg";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <Container>
        <footer className="footer p-10 bg-slate-300 text-base-content">
          <div className="mx-auto">
            <img className="rounded" src={img} alt="" width="100" height="100" />
            <p className="mt-4">Copyright © 2023 - All right reserved</p>
          </div>
          <div>
            <span className="footer-title text-slate-600">Address</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title text-slate-600">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
          <div>
            <span className="footer-title text-slate-600">Contact</span>
            <div className="flex gap-2">
              <div>
                <FaTwitter size={30} />
              </div>
              <div>
                <FaYoutube size={30} />
              </div>
              <div>
                <FaFacebook size={30} />
              </div>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
