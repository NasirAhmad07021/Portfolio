import React, { Component } from "react";
import { BiCamera } from "react-icons/bi";
import Form from "../Components/Common/Form";

class TestimonialForm extends Form {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      role: "",
      content: "",
      rating: 5,
      image: "",
    };
  }

  handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      const file = files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        this.setState({ image: reader.result });
      };

      reader.readAsDataURL(file);
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = () => {
    const { onSave, navigate } = this.props;

    onSave({
      ...this.state,
      id: Date.now(),
    });

    navigate("/");
  };

  render() {
    const { image } = this.state;

    return (
      <div className="max-w-xl mx-auto p-8 space-y-5">
        <h2 className="text-2xl font-bold text-center">
          Share Your Experience
        </h2>

        <input
          type="file"
          name="image"
          id="image"
          accept="image/*"
          onChange={this.handleChange}
          className="hidden"
        />
        {/* {this.renderInput("image", "file", "Upload Photo")} */}
        <label htmlFor="image" className="flex items-center cursor-pointer">
          {image ? (
            <>
            
              <img
                src={image}
                alt="uploaded"
                className="w-[72px] h-[72px] object-cover rounded-full m-2"
              />
              <span className="font-bold text-black dark:text-white">
                Change your photo
              </span>
            </>
          ) : (
            <>
              <BiCamera className="text-7xl p-2 rounded-full m-2 bg-[#000000] text-white dark:bg-white dark:text-black" />
              <span className="font-bold text-black dark:text-white">
                Upload your photo
              </span>
            </>
          )}
        </label>

        <input
          name="name"
          placeholder="Your Name"
          onChange={this.handleChange}
          className="placeholder-[#818181] dark:placeholder-gray-300 h-10 w-full rounded-lg p-4 dark:text-white focus:outline-1 focus:outline-[#626262] focus:ring-3 focus:ring-[#5a5a5a6f] dark:focus:ring-[#626262] dark:focus:outline-[#fff] duration-500 bg-[#b7b7b776] dark:bg-[#3d3d3d] shadow-xl dark:shadow-[#303030]"
        />

        <input
          name="role"
          placeholder="Frontend / Full Stack"
          onChange={this.handleChange}
          className="placeholder-[#818181] dark:placeholder-gray-300 h-10 w-full rounded-lg p-4 dark:text-white focus:outline-1 focus:outline-[#626262] focus:ring-3 focus:ring-[#5a5a5a6f] dark:focus:ring-[#626262] dark:focus:outline-[#fff] duration-500 bg-[#b7b7b776] dark:bg-[#3d3d3d] shadow-xl dark:shadow-[#303030]"
        />

        <textarea
          name="content"
          placeholder="Your Comment"
          onChange={this.handleChange}
          className="placeholder-[#818181] dark:placeholder-gray-300 w-full rounded-lg p-4 dark:text-white focus:outline-1 focus:outline-[#626262] focus:ring-3 focus:ring-[#5a5a5a6f] dark:focus:ring-[#626262] dark:focus:outline-[#fff] duration-500 bg-[#b7b7b776] dark:bg-[#3d3d3d] shadow-xl dark:shadow-[#303030]"
        />

        <input
          type="number"
          name="rating"
          min="1"
          max="5"
          placeholder="Rating"
          onChange={this.handleChange}
          className="placeholder-[#818181] dark:placeholder-gray-300 h-10 w-full rounded-lg p-4 dark:text-white focus:outline-1 focus:outline-[#626262] focus:ring-3 focus:ring-[#5a5a5a6f] dark:focus:ring-[#626262] dark:focus:outline-[#fff] duration-500 bg-[#b7b7b776] dark:bg-[#3d3d3d] shadow-xl dark:shadow-[#303030]"
        />

        <button
          onClick={this.handleSubmit}
          className="bg-black text-white rounded-lg h-10 font-bold dark:bg-white w-full hover:shadow-lg hover:shadow-[gray] dark:text-black duration-300"
        >
          Save Testimonial
        </button>
      </div>
    );
  }
}

export default TestimonialForm;
