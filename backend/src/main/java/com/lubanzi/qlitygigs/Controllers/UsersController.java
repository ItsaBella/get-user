package com.lubanzi.qlitygigs.Controllers;

import com.lubanzi.qlitygigs.Model.User;
import com.lubanzi.qlitygigs.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


/**
 * Controller class for handling user objects.
 * Contains implementation for Repo interface.
 */
@RestController
public class UsersController
{
    @Autowired
    private UserService userService;


    /**
     *
     * @param User object
     * @return String representation of created User Object.
     */
    @PostMapping("/createUser")
    public String createUser(@RequestBody User u)
    {
        User nU = userService.create(u);
        return nU.toString();
    }


    /**
     * GetUserByEmail Function
     * @param email address string
     * @return User object related to the email address
     */
    @GetMapping("/getUserByEmail")
    public User getU(@RequestParam String email)
    {
        return userService.findByEmail(email);
    }

    /**
     * Get All Users Function
     * @return An Array List of all User objects
     */
    @RequestMapping("/getAllUsers")
    public List<User> getAll()
    {
       return userService.getAll();
    }


    /**
     * @param User object to be updated
     * @return Updated User object
     */
    @RequestMapping("/updateUser")
    public User update(@RequestBody User u)
    {
        return userService.update(u);
    }

    /**
     * @param User object to be deleted
     * @return String confirming user has been deleted
     */
    @RequestMapping("/deleteUser")
    public String deleteUser(@RequestBody User u)
    {
        userService.deleteUser(u);
        return "User deleted!";
    }


}
