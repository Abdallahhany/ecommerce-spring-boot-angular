package org.example.springecommerce.dao;

import org.example.springecommerce.entity.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "country", path = "countries")
public interface CountryRepository extends JpaRepository<Country, Integer> {

}
