import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const $:any;
@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  infoConsulta:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.listar();
    setTimeout(function(){
      $('#t_socios').DataTable();
    },100)
    
  }

  listar():void{
    this.http.get("http://localhost:8080/api/tamasys/socios/consultar", {responseType:"json"})
    .subscribe((res:any)=>{
      console.log(res);
      this.infoConsulta=res;
    });
  }

  eliminar(id:any):void{
    this.http.delete("http://localhost:8080/api/tamasys/socios/eliminar/"+id)
    .subscribe((res:any)=>{
      console.log(res);
      this.listar();
    })
  }
}
