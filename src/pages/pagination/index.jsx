import { useState } from "react";

function Pagination() {
  const [products, setProducts] = useState(paginationData);
  const [currentPage, setCurrentPage] = useState(0);

  const limit = 6;
  const totalPage = Math.ceil(products.length / limit);

  const start = currentPage * limit;
  const end = start + limit;

  const onNext = () => {
    if (currentPage === totalPage - 1) {
      alert("maximum page reached");
      return;
    }
    setCurrentPage(currentPage + 1);
  };

  const onPrev = () => {
    if (currentPage === 1) {
      alert("cannot go prev");
      return;
    }
    setCurrentPage(currentPage - 1);
  };

  const gotoPage = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="m-4">
      <div className="grid grid-cols-3 items-center gap-4">
        {products.slice(start, end).map((product) => (
          <div key={product.productName} className="border p-3">
            <p className="text-2xl font-semibold">{product.productName}</p>
            <p className="text-lg font-medium">Rs. {product.price}</p>
            <p className="text-3xl font-bold">{product.id}</p>
          </div>
        ))}
      </div>

      <div className=" mt-8 flex justify-between items-center">
        <div className="items-center gap-4 flex justify-center">
          {" "}
          <p>
            page:<span className="font-semibold">{currentPage + 1}</span>
          </p>
          <button onClick={onPrev}>prev</button>
          <button onClick={onNext}>next</button>
        </div>

        <div className="flex gap-2 justify-center">
          {Array.from({ length: totalPage }).map((_, index) => (
            <button onClick={() => gotoPage(index)} key={index}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pagination;

const paginationData = [
  {
    id: 1,
    productName: "shoes",
    price: 100,
    quantity: 2,
    total: 200,
  },
  {
    id: 2,
    productName: "shirt",
    price: 50,
    quantity: 3,
    total: 150,
  },
  {
    id: 3,
    productName: "hat",
    price: 20,
    quantity: 5,
    total: 100,
  },
  {
    id: 4,
    productName: "jacket",
    price: 80,
    quantity: 1,
    total: 80,
  },
  {
    id: 5,
    productName: "socks",
    price: 10,
    quantity: 10,
    total: 100,
  },
  {
    id: 6,
    productName: "gloves",
    price: 15,
    quantity: 4,
    total: 60,
  },
  {
    id: 7,
    productName: "scarf",
    price: 25,
    quantity: 2,
    total: 50,
  },
  { id: 8, productName: "belt", price: 30, quantity: 1, total: 30 },
  { id: 9, productName: "watch", price: 200, quantity: 1, total: 200 },
  { id: 10, productName: "sunglasses", price: 120, quantity: 1, total: 120 },
  { id: 11, productName: "backpack", price: 60, quantity: 2, total: 120 },
  { id: 12, productName: "wallet", price: 40, quantity: 3, total: 120 },
  { id: 13, productName: "umbrella", price: 15, quantity: 5, total: 75 },
  { id: 14, productName: "cap", price: 18, quantity: 4, total: 72 },
  { id: 15, productName: "t-shirt", price: 25, quantity: 6, total: 150 },
  { id: 16, productName: "jeans", price: 70, quantity: 2, total: 140 },
  { id: 17, productName: "boots", price: 110, quantity: 1, total: 110 },
  { id: 18, productName: "earrings", price: 35, quantity: 2, total: 70 },
  { id: 19, productName: "ring", price: 60, quantity: 1, total: 60 },
  { id: 20, productName: "sweater", price: 55, quantity: 3, total: 165 },
  { id: 21, productName: "shorts", price: 40, quantity: 2, total: 80 },
  { id: 22, productName: "tie", price: 20, quantity: 2, total: 40 },
  { id: 23, productName: "coat", price: 150, quantity: 1, total: 150 },
  { id: 24, productName: "bracelet", price: 45, quantity: 2, total: 90 },
  { id: 25, productName: "sandals", price: 35, quantity: 2, total: 70 },
  { id: 26, productName: "suit", price: 250, quantity: 1, total: 250 },
  { id: 27, productName: "glasses", price: 80, quantity: 1, total: 80 },
  { id: 28, productName: "hoodie", price: 60, quantity: 2, total: 120 },
  { id: 29, productName: "leggings", price: 30, quantity: 3, total: 90 },
  { id: 30, productName: "skirt", price: 45, quantity: 2, total: 90 },
  { id: 31, productName: "blazer", price: 120, quantity: 1, total: 120 },
  { id: 32, productName: "mittens", price: 12, quantity: 4, total: 48 },
  { id: 33, productName: "tank top", price: 22, quantity: 3, total: 66 },
  { id: 34, productName: "pajamas", price: 35, quantity: 2, total: 70 },
  { id: 35, productName: "overalls", price: 65, quantity: 1, total: 65 },
  { id: 36, productName: "swimsuit", price: 40, quantity: 2, total: 80 },
  { id: 37, productName: "slippers", price: 25, quantity: 2, total: 50 },
  { id: 38, productName: "tracksuit", price: 90, quantity: 1, total: 90 },
  { id: 39, productName: "cardigan", price: 50, quantity: 2, total: 100 },
  { id: 40, productName: "vest", price: 28, quantity: 2, total: 56 },
  { id: 41, productName: "kimono", price: 75, quantity: 1, total: 75 },
  { id: 42, productName: "poncho", price: 38, quantity: 2, total: 76 },
  { id: 43, productName: "loafer", price: 95, quantity: 1, total: 95 },
  { id: 44, productName: "moccasin", price: 85, quantity: 1, total: 85 },
  { id: 45, productName: "parka", price: 130, quantity: 1, total: 130 },
];
