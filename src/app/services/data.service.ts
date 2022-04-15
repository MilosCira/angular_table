import { Injectable, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable()
export class DataService implements OnInit {

  userData!:User[];

  constructor() {
    this.userData=[{
      id:1,
      fullname:'Angelo Trotter',
      userImage:'../assets/man.jpg',
      checked:false,
      phone:'(621) 321-2232',
      ssn:'123-45-6789',
      dob:'12/6/84',
      hired:'3/24/17',
      cdl:'587662410',
      stateImage:'../assets/state.png',
      cdlExp:'1.565',
      medicalExp:'565',
      mvrExp:'65'

    },
    {
      id:2,
      fullname:'Darryl Tolbert',
      userImage:'../assets/man.jpg',
      checked:false,
      phone:'(621) 321-2232',
      ssn:'123-45-6789',
      dob:'12/6/84',
      hired:'3/24/17',
      cdl:'587662410',
      stateImage:'../assets/state.png',
      cdlExp:'1.565',
      medicalExp:'565',
      mvrExp:'65'

    },
    {
      id:3,
      fullname:'Eric Reid',
      userImage:'../assets/man.jpg',
      checked:false,
      phone:'(621) 321-2232',
      ssn:'123-45-6789',
      dob:'12/6/84',
      hired:'3/24/17',
      cdl:'587662410',
      stateImage:'../assets/state.png',
      cdlExp:'1.565',
      medicalExp:'565',
      mvrExp:'65'

    },
    {
      id:4,
      fullname:'Glen Cotton',
      userImage:'../assets/man.jpg',
      checked:false,
      phone:'(621) 321-2232',
      ssn:'123-45-6789',
      dob:'12/6/84',
      hired:'3/24/17',
      cdl:'587662410',
      stateImage:'../assets/state.png',
      cdlExp:'1.565',
      medicalExp:'565',
      mvrExp:'65'

    },
    {
      id:5,
      fullname:'Issac Dougls',
      userImage:'../assets/man.jpg',
      checked:false,
      phone:'(621) 321-2232',
      ssn:'123-45-6789',
      dob:'12/6/84',
      hired:'3/24/17',
      cdl:'587662410',
      stateImage:'../assets/state.png',
      cdlExp:'1.565',
      medicalExp:'565',
      mvrExp:'65'

    },
    {
      id:6,
      fullname:'James Smith',
      userImage:'../assets/man.jpg',
      checked:false,
      phone:'(621) 321-2232',
      ssn:'123-45-6789',
      dob:'12/6/84',
      hired:'3/24/17',
      cdl:'587662410',
      stateImage:'../assets/state.png',
      cdlExp:'1.565',
      medicalExp:'565',
      mvrExp:'66'

    },
   ]
  }

  fillteredData:any = [];

  ngOnInit() {
    this.defaultData();
  }
   
 

  //return all drives from data
  defaultData() {
    for (let i = 0; i < this.userData.length; i++) {
     this.userData[i];
    }
    return this.userData
  }

  //function for search
  searchData(search:any) {
    this.fillteredData = [];
    for (let i = 0; i < this.userData.length; i++) {
      if (
        this.userData[i].fullname.toLowerCase().concat().search(search.toLowerCase()) >= 0 ||
        this.userData[i].phone.search(search) >= 0 ||
        this.userData[i].ssn.search(search) >= 0 ||
        this.userData[i].dob.search(search) >= 0 ||
        this.userData[i].hired.search(search) >= 0 ||
        this.userData[i].cdl.search(search) >= 0 ||
        this.userData[i].medicalExp.search(search) >= 0 ||
        this.userData[i].mvrExp.search(search) >= 0 ||
        this.userData[i].cdlExp.search(search) >= 0
      ) {
        this.fillteredData.push(this.userData[i]);
      }
    }    
 
    
    return this.fillteredData;
  }

   //Function return count of users
   countCheckedUsers() {
    let count=0;
    for (let i = 0; i < this.userData.length; i++) {
      if (this.userData[i].checked === true) {
        count += 1;
      }
    }
    return count;
  }

  //Function for checked user
  changeCheckValue(checked:any, id:any) {
    for (let i = 0; i < this.userData.length; i++) {
      if (this.userData[i].id === id) {
        this.userData[i].checked = !checked;
      }
    }
    return this.countCheckedUsers()
  }

 
}
