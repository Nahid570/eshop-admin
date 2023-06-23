import { Form, Formik } from "formik";
import * as Yup from "yup";
import { TextInput } from "../utils/FormikHelper";
import { useLoginMutation } from "../features/auth/authApiSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/auth/authSlice";

const validateInputs = Yup.object({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const [login, { isLoading, error }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="p-5 bg-gray-300 min-h-screen w-[100%] flex justify-center flex-col items-center">
      <p className="text-2xl text-slate-700 font-bold mb-5 underline">
        Admin Login
      </p>
      {error?.data?.message && (
        <p className="text-red-700 mb-2 font-bold">{error.data.message}</p>
      )}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validateInputs}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const result = await login(values).unwrap();
            dispatch(setCredentials(result));
            // Store the user in LocalStorage
            let currUser = {
              firstName: result?.firstName,
              role: result?.role,
              token: result?.token,
            };
            localStorage.setItem("user", JSON.stringify(currUser));
            setSubmitting(false);
            navigate("admin");
          } catch (error) {
            return error;
          }
        }}
      >
        <Form className="flex flex-col gap-2 w-full sm:w-[60%]">
          <TextInput name="email" type="email" placeholder="Email" />
          <TextInput name="password" type="password" placeholder="Password" />
          <button
            type="submit"
            className="w-[200px] p-2 bg-slate-700 rounded-md text-white mt-4 font-bold hover:bg-slate-900 duration-300 "
          >
            {!isLoading ? "Login" : "Hang On..."}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
