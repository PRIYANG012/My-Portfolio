import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  id:number,
  functionid:string;
  icon: string;
  
}
export const ROUTES: RouteInfo[] = [
  {
     id:1,
    functionid: "hero",
    icon: "icon-home"
    
  },
  {
    id:2,
    functionid: "aboutme",
    icon: "icon-user-following"
    
  },
  {
    id:3,
    functionid: "skills",
    icon: "icon-trophy"
    
  },
  {
    id:4,
    functionid: "experience",
    icon: "icon-graduation"
    
  },
  {
    id:5, 
    functionid: "mywork",
    icon: "icon-briefcase"
    
  },
  {
    id:6,
    functionid: "contact",
    icon: "icon-envelope-letter"
    
  },
  
];


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})

export class SideBarComponent implements OnInit {
  menuItems: any[];
  constructor() { }

  

 


  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
   
  }

 

  goto(a,i){
  
    var active = document.getElementsByClassName("active");
    while (active.length)
      active[0].classList.remove("active");

    document.getElementById(i).scrollIntoView({behavior:"smooth"})
    
    document.getElementById("icon"+i).className = "nav-link text-center  sidebar-link  p-3 mb-2 active";

  }
  
}
