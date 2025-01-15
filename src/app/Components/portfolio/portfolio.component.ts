import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  lightboxImageSrc: string = '';

  showPic(src: string): void {
    this.lightboxImageSrc = src;
    const lightboxContainer = document.querySelector('.lightbox-container') as HTMLElement;
    const lightboxItem = document.querySelector('.lightbox-item') as HTMLElement;
    if (lightboxContainer) {
      lightboxContainer.classList.remove('d-none');
      lightboxContainer.classList.add('d-flex');
    }
    lightboxContainer.addEventListener('click', (e)=>{ 
      lightboxContainer.classList.replace('d-flex', 'd-none')
     })
     lightboxItem.addEventListener('click', (e)=>{ 
      e.stopPropagation()
     })
  }
  
}
