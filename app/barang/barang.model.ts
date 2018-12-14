import { Ingredient } from '../shared/ingredient.model';
export class Barang
{
    public kode_barang:string;
    public nama_barang:string;
    public jumlah:string;
    public status:string;
    public imagePath:string;
    public ingredient:Ingredient[];

    constructor(kode_barang:string,nama_barang:string,jumlah:string,status:string,imagePath:string,ingredient:Ingredient[])
    {
        this.kode_barang=kode_barang;
        this.nama_barang=nama_barang;
        this.jumlah=jumlah;
        this.status=status;
        this.imagePath=imagePath;
        this.ingredient=ingredient;
    }
}