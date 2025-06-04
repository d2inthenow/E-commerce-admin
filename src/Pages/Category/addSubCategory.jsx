import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import productImage from "../../assets/images/product/product3.jpg";
import UploadBox from "../../Components/UploadBox";
import { IoMdClose } from "react-icons/io";
import { Button } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Select, MenuItem } from "@mui/material";
import { useState } from "react";
const AddSubCategory = () => {
  const [productCat, setProductCat] = useState("");
  const handleChangeProductCat = (event) => {
    setProductCat(event.target.value);
  };
  return (
    <section className="p-5 bg-gray-100">
      <form className="form p-8 py-3 ">
        <div className="scroll max-h-[520px] overflow-y-scroll pr-4 pt-4">
          <div className="grid grid-cols-4 gap-4">
            <div className="col ">
              <h3 className="text-[14px] font-[500] mb-1">Product Category</h3>
              <Select
                labelId="demo-simple-select-label"
                id="productCatDrop"
                size="small"
                className="w-full"
                value={productCat}
                label="Category"
                onChange={handleChangeProductCat}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value={10}>Fashion</MenuItem>
                <MenuItem value={20}>Electionics</MenuItem>
                <MenuItem value={30}>Bags</MenuItem>
                <MenuItem value={40}>Footwear</MenuItem>
                <MenuItem value={50}>Groceries</MenuItem>
                <MenuItem value={60}>Beauty</MenuItem>
                <MenuItem value={70}>Wellness</MenuItem>
                <MenuItem value={80}>Jewellery</MenuItem>
              </Select>
            </div>
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1">Product Name</h3>
              <input
                type="text"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.1)] focus:outline-none focus:border-[rgba(0,0,0,0.4)]
            rounded-sm p-3 text-sm"
              />
            </div>
          </div>
          <br />
        </div>

        <div className="w-[620px]">
          <Button type="button" className="btn-blue btn-lg w-full mt-3">
            <FaCloudUploadAlt className="text-white text-[25px]" />
            &nbsp; Publish and View
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddSubCategory;
