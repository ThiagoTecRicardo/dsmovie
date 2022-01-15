package com.tec.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tec.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
