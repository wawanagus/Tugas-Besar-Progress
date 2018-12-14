import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'; 
import { FormGroup, FormControl,FormArray, Validators } from '@angular/forms'; 
import { BarangService } from '../barang.service'; 


@Component({
  selector: 'app-barang-edit',
  templateUrl: './barang-edit.component.html',
  styleUrls: ['./barang-edit.component.css']
})
export class BarangEditComponent implements OnInit {
  id:number;
  editMode=false;
  barangForm: FormGroup;

  constructor(private route:ActivatedRoute,
              private barangService: BarangService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.editMode=params['id']!=null;
        this.initForm();
      }
    )
  }
  onSubmit(){
    //const newRecipe = new Recipe(
      //this.barangForm.value['name'], 
      //this.barangForm.value['description'],
      //this.barangForm.value['imagePath'],
      //this.barangForm.value['ingredients']
    
    //);
    if (this.editMode){
      this.barangService.updateBarang(this.id, this.barangForm.value);
    } else{
      this.barangService.addBarang(this.barangForm.value);
    }
    this.onCancel();
  }

  onAddIngredient(){
    (<FormArray>this.barangForm.get('ingredients')).push(
      new FormGroup({
        'name' : new FormControl(null, Validators.required),
        'amount' : new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
        
      })
    );
  }
  onDeleteIngredient(index : number){
  (<FormArray>this.barangForm.get('ingredients')).removeAt(index);
  }
  onCancel(){
    this.router.navigate(['../'],{relativeTo: this.route});

  }
  private initForm(){
    let barangKode_barang='';
    let barangNama_barang='';
    let barangImagePath='';
    let barangJumlah='';
    let barangStatus='';
    let barangIngredients = new FormArray([]);

    if(this.editMode){
      const barang = this.barangService.getBarang(this.id);
      barangKode_barang = barang.kode_barang;
      barangNama_barang = barang.nama_barang;
      barangImagePath = barang.imagePath;
      barangJumlah =barang.jumlah;
      barangStatus =barang.status;
      if (barang['ingredient']) {
        for (let ingredient of barang.ingredient){
          barangIngredients.push(
          new FormGroup({
            'name' : new FormControl(ingredient.name, Validators.required),
            'Amount' : new FormControl(ingredient.amount,[
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
          })
        );
        }
      }
    }
    this.barangForm = new FormGroup({
      'kode_barang' : new FormControl(barangKode_barang, Validators.required),
      'nama_barang' : new FormControl(barangNama_barang, Validators.required),
      'imagePath' : new FormControl(barangImagePath,Validators.required),
      'jumlah' : new FormControl(barangJumlah, Validators.required),
      'status' : new FormControl(barangStatus, Validators.required),
      'ingredients' : barangIngredients
    });
  }

}
