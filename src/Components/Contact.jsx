import Form from "./Common/Form";
import { FaHandshake } from "react-icons/fa";
import Header from "./Common/Header";

export class Contact extends Form {
  render() {
    return (
      <div id="contact" className="contact-container space-y-15">
        <Header label={`Tell me about your next project`} />
        <div className="form-container space-y-15 flex flex-col md:space-y-0 items-center p-10 md:flex-row-reverse justify-between">
          <div className="image-container flex justify-center md:w-[50%]">
            <FaHandshake className="text-[10rem] dark:text-white" />
          </div>
          <div className="form-container w-full">
            <form
              action="https://api.web3forms.com/submit"
              className="flex flex-col p-5 space-y-5 w-full"
              method="post"
            >
              {this.renderInput(
                "access_key",
                "",
                "",
                "hidden",
                "c8d8972d-5ef7-411f-ac0e-359bcd7b2b49"
              )}
              {this.renderInput(
                "name",
                "Your Name",
                `placeholder-[#818181] dark:placeholder-gray-300 h-10 w-full rounded-lg p-4 dark:text-white focus:outline-1 focus:outline-[#626262] focus:ring-3 focus:ring-[#5a5a5a6f] dark:focus:ring-[#626262] dark:focus:outline-[#fff] duration-500 bg-[#b7b7b776] dark:bg-[#3d3d3d] shadow-xl dark:shadow-[#303030]`
              )}
              {this.renderInput(
                "email",
                "Your Email",
                `placeholder-[#818181] dark:placeholder-gray-300 h-10 w-full rounded-lg p-4 dark:text-white focus:outline-1 focus:outline-[#626262] focus:ring-3 focus:ring-[#5a5a5a6f] dark:focus:ring-[#626262] dark:focus:outline-[#fff] duration-500 bg-[#b7b7b776] dark:bg-[#3d3d3d] shadow-xl dark:shadow-[#303030]`,
                "email"
              )}
              {this.renderTextArea(
                "Message",
                "Tell Me Right Now",
                "placeholder-[#818181] dark:placeholder-gray-300 h-20 w-full rounded-lg p-4 dark:text-white focus:outline-1 focus:outline-[#626262] focus:ring-3 focus:ring-[#5a5a5a6f] dark:focus:ring-[#626262] dark:focus:outline-[#fff] duration-500 bg-[#b7b7b776] dark:bg-[#3d3d3d] shadow-xl dark:shadow-[#303030]"
              )}
              {this.renderInput("botcheck", "checkbox", `hidden`, "checkbox", {
                display: "none",
              })}
              {this.renderButton(
                "Submit",
                "submit",
                "bg-black text-white rounded-lg h-10 font-bold dark:bg-white w-full hover:shadow-lg hover:shadow-[gray] dark:text-black duration-300"
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
