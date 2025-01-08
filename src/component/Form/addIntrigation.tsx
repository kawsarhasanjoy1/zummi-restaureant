import { useFieldArray, useFormContext } from "react-hook-form";
import { Input } from "./Input";


const IngredientsFields = ({ name }: { name: string }) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name, // Name of the field array (e.g., "ingredients")
    control,
  });

  return (
    <div className="space-y-4">
      {fields.map((item, index) => (
        <div key={item.id} className="grid grid-cols-2 gap-7">
          {/* Ingredient Name Input */}
          <Input
            placeholder="Enter ingredient name"
            editL="text-black"
            label="Ingredient Name"
            name={`${name}[${index}].name`} // Unique name for ingredient name
            edit="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            type="text"
          />

          <div className="grid grid-cols-12 gap-2">
            {/* Ingredient Quantity Input */}
            <div className="md:col-span-10 col-span-9">
              <Input
                editL="text-black"
                placeholder="Enter ingredient quantity"
                label="Quantity"
                name={`${name}[${index}].quantity`} // Unique name for ingredient quantity
                edit="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                type="text"
              />
            </div>

            {/* Remove Button */}
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

      {/* Add Ingredient Button */}
      <button
        type="button"
        onClick={() => append({ name: "", quantity: "" })} // Append a new ingredient
        className="mt-4 text-blue-500"
      >
        Add Ingredient
      </button>
    </div>
  );
};

export default IngredientsFields;
