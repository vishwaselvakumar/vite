import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { TbDeviceMobile } from "react-icons/tb";
import india from '../../images/hero/india.png';
import usa from '../../images/hero/united-states.png';
import whatsapp from '../../images/our_services/social-medias/whatsapp.png'
import facebook from '../../images/our_services/social-medias/facebook.webp'
import twitter from '../../images/our_services/social-medias/twitter.png'
import linkedin from '../../images/our_services/social-medias/linkedin.png'
import youtube from '../../images/our_services/social-medias/youtube.png'
import instagram from '../../images/our_services/social-medias/Instagram.webp'
import location from '../../images/our_services/social-medias/location.jpeg'

function Footer() {
  return (
    <>
      <footer className="bg-[#b3eeff5c] ">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center p-5 md:p-10 w-[97%]">
          <div className="gap-[0.5px] grid">
            <h2 className="text-xl font-bold">Ultrafly Solutions</h2>
            <p className="font-medium hover:text-blue-600">
              <a href="https://tinyurl.com/bpbxt9ra">
              <img src={india} alt="india" className="inline-block w-4 h-4" />
              {"  "}<b>Office Address: India</b><br />
              27/9, Nivedh Vikas, Pankaja Mills <br />Road, Puliakulam,  <br />
              Coimbatore-641 045.
              </a>
            </p>
            <br />
            <p className="font-medium hover:text-blue-600">
              <img src={usa} alt="usa" className="inline-block w-4 h-4" />
              {"  "}<b>Office Address: USA</b><br />
              1101 Iroquois Ave, Naperville,<br /> Illinois- 60563.
            </p>
          </div>


          <div className="gap-[0.2px] grid">
            <h2 className="text-xl font-bold ">Terms & Policy</h2>
            <Link to="/privacy-policy">
              <p className="font-medium hover:text-blue-600">Privacy Policy</p>
            </Link>
            <Link to="#">
              <p className="font-medium hover:text-blue-600">Cookie Policy</p>
            </Link>
            <Link to="#">
              <p className="font-medium hover:text-blue-600">Terms and Conditions</p>
            </Link>
            <h2 className="text-xl font-bold mt-4">Resources</h2>
            <Link to="/blog">
              <p className="font-medium hover:text-blue-600">Blogs</p>
            </Link>
            {/* <Link to="#">
              <p className="font-medium hover:text-blue-600">Case Studies</p>
            </Link> */}
            <Link to="/careers">
              <p className="font-medium hover:text-blue-600">Career</p>
            </Link>
          </div>


          <div className="gap-[0.5px] grid">
            <h2 className="text-xl font-bold">Services</h2>
            <Link to="/website-development-company">
              <p className="font-medium text-[16px] hover:text-blue-600">Website Development</p>
            </Link>
            <Link to="/software-development">
              <p className="font-medium text-[16px] hover:text-blue-600">Software Development</p>
            </Link>
            <Link to="/mobile-app-development">
              <p className="font-medium text-[16px] hover:text-blue-600">Mobile Application Development</p>
            </Link>
            <Link to="/it-staffing">
              <p className="font-medium text-[16px] hover:text-blue-600">IT Staffing</p>
            </Link>
            <Link to="/digital-marketing-company">
              <p className="font-medium text-[16px] hover:text-blue-600">SEO & Digital Marketing</p>
            </Link>
          </div>


          <div className="gap-[0.5px] grid">
            <h2 className="text-xl font-bold">Contact</h2>
            <Link to="">
              <a href="mailto:hr@ultraflysolutions.com" className="flex item-center gap-2 hover:text-blue-600">
                <MdOutlineEmail className="mt-1" /> info@ultraflysolutions.com
              </a>
            </Link>
            <Link to="/">
              <p className="flex items-center gap-2 hover:text-blue-600">
                <img src={india} alt="india" className="w-4 h-4" />
                +91 91500 01089
              </p>
            </Link>

            <p className="flex items-center gap-2 hover:text-blue-600">
              <img src={india} alt="india" className="w-4 h-4" />
              +91 91500 01090
            </p>
            <p className="flex items-center gap-2 hover:text-blue-600">
              <img src={usa} alt="usa" className="w-4 h-4" />
              +1 562 521 9684
            </p>

            <h2 className="text-xl font-bold mt-4">Social</h2>
            <div className=" py-6">
              <div className="container mx-auto flex justify-center">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-10 md:gap-4 ">
                  <a
                    href="https://www.facebook.com/ultraflysolutions"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src={facebook}
                      alt="Facebook"
                      className="bg-[#efefef] rounded-xl h-10 w-10"
                    />
                  </a>

                  <a
                    href="https://twitter.com/UltraflyS"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src={twitter}
                      alt="Twitter"
                      className="bg-[#efefef] rounded-xl h-10 w-10"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/ultraflysolutions/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src={linkedin}
                      alt="LinkedIn"
                      className="bg-[#efefef] rounded-xl h-10 w-10"
                    />
                  </a>

                  <a
                    href="https://www.instagram.com/ultraflysolutions/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src={instagram}
                      alt="Instagram"
                      className="bg-[#efefef] rounded-xl h-10 w-10"
                    />
                  </a>

                  <a
                    href="https://tinyurl.com/bpbxt9ra"
                    target="_blank"
                    rel="noopener noreferrer">
                     <img
                      src={location}
                      alt="location"
                      className="bg-[#efefef] rounded-xl h-10 w-10"
                    />
                  </a>

                  <a
                    href="https://www.youtube.com/channel/UC2mcL17ybjrgSQ6hJnboeTw"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src={youtube}
                      alt="YouTube"
                      className="bg-[#efefef] rounded-xl h-10 w-10"
                    />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        <hr />
        <div>
          <p className="text-center py-4 text-[#a2a2a2] text-[10px] sm:text-base">
            Copyright © 2024 Ultrafly Solutions – All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
