import { Component, Directive, inject, Injectable, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { Product } from "./models/product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PracticaAPIstore';

  http = inject(HttpClient);

  products: Product[] = [];

  url_api = "https://fakestoreapi.com/products";

  ngOnInit(){
    alert("!Bienvenido");
  }

  loadProducts(){
    this.http.get<Product[]>(this.url_api).subscribe((data)=>{
      this.products = data;
    });
  }
}
