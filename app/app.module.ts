import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BarangComponent } from './barang/barang.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

//tambahkan code
import { BarangListComponent } from "./barang/barang-list/barang-list.component";
import { BarangDetailComponent } from "./barang/barang-detail/barang-detail.component";

//tambahkan code (2)
import { BarangItemComponent } from "./barang/barang-list/barang-item/barang-item.component";
//tambahkan code(3)
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { BarangStartComponent } from './barang/barang-start/barang-start.component';
import { BarangEditComponent } from './barang/barang-edit/barang-edit.component';
import { BarangService } from './barang/barang.service';
import { DataStorageService } from './shared/data-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BarangComponent,
    ShoppingListComponent,

    //tambahkan code
    BarangListComponent,
    BarangDetailComponent,

    //tambahkan code(2)
    BarangItemComponent,

    //tambahkan code(3)
    ShoppingEditComponent,
    DropdownDirective,
    BarangStartComponent,
    BarangEditComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService, BarangService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
