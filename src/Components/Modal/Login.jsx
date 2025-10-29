import { Carousel, Modal, ModalBody } from 'flowbite-react'
import React from 'react'
import mobile from '../../assets/mobile.svg'
import guitar from '../../assets/guita.png'
import love from '../../assets/love.png'
import avatar from '../../assets/avatar.png'
import close from '../../assets/close.svg'
import google from '../../assets/google.png'

const Login = ({ toggleModal, status }) => {
  return (
    <div>
      <Modal
        theme={{
          content: {
            base: 'relative w-full p-4 md:h-auto',
            inner:
              'relative flex max-h-[90dvh] flex-col rounded-lg bg-white shadow dark:bg-gray-700',
          },
        }}
        show={status}
        className="bg-black rounded-none"
        position="center"
        size="md"
        popup={true}
        dismissible={false}
      >
        {/* Main Content */}
        <div className="bg-white p-6 pb-2 rounded-lg">
          {/* Close Button - Fixed positioning relative to modal */}
          <button
            onClick={toggleModal}
            className="fixed top-7 right-3 z-50 hover:opacity-70 transition-opacity"
            aria-label="Close modal"
          >
            <img src={close} className="w-6 cursor-pointer" alt="close" />
          </button>

          {/* Carousel */}
          <Carousel
            slide={false}
            className="w-full h-56 pb-5 rounded-none overflow-hidden"
            theme={{
              indicators: {
                active: { off: 'bg-gray-300', on: 'bg-teal-300' },
                base: 'h-2 w-2 rounded-full',
                wrapper:
                  'absolute bottom-2 left-1/2 flex -translate-x-1/2 space-x-3',
              },
              scrollContainer: {
                base: 'flex h-full snap-mandatory overflow-hidden scroll-smooth',
                snap: 'snap-x',
              },
              control: {
                base: 'inline-flex items-center justify-center bg-transparent',
                icon: 'w-8 text-black dark:text-black',
              },
            }}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <img className="w-24 pb-5" src={guitar} alt="Safety illustration" />
              <p
                style={{ color: '#002f34' }}
                className="w-60 sm:w-72 text-center pb-5 font-semibold"
              >
                Help us become one of the safest places to buy and sell.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center h-full">
              <img className="w-24 pb-5" src={love} alt="Comfort illustration" />
              <p
                style={{ color: '#002f34' }}
                className="w-60 sm:w-72 text-center pb-5 font-semibold"
              >
                Close deals from the comfort of your home.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center h-full">
              <img className="w-24 pb-5" src={avatar} alt="Favorites illustration" />
              <p
                style={{ color: '#002f34' }}
                className="w-60 sm:w-72 text-center pb-5 font-semibold"
              >
                Keep all your favorites in one place.
              </p>
            </div>
          </Carousel>
        </div>

        {/* Modal Body */}
        <ModalBody className="bg-white h-96 p-6 rounded-none">
          <div className="flex items-center justify-center rounded-md border-2 border-solid border-gray-300 p-5 relative h-8 cursor-pointer hover:bg-teal-50 transition-colors">
            <img src={google} className="w-7 absolute left-0" alt="Google logo" />
            <p className="text-sm text-gray-500">Continue with Google</p>
          </div>

          <div className="pt-5 flex flex-col items-center justify-center">
            <p className="font-semibold text-sm">OR</p>
            <p className="font-bold text-sm pt-3 underline underline-offset-4 cursor-pointer hover:text-teal-600 transition-colors">
              Login with Email
            </p>
          </div>

          <div className="pt-10 sm:pt-20 flex flex-col items-center justify-center">
            <p className="text-xs text-gray-600">All your personal details are safe with us.</p>
            <p className="text-xs pt-5 text-center text-gray-600">
              If you continue, you are accepting{' '}
              <span className="text-blue-600 cursor-pointer hover:underline">
                OLX Terms and Conditions and Privacy Policy
              </span>
            </p>
          </div>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default Login