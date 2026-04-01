import { useNavigate } from "react-router-dom";
import TestimonialForm from "../../Pages/TestimonialForm";

const TestimonialFormWrapper = (props) => {
  const navigate = useNavigate();
  return <TestimonialForm {...props} navigate={navigate} />;
};

export default TestimonialFormWrapper;
