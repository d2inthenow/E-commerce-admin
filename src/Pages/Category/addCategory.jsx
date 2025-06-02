import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import productImage from "../../assets/images/product/product.jpg";
import UploadBox from "../../Components/UploadBox";
import { IoMdClose } from "react-icons/io";
import { Button } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";
const AddHomeSlide = () => {
  return (
    <section className="p-5 bg-gray-100">
      <form className="form p-8 py-3 ">
        <div className="scroll max-h-[520px] overflow-y-scroll pr-4 pt-4">
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
            <UploadBox multiple={true} />
          </div>
        </div>
        <hr />
        <br />
        <div className="w-[300px]">
          <Button type="button" className="btn-blue btn-lg w-full mt-3">
            <FaCloudUploadAlt className="text-white text-[25px]" />
            &nbsp; Publish and View
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddHomeSlide;
