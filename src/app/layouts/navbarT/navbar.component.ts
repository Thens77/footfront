import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponentT implements OnInit {
  id:number | undefined ;
  constructor(protected activatedRoute : ActivatedRoute) {}

  ngOnInit(): void {
    this.id =this.activatedRoute.snapshot.params["id"];

  }

  toggleCollapse(): void {
    if (document.body.classList.contains('toggle-sidebar')) {
      document.body.classList.remove('toggle-sidebar');
    } else {
      document.body.classList.add('toggle-sidebar');
    }
  }
  colapss1(): void {
    const box1 = document.getElementById('box1');

    if (box1?.classList.contains('collapsed')) {
      box1.classList.remove('collapsed');
    } else {
      box1?.classList.add('collapsed');
    }
    this.hiden1();
  }
  hiden1(): void {
    const show = document.getElementById('components-nav1');

    show?.classList.toggle('show');
  }
}
