import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  status = false;
  @Input() profilePicUrl: string | undefined;
  // @Output() openModal = new EventEmitter<void>();
  isModalOpen = false;
  modalImageUrl = '/assets/images/anand.png';
  addToggle()
  {
    this.status = !this.status;       
  }

  isMobileMenuOpen: boolean = false;
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  openModal(): void {
    this.isModalOpen = true;
    this.modalImageUrl = '../../assets/images/anand.png'; // Set the modal image URL
 
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
  
//  openPopUp(){
//   const dialogRef = this.dialog.open(popupco,{data:{profilePicUrl:'../../assets/images/anand.png'}})
//  }
}
