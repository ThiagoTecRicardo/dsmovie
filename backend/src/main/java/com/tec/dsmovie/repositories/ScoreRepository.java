package com.tec.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tec.dsmovie.entities.Score;
import com.tec.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
