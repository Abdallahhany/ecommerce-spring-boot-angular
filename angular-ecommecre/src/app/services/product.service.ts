import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../comman/product';
import { map } from 'rxjs';
import { ProductCategory } from '../comman/product-category';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = environment.apiUrl + '/';

  constructor(private httpClient: HttpClient) {}

  getProductListPaginate(
    thePage: number,
    thePageSize: number,
    currentCategoryId: number
  ): Observable<GetProductResponse> {
    const searchUrl =
      `${this.baseUrl}products/search/findByCategoryId?id=${currentCategoryId}` +
      `&page=${thePage}&size=${thePageSize}`;
    return this.httpClient.get<GetProductResponse>(searchUrl);
  }

  getProductList(currentCategoryId: number): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}products/search/findByCategoryId?id=${currentCategoryId}`;
    return this.httpClient
      .get<GetProductResponse>(searchUrl)
      .pipe(map((response) => response._embedded.products));
  }

  getProductCategories(): Observable<ProductCategory[]> {
    const searchUrl = `${this.baseUrl}product-category`;

    return this.httpClient
      .get<GetProductCategoryResponse>(searchUrl)
      .pipe(map((response) => response._embedded.productCategory));
  }

  searchProducts(keyword: string): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}products/search/findByNameContaining?name=${keyword}`;
    return this.httpClient
      .get<GetProductResponse>(searchUrl)
      .pipe(map((response) => response._embedded.products));
  }
  searchProductsPaginate(
    thePage: number,
    thePageSize: number,
    theKeyword: string
  ): Observable<GetProductResponse> {
    // need to build URL based on keyword, page and size
    const searchUrl =
      `${this.baseUrl}products/search/findByNameContaining?name=${theKeyword}` +
      `&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetProductResponse>(searchUrl);
  }

  getProduct(productId: number): Observable<Product> {
    const productUrl = `${this.baseUrl}products/${productId}`;
    return this.httpClient.get<Product>(productUrl);
  }
}

interface GetProductResponse {
  _embedded: {
    products: Product[];
  };
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
}

interface GetProductCategoryResponse {
  _embedded: {
    productCategory: ProductCategory[];
  };
}
