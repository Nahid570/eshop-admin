/* eslint-disable react/prop-types */
import { useField } from "formik";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className="p-3 outline-none focus:border border-green-400 rounded-md text-lg bg-white2"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <p className="text-red-600 mt-2">{meta.error}</p>
      ) : null}
    </>
  );
};

export const SelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        {...field}
        {...props}
        className="p-3 outline-none focus:border border-green-400 rounded-md text-lg bg-white2"
      ></select>
      {meta.touched && meta.error ? (
        <p className="text-red-600">{meta.error}</p>
      ) : null}
    </>
  );
};

export const CustomReactQuill = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>

      {/* ReactQuill height is define in index.css  */}
      <ReactQuill
        theme="snow"
        value={field.value}
        onChange={field.onChange(field.name)}
        className="bg-white2 rounded-lg"
      />

      {meta.touched && meta.error ? (
        <p className="text-red-600">{meta.error}</p>
      ) : null}
    </>
  );
};
