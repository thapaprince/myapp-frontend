import { Component } from '@angular/core';

import { UserService } from 'src/app/core/services/user.service';

import { User } from '../../core/models/auth.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-profile2',
  templateUrl: './profile2.component.html',
  styleUrls: ['./profile2.component.less']
})
export class Profile2Component {
  // userObjData!:User; // ! assignment assertion it means this is tell to ts dont worry this varibale will be assining later.
  userObjData: User[] = [];
  name!:string;
  searchText:string="";
  isDisabled = true; 
  isVisible=true;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    console.log("in");
    // this.name="Prince Thapa";
    this.name="Prince Thapa Angular Developer";
    console.log("11....",this.name);
    let id = 1;

    // this.userService.getUser(1).subscribe({
    //   next: (response) => {
    //     console.log("pres", response);
    //   },
    //   error: (err)=>{
    //     console.log("error", err);
    //   }
    // })

    this.userService.getUserBYId(1).subscribe({
      next: (res) => {
        console.log(res);
        let userData = res;
        this.userObjData.push(userData);
        console.log("userObjData...",this.userObjData);
        sessionStorage.setItem("user", JSON.stringify(userData))
      },
      error: (error) => {
        console.log(error);
      }
    })

  }

  editUser(user: User) {
    this.router.navigate(['/profileDetails', user.id]); // paramMap set syntax for mandatory 
  }


}
