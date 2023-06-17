import { Form, Formik } from "formik";
import * as Yup from "yup";
import { TextInput } from "../../utils/FormikHelper";

const validateInputs = Yup.object({
  title: Yup.string().required("Color name is required"),
});

const AddColor = () => {
  return (
    <>
      <p className="text-2xl text-slate-700 mb-5">Add Color</p>
      <Formik
        initialValues={{
          title: "",
        }}
        validationSchema={validateInputs}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="flex flex-col gap-2">
          <TextInput name="title" type="text" placeholder="Color name" />
          <button
            type="submit"
            className="w-[200px] p-2 bg-slate-700 rounded-md text-white mt-4 font-bold hover:bg-slate-900 duration-300 "
          >
            Add Color
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default AddColor;
