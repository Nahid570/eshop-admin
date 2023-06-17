import { Form, Formik } from "formik";
import * as Yup from "yup";
import {
  SelectInput,
  TextInput,
  CustomReactQuill,
} from "../../utils/FormikHelper";

const validateInputs = Yup.object({
  title: Yup.string()
    .max(15, "Must be 15 characters or less")
    .min("5", "Must be 5 characters or more")
    .required("Title is required"),
});

const AddBlog = () => {
  return (
    <>
      <p className="text-2xl text-slate-700 mb-5">Add New Blog Post</p>
      <Formik
        initialValues={{
          title: "",
          category: "",
          blogimage: "",
          description: "",
        }}
        validationSchema={validateInputs}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="flex flex-col gap-2">
          <TextInput name="title" type="text" placeholder="Title" />
          <SelectInput name="category" type="select">
            <option value="">Select a blog type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </SelectInput>
          <TextInput name="blogimage" type="file" />
          <CustomReactQuill
            name="description"
            type="textarea"
            placeholder={"Write Something..."}
          />
          <button
            type="submit"
            className="w-[200px] p-2 bg-slate-700 rounded-md text-white mt-4 font-bold hover:bg-slate-900 duration-300 "
          >
            Add Blog
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default AddBlog;
