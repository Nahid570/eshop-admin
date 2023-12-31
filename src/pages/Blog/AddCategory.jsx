import { Form, Formik } from "formik";
import { TextInput } from "../../utils/FormikHelper";
import * as Yup from "yup";

const validateInputs = Yup.object({
  title: Yup.string().required("Category is required"),
});

const AddCategory = () => {
  return (
    <>
      <p className="text-2xl text-slate-700 mb-5">Add New Blog Category</p>
      <Formik
        initialValues={{
          title: "",
        }}
        validationSchema={validateInputs}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="flex flex-col ">
          <TextInput name="title" placeholder="Category" />
          <button
            type="submit"
            className="w-[200px] p-2 bg-slate-700 rounded-md text-white mt-4 font-bold hover:bg-slate-900 duration-300 "
          >
            Add Category
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default AddCategory;
