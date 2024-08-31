// import Image from 'next/image';

// const Card = ({ imageSrc, title, location, date }) => {
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
//       <Image className="w-full" src={imageSrc} alt={title} width={600} height={500} />
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">{title}</div>
//         <p className="text-gray-700 text-base">
//           Location: {location}
//         </p>
//         <p className="text-gray-700 text-base">
//           Date: {date}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Card;
"use client";

import React from "react";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const Card = ({ imageSrc, title, location, date, modalTitle, modalBody }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      {/* Card Div */}
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg m-4 cursor-pointer"
        onClick={onOpen}
      >
        <Image
          className="w-full"
          src={imageSrc}
          alt={title}
          width={600}
          height={500}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">Location: {location}</p>
          <p className="text-gray-700 text-base">Date: {date}</p>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        className="w-1/2 h-2/3 m-auto z-40 items-center bg-slate-300/60 border-red-600 backdrop-blur-md rounded-lg"
      >
        <ModalContent className="p-2">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {modalTitle}
              </ModalHeader>
              {/* Modal Body */}
              <ModalBody className="text-lg">
                <h3 className="text-xl font-semibold text-gray-800 md:text-2xl lg:text-3xl">
                  Introduction
                </h3>
                <p className="text-gray-600">{modalBody[0]}</p>

                <h3 className="text-xl font-semibold text-gray-800 md:text-2xl lg:text-3xl">
                  Objectives
                </h3>
                <p className="text-gray-600">{modalBody[1]}</p>

                <h3 className="text-xl font-semibold text-gray-800 md:text-2xl lg:text-3xl">
                  Conclusion
                </h3>
                <p className="text-gray-600">{modalBody[2]}</p>
              </ModalBody>

              {/* Modal Footer */}
              <ModalFooter>
                <Button
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  onPress={() => {
                    /* Add action to display PDF */
                  }}
                >
                  View Full Report
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Card;
