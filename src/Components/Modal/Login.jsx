import { Carousel, Modal, ModalBody } from "flowbite-react";
import React from "react";
import guitar from "../../assets/guita.png";
import love from "../../assets/love.png";
import avatar from "../../assets/avatar.png";
import close from "../../assets/close.svg";
import google from "../../assets/google.png";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../Firebase/Firebase";

const Login = ({ toggleModal, status }) => {
  const handleClick = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      toggleModal();
      console.log("user", result.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      show={status}
      size="md"
      onClose={toggleModal}
      dismissible={false}
      popup
      theme={{
        root: {
          base: "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
          show: { on: "flex", off: "hidden" },
        },
        content: {
          base: "relative w-full max-w-md p-4 md:h-auto",
          inner:
            "relative flex max-h-[90dvh] flex-col rounded-lg bg-white shadow dark:bg-gray-700",
        },
      }}
    >
      <div
        className="bg-white p-6 pb-2 rounded-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={toggleModal}
          className="absolute top-3 right-3 hover:opacity-70 transition-opacity"
        >
          <img src={close} className="w-6 cursor-pointer" alt="close" />
        </button>

        {/* Carousel */}
       <Carousel
  slide={true}
  slideInterval={2500} // auto-slide every 2.5s
  indicators={true}
  leftControl=" "
  rightControl=" "
  className="w-full h-64 rounded-lg overflow-hidden"
  theme={{
    indicators: {
      active: { off: "bg-gray-300", on: "bg-teal-500" },
      base: "h-2 w-2 rounded-full transition-all",
      wrapper:
        "absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3",
    },
    control: {
      base: "absolute top-1/2 -translate-y-1/2 p-2 bg-white/70 hover:bg-white rounded-full",
      icon: "w-5 h-5 text-gray-800",
    },
  }}
>
  {/* ✅ Each slide is full-width, so only one shows at a time */}
  <div className="flex flex-col items-center justify-center text-center px-6 w-full h-64 shrink-0">
    <img className="w-24 mb-4" src={guitar} alt="Safety" />
    <p className="text-gray-800 font-semibold w-64">
      Help us become one of the safest places to buy and sell.
    </p>
  </div>

  <div className="flex flex-col items-center justify-center text-center px-6 w-full h-64 shrink-0">
    <img className="w-24 mb-4" src={love} alt="Comfort" />
    <p className="text-gray-800 font-semibold w-64">
      Close deals from the comfort of your home.
    </p>
  </div>

  <div className="flex flex-col items-center justify-center text-center px-6 w-full h-64 shrink-0">
    <img className="w-24 mb-4" src={avatar} alt="Favorites" />
    <p className="text-gray-800 font-semibold w-64">
      Keep all your favorites in one place.
    </p>
  </div>
</Carousel>

      </div>

      <ModalBody className="bg-white h-96 p-6 rounded-none">
        <div
          onClick={handleClick}
          className="flex items-center justify-center rounded-md border-2 border-solid border-gray-300 p-5 relative h-8 cursor-pointer hover:bg-teal-50 transition-colors"
        >
          <img src={google} className="w-7 absolute left-3" alt="Google logo" />
          <p className="text-sm text-gray-500">Continue with Google</p>
        </div>

        <div className="pt-5 flex flex-col items-center justify-center">
          <p className="font-semibold text-sm">OR</p>
          <p className="font-bold text-sm pt-3 underline underline-offset-4 cursor-pointer hover:text-teal-600 transition-colors">
            Login with Email
          </p>
        </div>

        <div className="pt-10 sm:pt-20 flex flex-col items-center justify-center">
          <p className="text-xs text-gray-600">
            All your personal details are safe with us.
          </p>
          <p className="text-xs pt-5 text-center text-gray-600">
            If you continue, you are accepting{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              OLX Terms and Conditions and Privacy Policy
            </span>
          </p>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default Login;
