import { Form, Formik } from "formik";
import * as Yup from "yup";
import { TextInput } from "../../utils/FormikHelper";

const validateInputs = Yup.object({
  title: Yup.string().required("Brand name is required"),
});

const AddBrand = () => {
  return (
    <>
      <p className="text-2xl text-slate-700 mb-5">Add Brand</p>
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
          <TextInput name="title" type="text" placeholder="Brand name" />
          <button
            type="submit"
            className="w-[200px] p-2 bg-slate-700 rounded-md text-white mt-4 font-bold hover:bg-slate-900 duration-300 "
          >
            Add Brand
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default AddBrand;
