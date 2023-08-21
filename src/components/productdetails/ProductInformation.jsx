//
import React from "react";
import { Accordion } from "flowbite-react";
import { Table } from "flowbite-react";
// import "./PoductInformation.css";
import "./PoductInformation.css"; // Bu dosyayı oluşturmanız gerekecek

const ProductInformation = () => {
  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title>Ürün Bilgisi</Accordion.Title>

        <Accordion.Content className="panel-content">
          {" "}
          {/* .panel-content sınıfını ekledik */}
          <Table striped className="w-96">
            ...
          </Table>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Teslimat ve Kurulum</Accordion.Title>
        <Accordion.Content className="panel-content">
          {" "}
          {/* .panel-content sınıfını ekledik */}
          <p className="mb-2 text-gray-500 dark:text-gray-400">{/* ... */}</p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className="transition delay-700 duration-300 ease-in-out">
        <Accordion.Title>Taksit Seçenekleri</Accordion.Title>
        <Accordion.Content className="bg-black panel-content !transition-all  !delay-700 !duration-[5s] !ease-in-out">
          {" "}
          {/* .panel-content sınıfını ekledik */}
          <p>deneme</p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default ProductInformation;
