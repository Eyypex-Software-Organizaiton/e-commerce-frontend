import React from 'react'
import { Accordion } from "flowbite-react";
import { Table } from "flowbite-react";
const ProductInformation = () => {
  return (
    <Accordion collapseAll className="w-1/2">
      <Accordion.Panel>
        <Accordion.Title>Ürün Bilgisi</Accordion.Title>
        <Accordion.Content>
          <Table striped className="w-96">
            <Table.Body className="divide-y ">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Ürün Cinsi
                </Table.Cell>
                <Table.Cell>Standart </Table.Cell>
                <Table.Cell>
                  <a href="#">Detay için tıklayınız</a>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <p>Kurulum Bilgisi</p>
                </Table.Cell>
                <Table.Cell>Ücretsiz Kurulum</Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Garanti
                </Table.Cell>
                <Table.Cell>2 Years</Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <p>Max Teslimat Süresi</p>
                </Table.Cell>
                <Table.Cell>35</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Teslimat ve Kurulum</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>
              Siparişlerinizin gecikmeden tarafınıza teslim edilmesi bizim için
              oldukça önemlidir. Teslimat sırasında sorun yaşamamanız adına
              adres ve iletişim bilgilerinizi doğru ve eksiksiz bir şekilde
              girmeniz gerekmektedir. Ürünlerin teslimatı ürün grubuna göre
              belirlenen teslimat süresi içerisinde gerçekleşecektir. Ürün
              grubuna göre maksimum teslimat sürelerimiz; Döşemeli ürün grubu 35
              gün Panel ürün grubu ve baza - başlık ürünlerimizde 45 gün Yatak
              ürün grubumuz ise 21 gündür. Stokta Olan Ürünler İçin Teslim
              Süresi : 10-15 Gün Teslimat ve kurulum işlemleri tamamen ücretsiz
              olarak tarafımızca yapılacaktır.
            </p>
          </p>
   
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
    Taksit Seçenekleri
        </Accordion.Title>
        <Accordion.Content>
         
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}

export default ProductInformation