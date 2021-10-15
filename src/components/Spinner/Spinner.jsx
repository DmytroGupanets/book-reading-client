import Loader from "react-loader-spinner";
import SpinnerStyled from "./SpinnerStyled";

const Spinner = () => {
  return (
    <SpinnerStyled>
      <Loader type="ThreeDots" color="#FF6B08" height={100} width={100} />
    </SpinnerStyled>
  );
};

export default Spinner;
