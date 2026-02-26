import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService, Lang } from '../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar is-fixed-top-desktop navbar-bottom-mobile custom-nav" role="navigation">
      <div class="container px-4">
        <div class="navbar-brand is-flex is-align-items-center" style="width: 100%;">
          <a class="navbar-item p-0 mr-4 is-hidden-mobile" href="/">
            <img src="logo.png" alt="KoF" style="max-height: 40px; filter: drop-shadow(0 0 8px rgba(0,210,255,0.7)); transition: all 0.3s;">
          </a>

          <div class="is-flex is-align-items-center is-justify-content-space-around-mobile ml-auto-desktop nav-container">
            <a href="#tea" class="nav-btn mx-1">
              <i class="fa fa-leaf"></i>
              <span>{{ langService.t.nav.tea }}</span>
            </a>

            <a href="#menu" class="nav-btn mx-1">
              <i class="fa fa-cutlery"></i>
              <span>{{ langService.t.nav.menu }}</span>
            </a>
            
            <a href="#contact" class="nav-btn mx-1">
              <i class="fa fa-map-marker"></i>
              <span>{{ langService.t.nav.contact }}</span>
            </a>
            
            <div class="dropdown is-right is-hoverable ml-1">
              <div class="dropdown-trigger">
                <button class="lang-btn" aria-haspopup="true" aria-controls="dropdown-menu">
                  <i class="fa fa-globe"></i>
                  <span>{{ langService.currentLang() }}</span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content custom-dropdown">
                  <a *ngFor="let lang of langs" (click)="setLang(lang)" class="dropdown-item">
                    {{lang}}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .custom-nav {
      background: rgba(9, 10, 15, 0.85);
      backdrop-filter: blur(15px);
      border-bottom: 1px solid rgba(0, 210, 255, 0.1);
      box-shadow: 0 4px 30px rgba(0,0,0,0.5);
    }
    .nav-container {
      width: 100%;
    }
    @media screen and (min-width: 1024px) {
      .nav-container {
        width: auto;
        display: flex;
        justify-content: flex-end;
      }
      .ml-auto-desktop { margin-left: auto; }
    }
    .nav-btn {
      color: #fff;
      font-weight: 800;
      font-family: 'Montserrat', sans-serif;
      font-size: 0.95rem;
      text-transform: uppercase;
      padding: 0.5rem 1rem;
      border-radius: 12px;
      transition: all 0.3s;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .nav-btn:hover { 
      background: rgba(0, 210, 255, 0.15); 
      color: #00d2ff; 
    }
    
    .lang-btn {
      background: #15171e;
      border: 2px solid rgba(0, 210, 255, 0.4);
      color: #00d2ff;
      padding: 0.3rem 0.7rem;
      border-radius: 20px;
      font-weight: 800;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.3s;
      font-size: 0.8rem;
    }
    .lang-btn:hover { 
      background: #00d2ff; 
      color: #090a0f; 
    }
    
    .custom-dropdown {
      background: #15171e;
      border: 1px solid #2a2d3a;
      border-radius: 16px;
      overflow: hidden;
    }
    .custom-dropdown .dropdown-item {
      color: #fff;
      font-weight: 700;
      padding: 0.75rem 1.5rem;
    }
    .custom-dropdown .dropdown-item:hover {
      background: #00d2ff;
      color: #090a0f;
    }
    
    @media screen and (max-width: 1023px) {
      .is-justify-content-space-around-mobile {
        justify-content: space-around !important;
      }
      .nav-btn { 
        padding: 0.4rem 0.2rem; 
        font-size: 0.65rem;
        flex-direction: column;
        gap: 4px;
        min-width: 60px;
      }
      .nav-btn i {
        font-size: 1.2rem;
      }
      .lang-btn {
        background: transparent;
        border: none;
        color: #fff;
        flex-direction: column;
        padding: 0.4rem 0.2rem;
        gap: 4px;
        font-size: 0.65rem;
        min-width: 60px;
      }
      .lang-btn i {
        font-size: 1.2rem;
      }
      .dropdown {
        position: static !important;
      }
      .dropdown-menu {
        bottom: 100% !important;
        top: auto !important;
        padding-bottom: 10px;
      }
    }
  `]
})
export class HeaderComponent {
  langService = inject(LanguageService);
  langs: Lang[] = ['UA', 'EN', 'IT', 'DE', 'FR'];
  setLang(lang: Lang) { this.langService.setLang(lang); }
}
