import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Rating from "@mui/material/Rating";
import UploadBox from "../../Components/UploadBox";
import { LazyLoadImage } from "react-lazy-load-image-component";
import productImage from "../../assets/images/product/product.jpg";
import { IoMdClose } from "react-icons/io";
import { Button } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";
const AddProduct = () => {
  const [productCat, setProductCat] = useState("");
  const [productSubCat, setProductSubCat] = useState("");
  const [productFeatured, setProductFeatured] = useState("");
  const [productSize, setProductSize] = useState("");

  const handleChangeProductCat = (event) => {
    setProductCat(event.target.value);
  };
  const handleChangeProductSubCat = (event) => {
    setProductSubCat(event.target.value);
  };

  const handleChangeProductFeatured = (event) => {
    setProductFeatured(event.target.value);
  };

  const handleChangeProductSize = (event) => {
    setProductSize(event.target.value);
  };
  return (
    <section className="p-5 bg-gray-100">
      <form className="form p-8 py-3 ">
        <div className="scroll max-h-[520px] overflow-y-scroll pr-4">
          <div className="grid grid-cols-1 mb-3">
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1">Product Name</h3>
              <input
                type="text"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.1)] focus:outline-none focus:border-[rgba(0,0,0,0.4)]
            rounded-sm p-3 text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 mb-3">
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1">
                Product Description{" "}
              </h3>
              <input
                type="text"
                className="w-full h-[80px] border border-[rgba(0,0,0,0.1)] focus:outline-none focus:border-[rgba(0,0,0,0.4)]
            rounded-sm p-3 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-4 mb-3 gap-4">
            <div className="col">
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
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
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
              <h3 className="text-[14px] font-[500] mb-1">
                Product Sub Category
              </h3>
              <Select
                labelId="demo-simple-select-label"
                id="productCatDrop"
                size="small"
                className="w-full"
                value={productSubCat}
                label="Category"
                onChange={handleChangeProductSubCat}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Men</MenuItem>
                <MenuItem value={20}>Women</MenuItem>
                <MenuItem value={30}>Kid</MenuItem>
              </Select>
            </div>

            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1">Product Price</h3>
              <input
                type="number"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.1)] focus:outline-none focus:border-[rgba(0,0,0,0.4)]
            rounded-sm p-3 text-sm"
                min="0"
                defaultValue="0"
                onKeyDown={(e) => {
                  if (e.key === "-" || e.key === "e") {
                    e.preventDefault();
                  }
                }}
              />
            </div>
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1">Product Old Price</h3>
              <input
                type="number"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.1)] focus:outline-none focus:border-[rgba(0,0,0,0.4)]
            rounded-sm p-3 text-sm"
                min="0"
                defaultValue="0"
                onKeyDown={(e) => {
                  if (e.key === "-" || e.key === "e") {
                    e.preventDefault();
                  }
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-4 mb-3 gap-4">
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1">Is Featured?</h3>
              <Select
                labelId="demo-simple-select-label"
                id="productCatDrop"
                size="small"
                className="w-full"
                value={productFeatured}
                label="Category"
                onChange={handleChangeProductFeatured}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>True</MenuItem>
                <MenuItem value={20}>False</MenuItem>
              </Select>
            </div>
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1">Product Stock</h3>
              <input
                type="text"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.1)] focus:outline-none focus:border-[rgba(0,0,0,0.4)]
            rounded-sm p-3 text-sm"
              />
            </div>
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1">Product Brand</h3>
              <input
                type="text"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.1)] focus:outline-none focus:border-[rgba(0,0,0,0.4)]
            rounded-sm p-3 text-sm"
              />
            </div>
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1">Product Discount</h3>
              <input
                type="text"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.1)] focus:outline-none focus:border-[rgba(0,0,0,0.4)]
            rounded-sm p-3 text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 mb-3 gap-4">
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1">Product Size</h3>
              <Select
                labelId="demo-simple-select-label"
                id="productCatDrop"
                size="small"
                className="w-full"
                value={productSize}
                label="Category"
                onChange={handleChangeProductSize}
              >
                <MenuItem value={"S"}>S</MenuItem>
                <MenuItem value={"M"}>M</MenuItem>
                <MenuItem value={"L"}>L</MenuItem>
                <MenuItem value={"XL"}>XL</MenuItem>
                <MenuItem value={"XXL"}>XXL</MenuItem>
              </Select>
            </div>

            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1">Product Rating</h3>

              <Rating name="half-rating" defaultValue={0} precision={0.5} />
            </div>
          </div>
          <div className="col w-full p-5 px-0">
            <h3 className="font-[700] text-[20px] mb-3">Media & Images</h3>

            <div className="grid grid-cols-7 gap-4">
              <div className="uploadBoxWrapper relative">
                <span
                  className="absolute -top-[5px] -right-[5px] z-50 cursor-pointer flex items-center
               justify-between w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700"
                >
                  <IoMdClose className="text-white text-[17px]" />
                </span>
                <div
                  className="uploadBox p-0 rounded-md overflow-hidden border border-dashed
  border-[rgba(0,0,0,0.3)] h-[200px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200
  flex items-center justify-center flex-col relative"
                >
                  <LazyLoadImage
                    src={productImage}
                    alt={"image"}
                    className="w-full h-full object-cover "
                    effect="blur"
                    wrapperProps={{
                      style: {
                        transitionDelay: "1s",
                      },
                    }}
                  />
                </div>
              </div>
              <div className="uploadBoxWrapper relative">
                <span
                  className="absolute -top-[5px] -right-[5px] z-50 cursor-pointer flex items-center
               justify-between w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700"
                >
                  <IoMdClose className="text-white text-[17px]" />
                </span>
                <div
                  className="uploadBox p-0 rounded-md overflow-hidden border border-dashed
  border-[rgba(0,0,0,0.3)] h-[200px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200
  flex items-center justify-center flex-col relative"
                >
                  <LazyLoadImage
                    src={productImage}
                    alt={"image"}
                    className="w-full h-full object-cover "
                    effect="blur"
                    wrapperProps={{
                      style: {
                        transitionDelay: "1s",
                      },
                    }}
                  />
                </div>
              </div>
              <div className="uploadBoxWrapper relative">
                <span
                  className="absolute -top-[5px] -right-[5px] z-50 cursor-pointer flex items-center
               justify-between w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700"
                >
                  <IoMdClose className="text-white text-[17px]" />
                </span>
                <div
                  className="uploadBox p-0 rounded-md overflow-hidden border border-dashed
  border-[rgba(0,0,0,0.3)] h-[200px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200
  flex items-center justify-center flex-col relative"
                >
                  <LazyLoadImage
                    src={productImage}
                    alt={"image"}
                    className="w-full h-full object-cover "
                    effect="blur"
                    wrapperProps={{
                      style: {
                        transitionDelay: "1s",
                      },
                    }}
                  />
                </div>
              </div>
              <div className="uploadBoxWrapper relative">
                <span
                  className="absolute -top-[5px] -right-[5px] z-50 cursor-pointer flex items-center
               justify-between w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700"
                >
                  <IoMdClose className="text-white text-[17px]" />
                </span>
                <div
                  className="uploadBox p-0 rounded-md overflow-hidden border border-dashed
  border-[rgba(0,0,0,0.3)] h-[200px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200
  flex items-center justify-center flex-col relative"
                >
                  <LazyLoadImage
                    src={productImage}
                    alt={"image"}
                    className="w-full h-full object-cover "
                    effect="blur"
                    wrapperProps={{
                      style: {
                        transitionDelay: "1s",
                      },
                    }}
                  />
                </div>
              </div>
              <UploadBox multiple={true} />
            </div>
          </div>
        </div>
        <hr />
        <br />

        <Button type="button" className="btn-blue btn-lg w-full mt-3">
          <FaCloudUploadAlt className="text-white text-[25px]" />
          &nbsp; Publish and View
        </Button>
      </form>
    </section>
  );
};

export default AddProduct;
