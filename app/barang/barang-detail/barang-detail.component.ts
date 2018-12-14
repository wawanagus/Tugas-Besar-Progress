import { Component, OnInit, Input } from '@angular/core';
import { Barang } from '../barang.model';
import { BarangService } from '../barang.service';
import { ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-barang-detail',
  templateUrl: './barang-detail.component.html',
  styleUrls: ['./barang-detail.component.css']
})
export class BarangDetailComponent implements OnInit {
  //@Input() barang:Barang;
  barang:Barang;
  id:number;

  constructor(private barangService:BarangService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.barang=this.barangService.getBarang(this.id);
      }
    )
  }
  onAddShoppingList(){
    this.barangService.addIngredientsShoppingList(this.barang.ingredient);
  }

  onEditBarang(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }
  ondeleteBarang(){
    this.barangService.deleteBarang(this.id);
    this.router.navigate(['/barangs']);
  }
}
