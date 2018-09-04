package com.antonioarce.hotelexpress;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.drawable.Drawable;
import android.icu.text.SimpleDateFormat;
import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.util.Base64;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import com.squareup.picasso.Picasso;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.util.Date;
import java.util.List;

public class Adapter extends RecyclerView.Adapter {

    List<Oferta> ofertas;

    public Adapter(List<Oferta> ofertas) {
        this.ofertas = ofertas;
    }

    @NonNull
    @Override
    public RecyclerView.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        return new Holder(LayoutInflater.from(parent.getContext()).inflate(R.layout.card_oferta, parent, false));
    }

    @Override
    public void onBindViewHolder(@NonNull RecyclerView.ViewHolder holder, int position) {
        ((Holder)holder).bind(ofertas.get(position));
    }

    @Override
    public int getItemCount() {
        return ofertas.size();
    }

    public class Holder extends RecyclerView.ViewHolder{

        private ImageView ofertaImageView;
        private TextView nombreTxt;
        private TextView descuentoTxt;
        private TextView fechasTxt;
        private TextView duracionTxt;
        private TextView descripcionTxt;

        public Holder(View itemView) {
            super(itemView);
            ofertaImageView = (ImageView) itemView.findViewById(R.id.ofertaImageView);
            nombreTxt = (TextView) itemView.findViewById(R.id.nombreTxt);
            descuentoTxt = (TextView) itemView.findViewById(R.id.descuentoTxt);
            fechasTxt = (TextView) itemView.findViewById(R.id.fechasTxt);
            duracionTxt = (TextView) itemView.findViewById(R.id.duracionTxt);
            descripcionTxt = (TextView) itemView.findViewById(R.id.descripcionTxt);
        }

        public void bind(Oferta oferta){
            String duracion = oferta.duracion == 0 ? "Indefinido" : Integer.toString(oferta.duracion) + " Dias";
            nombreTxt.setText("Nombre: " + oferta.nombre);
            descuentoTxt.setText("Descuento: " + Integer.toString(oferta.porcentaje) + " %");
            fechasTxt.setText("Inicio: " + formatDate(oferta.fechaInicio));
            duracionTxt.setText("Duracion: " + duracion);
            descripcionTxt.setText(oferta.descripcion);



            if (oferta.imagen != null){
                byte[] array = Base64.decode(oferta.imagen.data, Base64.DEFAULT);
                Bitmap bmp = BitmapFactory.decodeByteArray(array,0, array.length);
                ofertaImageView.setImageBitmap(bmp);
            }else{
                Picasso.get().load(R.drawable.noimg).into(ofertaImageView);
            }
        }

        private String formatDate(Date date){
            String day = date.getDate() < 10 ? "0" + Integer.toString(date.getDate()) : Integer.toString(date.getDate());
            String month = date.getMonth() < 10 ? "0" + Integer.toString(date.getMonth() + 1) : Integer.toString(date.getMonth() + 1);
            String year = Integer.toString(date.getYear() + 1900);
            String hour = date.getHours() < 10 ? "0" + Integer.toString(date.getHours()) : Integer.toString(date.getHours());
            String minutes = date.getMinutes() < 10 ? "0" + Integer.toString(date.getMinutes()) : Integer.toString(date.getMinutes());
            return day + "/" + month + "/" + year + " " + hour + ":" + minutes;
        }
    }
}
