import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';
import { User } from 'src/app/models/user';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  selectedAddresses: any
  addresses:any;
  singleAddress: any
  constructor( private mapService: MapService) { }

  ngOnInit(): void {
    console.log('get token');
    this.mapService.generateToken();
  }
  register(){
      console.log(this.user);
  }

  onAddressType(typeValue: any){
    
      this.mapService.getAddresses(typeValue).subscribe((addressResponse:any)=>{
       this.addresses = addressResponse;
      })    
  }

  getClickAddress(value:any){
    this.selectedAddresses = value;
    this.user.address = value;
    this.addresses =[];
  }

  

}
