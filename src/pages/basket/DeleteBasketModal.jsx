"use client";

import { Button, Modal } from "flowbite-react";
import { AiOutlineWarning } from "react-icons/ai";

export default function DeleteBasketModal({
  setOpenModal,
  openModal,
  modalDelete,
  dataItem,
}) {
  return (
    <>
      <Modal
        className="flex"
        show={openModal === true}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className="w-[full] flex justif-between"></Modal.Header>
        <Modal.Body>
          <div className="flex justify-center">
            <AiOutlineWarning className="w-20 h-20 text-red-600 flex justify-end  " />
          </div>
          <div className="space-y-6">
            <p className="text-center leading-relaxed text-gray-500 dark:text-gray-400">
              Ürünü sepetten silmek istediğinize emin misiniz?
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex justify-center">
          <Button
            onClick={() => {
              setOpenModal(false);
              modalDelete(dataItem.id);
            }}
          >
            Ürünü Sil
          </Button>
          <Button
            className="text-black bg-white border-2 border-black hover:text-white hover:bg-black px-5"
            color="black"
            onClick={() => setOpenModal(false)}
          >
            İptal
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
