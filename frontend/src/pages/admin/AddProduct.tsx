import { useState } from "react";
import { addProduct } from "../../services/adminService";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [image1, setImage1] = useState<File | null>(null);
  const [image2, setImage2] = useState<File | null>(null);
  const [image3, setImage3] = useState<File | null>(null);
  const [image4, setImage4] = useState<File | null>(null);

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("Nike");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("Men");
  const [type, setType] = useState("Sneakers");
  const [size, setSize] = useState("7");

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!image1 && !image2 && !image3 && !image4){
      toast.error("please upload image!...")
      return
    }
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("brand", brand);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("type", type);
      formData.append("size", size);
      formData.append("quantity",quantity)

      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      image1 && formData.append("image1", image1);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      image2 && formData.append("image2", image2);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      image3 && formData.append("image3", image3);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      image4 && formData.append("image4", image4);

      const response = await addProduct(formData);
      if (response && response.success) {
        toast.success("Product added successfully!..");
      } else {
        toast.error("Failed to add product");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <form onSubmit={onSubmitHandler}>
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Add Product
        </h1>

        {/* Image Upload Section */}
        <div className="flex gap-5 justify-center mb-8">
          {[image1, image2, image3, image4].map((img, index) => (
            <label
              key={index}
              htmlFor={`image${index + 1}`}
              className="border border-gray-300 w-36 h-36 flex justify-center items-center text-gray-500 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
            >
              {img ? (
                <img
                  className="w-full h-full object-cover"
                  src={URL.createObjectURL(img)}
                  alt={`Image ${index + 1}`}
                />
              ) : (
                <p>Upload {index + 1}</p>
              )}
              <input
                type="file"
                id={`image${index + 1}`}
                hidden
                onChange={(e) =>
                  [setImage1, setImage2, setImage3, setImage4][index](
                    e.target.files?.[0] || null
                  )
                }
              />
            </label>
          ))}
        </div>

        {/* Product Name */}
        <div className="mb-6">
          <label className="text-gray-600 text-lg font-medium">Name</label>
          <input
            type="text"
            className="border-gray-300 border w-full p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Category & Type */}
        <div className="grid grid-cols-2 gap-5 mb-6">
          <div>
            <label className="text-gray-600 text-lg font-medium">
              Category
            </label>
            <select
              className="border-gray-300 border w-full p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
          <div>
            <label className="text-gray-600 text-lg font-medium">Type</label>
            <select
              className="border-gray-300 border w-full p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Sneakers">Sneakers</option>
              <option value="Sports">Sports</option>
              <option value="Formal">Formal</option>
              <option value="Casual">Casual</option>
            </select>
          </div>
        </div>
        {/* Quantity & Price */}
        <div className="grid grid-cols-2 gap-5 mb-6">
          <div>
            <label className="text-gray-600 text-lg font-medium">
              Quantity
            </label>

            <input
              type="text"
              className="border-gray-300 border w-full p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              required
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="text-gray-600 text-lg font-medium">Price</label>
            <input
              type="text"
              className="border-gray-300 border w-full p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              required
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        {/* Brand & Size */}
        <div className="grid grid-cols-2 gap-5 mb-6">
          <div>
            <label className="text-gray-600 text-lg font-medium">Brand</label>
            <select
              className="border-gray-300 border w-full p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => setBrand(e.target.value)}
            >
              <option value="Nike">Nike</option>
              <option value="Woodland">WoodLand</option>
              <option value="Reebok">Reebok</option>
              <option value="Puma">Puma</option>
              <option value="Adidas">Adidas</option>
              <option value="Bata">Bata</option>
              <option value="Baby Step">Baby Step</option>
              <option value="Asian">Asian</option>
              <option value="Mochi">Mochi</option>
              <option value="Karaddi">Karaddi</option>
              <option value="Killer">Killer</option>
              <option value="Sparx">Sparx</option>
              <option value="Campus">Campus</option>
            </select>
          </div>
          <div>
            <label className="text-gray-600 text-lg font-medium">Size</label>
            <select
              className="border-gray-300 border w-full p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#F0E0CE]  p-3 w-full rounded-lg text-xl font-semibold hover:bg-[#E0D0BE] transition duration-300 shadow-lg"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
