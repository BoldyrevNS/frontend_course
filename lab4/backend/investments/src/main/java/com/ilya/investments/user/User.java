package com.ilya.investments.user;

public class User {
    private final long id;
    private final String name;
    private final String password;

    public User(long id, String name, String password)
    {
        this.id = id;
        this.name = name;
        this.password = password;
    }

    public long getId()
    {
        return id;
    }

    public String getName()
    {
        return name;
    }


    public String getPassword()
    {
        return password;
    }

}
