import Button from "../components/elements/Button";
import CardProduct from "../components/fragments/CardProduct";
import { useState } from "react";

const products = [
  {
    id: 1,
    image: "/images/bmw.jpg",
    name: "BMW M3 GTR E46 - Razor NFS Most Wanted",
    description:
      "BMW modif Razor NFS Most Wanted, keren cuy, pernah ada di game most wanted, klo lu beli yang ini lansung banyak yg ngeliatin dah",
    price: 80000,
    discount: 100000,
  },
  {
    id: 2,
    image: "/images/bmw.jpg",
    name: "Mazda MX 5 Miata (NA)",
    description:
      "Mazda modif MX 5 Miata, keren cuy, lu punya mobil ini cewe mana ge mau sama lu cok",
    price: 10000,
    discount: 20000,
  },
  {
    id: 3,
    image: "/images/bmw.jpg",
    name: "Aki-Aki Kaya Raya GRATIS, malah kamu yang om bayar",
    description:
      "Aki-Aki suka sama anak kuliahan, yang masih muda pokonya mah, lu minta aipon 200 pro max ge dikasih",
    price: 0, //"FREE",
    discount: 1000000,
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  }; // ... itu Spread Operator untuk mengambil data lama atau data awal yg tertera

  return (
    <>
      <div className="flex justify-end items-center text-white bg-slate-400 h-16 px-10">
        {email}
        <Button variant="bg-red-500 ml-2" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      {/* Products */}
      <div className="flex justify-center py-5">
        <div className="grid grid-cols-1 gap-4 tablet:grid-cols-3 mobile:grid-cols-2">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                discount={product.discount}
                id={product.id}
                handleAddToCart={() => handleAddToCart(product.id)}
              />
            </CardProduct>
          ))}
        </div>
      </div>

      {/* Cart */}
      <div className="w-1/2 pl-8">
        <h1 className="text-3xl font-bold text-blue-400">Cart</h1>
        <table className="text-left table-auto border-separate border-space-x-">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              const product = products.find(
                (product) => product.id === item.id
              );
              return (
                <tr key={item.id}>
                  <td>{product.name}</td>
                  <td>
                    Rp{" "}
                    {product.price.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </td>
                  <td>{item.qty}</td>
                  <td>
                    Rp{" "}
                    {(item.qty * product.price).toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductPage;
