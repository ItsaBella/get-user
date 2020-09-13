package com.lubanzi.qlitygigs.Service;

import com.lubanzi.qlitygigs.Model.User;
import com.lubanzi.qlitygigs.Repos.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService
{
    @Autowired
    public UsersRepo uRepo;

    public User create(User u)
    {
        return uRepo.save(new User(u.getId(),u.getuName(),u.getuSurname(),u.getuEmail(),u.getuPassword(),u.getuContactNumber(),u.getuType(),u.getuDOB(),u.getuCompany(),u.getuCountry()));
    }

    public List<User> getAll()
    {
        return uRepo.findAll();
    }

    public User findByEmail(String email)
    {
        return uRepo.findByuEmail(email);
    }

    public User update(User u)
    {
        User updatedUser =new User();
        updatedUser.setuName(u.getuName());
        updatedUser.setuSurname(u.getuSurname());
       // updatedUser.setuEmail(u.getuEmail());
        uRepo.save(updatedUser);
        return updatedUser;
    }

    public void deleteUser(User u)
    {
        uRepo.delete(u);
    }

}
