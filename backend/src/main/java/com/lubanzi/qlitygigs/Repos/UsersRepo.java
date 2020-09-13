package com.lubanzi.qlitygigs.Repos;

import com.lubanzi.qlitygigs.Model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * Interface that holds function declaration.
 */
@Repository
public interface UsersRepo extends MongoRepository<User,String>
{

    public User findByuEmail (String uEmail);

   //Declare Registration and Login functions here
}
