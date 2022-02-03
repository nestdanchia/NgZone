import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AgGridAngular } from 'ag-grid-angular';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { mergeMap, tap } from 'rxjs/operators';

interface Data {
  make:string,
  model:string,
  price:number
}

export interface User {
  id:       number;
  name:     string;
  username: string;
  email:    string;
  address:  Address;
  phone:    string;
  website:  string;
  company:  Company;
}
export interface Company {
name:        string;
catchPhrase: string;
bs:          string;
}
export interface Address {
street:  string;
suite:   string;
city:    string;
zipcode: string;
geo:Geo;
}
export interface Geo{
  lat:string;
  lng:string
}


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit,AfterViewInit {
public gridApig:any;
 public gridColumnApig:any;

public columnDefsg:any;
  public defaultColDefg:any;
public rowDatag!: [];
public gridApigu:any;
public columnDefsu:any;
  public defaultColDefu:any;
public rowDatau!: [];

dataForUser11$!:Observable<User[]>;



 // @ViewChild('agGrid') agGrid!: AgGridAngular;
//  @ViewChild('gGridEmpty') gGridEmpty!: AgGridAngular;
  // const columnDefs = [{field: 'make'}];

  columnDefs0 = [
  ];
  gridOptions = {

    defaultColDef: {
        sortable: true,
        filter: 'agTextColumnFilter',
        resizable: true
    },

    columnDefs: this.columnDefs0,
  
    pagination: true
};
  gridColumnApiu: any;
/*
  columnDefs = [
    {headerName: 'Make', field: 'make',filter: true, checkboxSelection: true},
    {headerName: 'Model', field: 'model',sortable: true, filter: true},
    {headerName: 'Price', field: 'price',sortable: true, filter: true},
    { field: 'athlete', headerName: 'Best Athlete' } ,
    { field: 'athlete', headerValueGetter: (params:any) => 'New Athlete' }
];

rowData = [
  {make: 'Toyota', model: 'Celica', price: 35000},
  {make: 'Ford', model: 'Mondeo', price: 32000},
  {make: 'Porsche', model: 'Boxter', price: 72000}
];
*/
// rowData!: Observable<Data[]>;
  constructor(private http: HttpClient ) { 
   //this.rowData = this.http.get<Data[]>('https://www.ag-grid.com/example-assets/small-row-data.json');
   this.dataForUser11$ = this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`)
  .pipe(
    tap(r=>  console.log('respuesta Array of Object',r)),
    /*
    mergeMap(result=>result),
    tap(mergeResp=>console.log('mergeResp object',mergeResp)),
*/
    // emito un objeto
    //map(r=>r)

  )
  this.dataForUser11$.subscribe(v=>console.log(' objeto',v)  )
   // dataForUser11$.subscribe(v=>console.log('transformo objeto en un array de ese objeto',Array.of(v))  )
   this.columnDefsg = [
    {
     // headerName: 'Athlete Details',
       

      children: [
        {
          headerName: 'Athlete',
          field: 'athlete',
          width: 180,
          filter: 'agTextColumnFilter',
        },
        {
          headerName: 'Age',
          field: 'age',
          width: 90,
          filter: 'agNumberColumnFilter',
        },
        {
          headerName: 'Country',
          field: 'country',
          width: 140,
        },
      ],
    },
    {
     // headerName: 'Sports Results',
      children: [
        {
          headerName: 'Sport',
          field: 'sport',
          width: 140,
        },
        {
          headerName: 'Total',
          columnGroupShow: 'closed',
          field: 'total',
          width: 100,
          filter: 'agNumberColumnFilter',
        },
        {
          headerName: 'Gold',
          columnGroupShow: 'open',
          field: 'gold',
          width: 100,
          filter: 'agNumberColumnFilter',
        },
        {
          headerName: 'Silver',
          columnGroupShow: 'open',
          field: 'silver',
          width: 100,
          filter: 'agNumberColumnFilter',
        },
        {
          headerName: 'Bronze',
          columnGroupShow: 'open',
          field: 'bronze',
          width: 100,
          filter: 'agNumberColumnFilter',
        },
      ],
    },
  ];
  this.defaultColDefg = {
    sortable: true,
    resizable: true,
    filter: true,
  };

  this.columnDefsu = [
    {
      headerName: 'Name',
      columnGroupShow: 'open',
      field: 'name',
    }, 
       
    {
      headerName: 'Username',
      columnGroupShow: 'open',
      field: 'username',
    }, 
      
       
         
     
     
  
    
        {
          headerName: 'Suite',
          columnGroupShow: 'open',
          field: 'address.suite',
          
        },
        {
          headerName: 'City',
          columnGroupShow: 'open',
          field: 'address.city',
         
        },
      
      
    
    
  ];
  this.defaultColDefu= {
    sortable: true,
    resizable: true,
    filter: true,
  };



  }

  ngOnInit(): void {}

  
   


    

  
  ngAfterViewInit() {}
    /*
    this.rowData.subscribe(data=>{
      console.log('data[0]',data[0])
    
      const colDefs= this.gGridEmpty.api.getColumnDefs() ;
      console.log('colDefs:Definiciones de columna',colDefs)
       colDefs!.length=0;
       // Get all the keys from the first Object in the JSON.
          const keys = Object.keys(data[0])
          console.log('Obtenemos las claves keys',keys)
          // agregamos cada key a colDefs con el valor de field
        
          keys.forEach(key => colDefs!.push({field : key}));
          // establecemos las nuevas definiciones utilizando el array modificado
          this.gGridEmpty.api.setColumnDefs(colDefs!);
            // el name del field lo mapeamos al rowData
          this.gGridEmpty.api.setRowData(data)
  }
    )*/
    onGridReadyu(params:any) {
      this.gridApigu = params.api;
      console.log('this.gridApig',this.gridApigu)
      this.gridColumnApiu = params.columnApi;
      this.http
        .get<User[]>('https://jsonplaceholder.typicode.com/users')
        .subscribe((data) =>{console.log('data!!!!!',data[0]);params.api.setRowData(data);console.log(data[0])});
    }
   
    
    

  onGridReady(params:any) {
    this.gridApig = params.api;
    console.log('this.gridApig',this.gridApig)
    this.gridColumnApig = params.columnApi;
    this.http
      .get('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .subscribe((data) =>{params.api.setRowData(data);console.log(data)});
  }
 
 /*
  getSelectedRows(): void {
      const selectedNodes = this.agGrid.api.getSelectedNodes();
      console.log('selectedNodes',selectedNodes)
        const selectedData = selectedNodes.map(node => node.data);
        console.log('selectedData',selectedData)
     const selectedDataStringPresentation = selectedData.map(node => `${node.make} ${node.model}`).join(', ');
  
       console.log(  `Selected nodes: ${selectedDataStringPresentation}`);
     }*/
}
/*

this.columnDefs = [
  
  { 
      headerName: 'Fecha',
      field: 'fecha',
      maxWidth: 220,
  },
  {
      headerName: 'Estatus',
      field: 'estatus',
      maxWidth: 220,
  },
  {
      headerName: 'Tipo de recuado',
      field: 'fee',
  },
  { 
        headerName: 'Empresa1',
       field: 'banks.empresa1
  },
  
  {     headerName: 'Empresa2',
       field: 'banks.empresa2'
  },
  { 
         headerName: 'Empresa3',
       field: 'banks.empresa3'
  }
]
 
      
     
    

*/
