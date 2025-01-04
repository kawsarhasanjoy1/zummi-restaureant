import { useFieldArray, useFormContext } from "react-hook-form";
import Input from "./Input";

const IngredientsFields = ({ name }: { name: string }) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: name,
    keyName: "id", // Unique key for each field in the array
    control,
  });

  return (
    <div className="space-y-4">
      {fields.map((item, index) => (
        <div key={item.id} className=" grid grid-cols-2 gap-7">
          <Input
            placeholder="Enter ingredient name"
            label={`Ingredient Name`}
            name={`name`}
            edit="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
          />
          <div className=" grid grid-cols-12 gap-2">
            <div className=" md:col-span-10 col-span-9">
              <Input
                placeholder="Enter ingredient quantity"
                label={`Quantity`}
                name={`quantity`}
                edit="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  "
                type="text"
              />
            </div>
            <button
              type="button"
              className="text-red-500 col-span-2"
              onClick={() => remove(index)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={() => append({ name: "", quantity: "" })}
        className="mt-4 text-blue-500"
      >
        Add Ingredient
      </button>
    </div>
  );
};

export default IngredientsFields;
