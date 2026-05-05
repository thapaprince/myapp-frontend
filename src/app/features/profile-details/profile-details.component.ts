import { Component, ElementRef, ViewChild, Renderer2  } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.less']
})
export class ProfileDetailsComponent {
  id!: string | null;
  @ViewChild('titleId') titleIdRef!: ElementRef;
  constructor(private router: Router, private route: ActivatedRoute, private renderer:Renderer2) {


  }
  ngOnInit() {
  }

  ngAfterViewInit() {

    this.id = this.route.snapshot.paramMap.get('id');

    // this.titleIdRef.nativeElement.textContent = this.id; // normal and older way

    this.renderer.setProperty(this.titleIdRef.nativeElement, 'textContent', this.id); // new angular recomended

    

    


  }

update(){
     
    }

}
