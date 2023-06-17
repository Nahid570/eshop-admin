import { Form, Formik } from "formik";
import * as Yup from "yup";
import { TextInput } from "../../utils/FormikHelper";

const validateInputs = Yup.object({
  name: Yup.string().required("Coupon name is required"),
  discount: Yup.string().required("Coupon should've discount"),
});

const AddCoupons = () => {
  return (
    <>
      <p className="text-2xl text-slate-700 mb-5">Add New Blog Post</p>
      <Formik
        initialValues={{
          name: "",
          expiry: "",
          discount: "",
        }}
        validationSchema={validateInputs}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="flex flex-col gap-2">
          <TextInput name="name" type="text" placeholder="Coupon name" />
          <TextInput name="discount" type="number" placeholder="Discount" />
          <button
            type="submit"
            className="w-[200px] p-2 bg-slate-700 rounded-md text-white mt-4 font-bold hover:bg-slate-900 duration-300 "
          >
            Add Coupon
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default AddCoupons;
