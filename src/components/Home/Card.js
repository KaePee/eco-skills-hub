"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const Card = ({
  imageSrc,
  title,
  location,
  date,
  modalTitle,
  modalBody,
  modalPdfUrl,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleCardClick = () => {
    onOpen();
  };

  return (
    <div>
      {/* Card Div */}
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg m-4 cursor-pointer"
        onClick={handleCardClick}
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
        className="w-full max-w-lg h-auto mx-2 my-auto md:w-3/4 md:mx-auto md:text-base z-40 items-center bg-slate-300/60 border-red-600 backdrop-blur-md rounded-lg"
      >
        <ModalContent className="p-4 max-h-[80vh] overflow-y-auto">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-base md:text-lg">
                {modalTitle}
              </ModalHeader>
              {/* Modal Body */}
              <ModalBody className="text-sm md:text-base">
                <h3 className="text-lg font-semibold text-gray-800 md:text-xl">
                  Introduction
                </h3>
                <p className="text-gray-600">{modalBody[0]}</p>

                <h3 className="text-lg font-semibold text-gray-800 md:text-xl">
                  Objectives
                </h3>
                <p className="text-gray-600">{modalBody[1]}</p>

                <h3 className="text-lg font-semibold text-gray-800 md:text-xl">
                  Conclusion
                </h3>
                <p className="text-gray-600">{modalBody[2]}</p>
              </ModalBody>

              {/* Modal Footer */}
              <ModalFooter className="flex justify-end gap-2">
                <Button
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  onPress={onClose}
                >
                  Close
                </Button>
                <Link className="m-1"
                  href={`/pdf-viewer?pdfUrl=${encodeURIComponent(modalPdfUrl)}`}
                  passHref
                >
                  <Button
                    as="a"
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    View Full Report
                  </Button>
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Card;
