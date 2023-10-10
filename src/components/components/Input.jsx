/* eslint-disable react/prop-types */
export const Input = ({
  register, errors, name, touchedFields, validation, type = "text",
}) => {
  return (
    <>
      <input
        { ...register(name, validation) }
        className={ `w-full mt-1 p-2 border ${errors[name] ? "border-red-500 outline-red-500" : "border-gray-300"} rounded-md focus:border-blue-500` }
        type={ type }
        id={ name } />
        <div className="mt-1 h-4">
        { touchedFields[name] && errors[name] && (
        <p className="text-sm text-red-500">{ errors[name].message }</p>
      ) }
        </div>
      
    </>
  );
};
