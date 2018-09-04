package com.antonioarce.hotelexpress;

import com.google.gson.annotations.SerializedName;

import java.io.Serializable;
import java.util.Date;

public class Oferta implements Serializable{
    @SerializedName("id")
    int id;
    @SerializedName("x_descripcion")
    String descripcion;
    @SerializedName("x_nombre")
    String nombre;
    @SerializedName("x_duracion")
    int duracion;
    @SerializedName("x_tipolimite")
    int tipoLimite;
    @SerializedName("x_porcentaje")
    int porcentaje;
    @SerializedName("x_tipodescuento")
    int tipoDescueento;
    @SerializedName("x_fechai")
    Date fechaInicio;
    @SerializedName("x_fechaf")
    Date fechaFin;
    @SerializedName("x_tiempo")
    int tiempo;
    @SerializedName("x_imagen")
    Imagen imagen;

    @Override
    public String toString() {
        return "Oferta{" +
                "id=" + id +
                ", descripcion='" + descripcion + '\'' +
                ", nombre='" + nombre + '\'' +
                ", duracion=" + duracion +
                ", tipoLimite=" + tipoLimite +
                ", porcentaje=" + porcentaje +
                ", tipoDescueento=" + tipoDescueento +
                ", fechaInicio=" + fechaInicio +
                ", fechaFin=" + fechaFin +
                ", tiempo=" + tiempo +
                ", imagen=" + imagen +
                '}';
    }
}
