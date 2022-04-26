import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// gets set by webpack
if (process.env.NODE_ENV === "development") {
  const el = document.quertSelector("#dev-products");

  if (el) {
    // We're probably running in isolation (assuming no div with id dev-products in container html)
    mount(el);
  }
}

export { mount };
