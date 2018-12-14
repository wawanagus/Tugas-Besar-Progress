import { Injectable } from "@angular/core";
import { Http, Response} from "@angular/http";
import { BarangService } from "../barang/barang.service";
import { Barang} from "../barang/barang.model";
import "rxjs/add/operator/map";

@Injectable()
export class DataStorageService {
constructor(private http:Http, private barangService: BarangService,) {}

storeRecipes(){  
    return this.http.put('https://ng-barang-book-24d58.firebaseio.com/barangs.json', this.barangService.getBarangs());
}
getRecipes(){
    this.http.get('https://ng-barang-book-24d58.firebaseio.com/barangs.json')
    .map(
        (response: Response) =>{
            const barangs: Barang[] = response.json();
            for (let barang of barangs){
                if(!barang['ingredients']){
                    console.log(barang);
                    barang['ingredients'] = [];
                }
            }
            return barangs;
        }
    )
    .subscribe(
    (barangs : Barang[]) =>{
        this.barangService.setBarangs(barangs);
    }
    );
}
}