package com.antonioarce.hotelexpress;

import com.google.gson.annotations.SerializedName;

import java.io.Serializable;
import java.util.Arrays;
import java.util.List;

public class Imagen implements Serializable{
    @SerializedName("type")
    String type;
    @SerializedName("data")
    byte[] data;

    @Override
    public String toString() {
        return "Imagen{" +
                "type='" + type + '\'' +
                ", data=" + Arrays.toString(data) +
                '}';
    }
}
