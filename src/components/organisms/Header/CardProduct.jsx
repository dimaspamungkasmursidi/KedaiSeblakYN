// NESTED COMPONENT
import Button from "../elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs flex flex-col justify-between rounded-lg mt-4 mx-2 shadow-lg bg-[#ecf1f7] {/* shadow-[8px_8px_30px_#b0b0b0] */}">
      {children}
    </div>
  );
};


const Header = (props) => {
  const { image } = props;
  return (
    <a href="#" className="block m-5 object-contain">
      <img src={image} alt="product" className="rounded-lg" />
    </a>
  );
};

const Body = (props) => {
  const { children, name } = props;

  return (
    <div className="h-full px-5 pb-2">
      <a href="">
        <h5 className="text-xl font-medium tracking-tight mb-2">{name}</h5>
        <p className="text-sm text-black text-justify">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, discount, handleAddToCart, id } = props;
  return (
    <div className="h-full px-5 pb-2">
      <div className="flex items-center pb-4">
        <span className="text-3xl font-bold">
          Rp{" "}
          {price.toLocaleString("id-ID", {
            styles: "currency",
            currency: "IDR",
          })}
          {/* toLocaleString itu function js untuk titik-titik angka uang */}
        </span>
        <span className="text-sm text-slate-900 line-through ml-2 mt-2">
          Rp{" "}
          {discount.toLocaleString("id-ID", {
            styles: "currency",
            currency: "IDR",
          })}
        </span>
      </div>
      <Button
        variant="bg-slate-900 w-full flex items-center justify-center text-center text-sm text-white hover:bg-gray-700 focus:outline-none transition duration-500"
        onClick={ () => handleAddToCart(id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        Add to cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

//KARENA EXPORT INI CUMA 1, JADI KITA BUAT CODE YANG ATAS AGAR BISA DI PANGGIL DI COMPONENT PAGES
export default CardProduct;
