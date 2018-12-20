import qs from "qs";
const baseUrl = process.env.REACT_APP_API_URL;

export function checkStatus(response) {
  if (response.ok) {
    return response;
  } else {
    throw new Error("server error");
  }
}

// export function loadProducts() {
//   return fetch(`${baseUrl}/products`).then(r => r.json());
// }

export function loadProducts(queryParams) {
  return fetch(`${baseUrl}/products?${qs.stringify(queryParams)}`).then(r =>
    r.json()
  );
}

export function loadProduct(id) {
  return fetch(`${baseUrl}/products/${id}`).then(r => r.json());
}

export function loadCategories() {
  return fetch(`${baseUrl}/categories`).then(r => r.json());
}

export function loadCategory(id) {
  return fetch(`${baseUrl}/categories/${id}`).then(r => r.json());
}
