import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const StyledDatePicker = styled(DatePicker)`
  margin-bottom: 5px;
  height: 30px;
  background: transparent;
  border-bottom: 1px solid white;
  outline: none;
  color: rgba(255, 255, 255, 0.741);
  ::placeholder {
    color: white;
    font-weight: bold;
    font-size: 18px;
    outline: none;
  }
  &:focus {
    box-shadow: none;
  }
  &::after {
    display: none;
  }
`;

export default StyledDatePicker;
