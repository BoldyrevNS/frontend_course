package com.ilya.investments.news;


public class News {
    private final long id;
    private final String name;
    private final String text;
    private final String img;
    private final String date;

    public News(long id, String name, String text, String img, String date) {
        this.id = id;
        this.name = name;
        this.text = text;
        this.img = img;
        this.date = date;

    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getText() {
        return text;
    }

    public String getImg() {
        return img;
    }

    public String getDate() {
        return date;
    }

}
