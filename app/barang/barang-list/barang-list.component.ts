import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Barang } from '../barang.model';
import { BarangService } from '../barang.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-barang-list',
  templateUrl: './barang-list.component.html',
  styleUrls: ['./barang-list.component.css']
})
export class BarangListComponent implements OnInit, OnDestroy {

//@Output() recipeWasSelected=new EventEmitter<Barang>();
barangs:Barang[];
subscription: Subscription;
//property:class barang


  constructor(private barangService:BarangService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
  this.subscription =  this.barangService.barangsChanged.subscribe(
      (barangs: Barang[]) =>{
        this.barangs= barangs;
      }
    );
    this.barangs=this.barangService.getBarangs();
  }

  //onRecipeSelected(barang:Barang){
    //this.recipeWasSelected.emit(barang);
  //}
  onNewBarang(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
