import SigninForm from "../Components/SigninForm";

const SigninPage = (props) => {
  return (
    <div className="SigninPage">
      <SigninForm onSubmit={props.onSubmit} />
    </div>
  );
};

export default SigninPage;
