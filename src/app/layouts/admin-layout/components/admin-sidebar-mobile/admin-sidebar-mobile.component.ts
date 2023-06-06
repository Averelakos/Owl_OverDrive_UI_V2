import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/core/models/menu';
import { LayoutService } from 'src/app/core/services/layout.service';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-admin-sidebar-mobile',
  templateUrl: './admin-sidebar-mobile.component.html',
  styleUrls: ['./admin-sidebar-mobile.component.scss']
})
export class AdminSidebarMobileComponent{

  menuItems: Array<Menu>
  constructor(public layoutService: LayoutService, public menuService: MenuService, public router: Router) {
    this.menuItems = menuService.getMenu();
  }

  clickOuside(){
    this.layoutService.sidebarMobileMenuTrigger.next(false)
  }

  clickToOpenSubMenu(e){
    e.preventDefault();
    const currentTarget = e.currentTarget as HTMLElement
    const isSubMenuOpen = currentTarget.classList.contains('open-drop-down')
    const allSubMenuEl = document.querySelectorAll('.mobile-main-button')
    allSubMenuEl.forEach(element => {
      if (element.classList.contains('open-drop-down')) {
        element.classList.remove('open-drop-down')
      }
    });
    if (!isSubMenuOpen) {
      currentTarget.classList.add('open-drop-down')
    }
  }

  clickToCloseSubMenu(){
    const allSubMenuEl = document.querySelectorAll('.mobile-main-button')
    allSubMenuEl.forEach(element => {
      if (element.classList.contains('open-drop-down')) {
        element.classList.remove('open-drop-down')
      }
    });
    this.layoutService.sidebarMobileMenuTrigger.next(false)
  }

  clickToCloseSidebar(){
    this.changeContainerCss()
    this.layoutService.sidebarMobileMenuTrigger.next(false)
  }

  changeContainerCss(){
    const el = document.getElementById('mobile-sidebar-container')
    el?.classList.add('close')
    console.log(el)
  }
}