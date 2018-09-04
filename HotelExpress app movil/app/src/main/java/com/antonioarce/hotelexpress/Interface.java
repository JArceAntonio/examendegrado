package com.antonioarce.hotelexpress;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;

public interface Interface {

    // PARA LAS PRUEBAS LOCALES
    @GET("ofertas")
    Call<List<Oferta>> getResponse();


}
