package org.example.springecommerce.dao;

import org.example.springecommerce.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

// @RepositoryRestResource annotation is used to customize the REST endpoint for the entity
// collectionResourceRel is the name of the JSON entry for the collection of entities
// path is the URL path for the entity
@RepositoryRestResource(collectionResourceRel = "productCategory", path = "product-category")
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
}
