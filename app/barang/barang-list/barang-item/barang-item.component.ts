import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Barang } from '../../barang.model';
import { BarangService } from '../../barang.service';

@Component({
  selector: 'app-barang-item',
  templateUrl: './barang-item.component.html',
  styleUrls: ['./barang-item.component.css']
})
export class BarangItemComponent implements OnInit {

  @Input() barang:Barang;
  @Input() index:number;
  //@Output() recipeSelected=new EventEmitter<void>();

  //constructor(private recipeService:BarangService) { }

  ngOnInit() {
  }

  //onSelected(){
    //this.recipeSelected.emit();
  //  this.recipeService.recipeSelected.emit(this.barang);
  //}
}
