import { Injectable} from '@angular/core';
import { Barang } from '../barang/barang.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingEditComponent } from '../shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';


@Injectable()
export class BarangService {
 
  barangsChanged = new Subject<Barang[]>();
  //property:class recipe
  private barangs:Barang[]=[
    new Barang('0001','LCD Proyektor'
    ,'1','Tersedia','https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//664/benq_benq-ms506p-lcd-proyektor_full04.jpg',[
      new Ingredient('meal',1),
      new Ingredient('tomato',2)
    ]),
    new Barang('0002','Printer Canon','2','Tersedia'
    ,'https://i5.walmartimages.com/asr/e82fbb18-0058-4f58-978b-802621337694_1.0cc362e9c6faddc6e16f309cc0223f46.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',[
      new Ingredient('rice',1),
      new Ingredient('meal',3),
      new Ingredient('egg',1)
    ]),
  ];
  setBarangs(barangs: Barang[]){
    this.barangs = barangs;
    this.barangsChanged.next(this.barangs.slice());
  }
  getBarangs(){
    return this.barangs.slice();
  }
  addIngredientsShoppingList(ingredients:Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }

  getBarang(index:number){
    return this.barangs[index];
  }

  addBarang(barang :Barang){
    this.barangs.push(barang);
    this.barangsChanged.next(this.barangs.slice());
  }
  updateBarang(index :number, newBarang: Barang){
    this.barangs[index] = newBarang;
    this.barangsChanged.next(this.barangs.slice());
  }

  deleteBarang(index: number){
    this.barangs.splice(index, 1);
    this.barangsChanged.next(this.barangs.slice());
  }

constructor(private slsService:ShoppingListService) { }

}
