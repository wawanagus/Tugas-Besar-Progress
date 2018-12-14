import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarangComponent } from './barang/barang.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { BarangStartComponent } from './barang/barang-start/barang-start.component';
import { BarangDetailComponent } from './barang/barang-detail/barang-detail.component';
import { BarangEditComponent } from './barang/barang-edit/barang-edit.component';

const appRoutes:Routes=[
    { path:'', redirectTo:'/barangs', pathMatch:'full'},
    { path:'barangs', component:BarangComponent, children: [
        { path:'', component:BarangStartComponent},
        { path:'new', component:BarangEditComponent},
        { path:':id', component:BarangDetailComponent},
        { path:':id/edit', component:BarangEditComponent},
    ]},
    { path:'shopping-list', component:ShoppingListComponent},
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule{}