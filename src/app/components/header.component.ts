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
          <a class="navbar-item p-0 mr-4" href="/">
            <img src="logo.png" alt="KoF" style="max-height: 40px; filter: drop-shadow(0 0 8px rgba(0,210,255,0.7)); transition: all 0.3s;">
          </a>

          <div class="is-flex is-align-items-center ml-auto">
            <a href="#tea" class="nav-btn mx-2 is-hidden-mobile">
              <i class="fa fa-leaf mr-2"></i>{{ langService.t.nav.tea }}
            </a>
            <a href="#tea" class="nav-btn mx-2 is-hidden-tablet">
              <i class="fa fa-leaf"></i>
            </a>

            <a href="#menu" class="nav-btn mx-2 is-hidden-mobile">
              <i class="fa fa-cutlery mr-2"></i>{{ langService.t.nav.menu }}
            </a>
            <a href="#menu" class="nav-btn mx-2 is-hidden-tablet">
              <i class="fa fa-cutlery"></i>
            </a>
            
            <a href="#contact" class="nav-btn mx-2 is-hidden-mobile">
              <i class="fa fa-map-marker mr-2"></i>{{ langService.t.nav.contact }}
            </a>
            <a href="#contact" class="nav-btn mx-2 is-hidden-tablet">
              <i class="fa fa-map-marker"></i>
            </a>

            <!-- Social Icons -->
            <div class="is-flex is-align-items-center ml-2 mr-2">
              <a href="https://www.tiktok.com/@cafekof" target="_blank" class="social-icon-link">
                <svg viewBox="0 0 448 512" style="width: 18px; fill: currentColor; vertical-align: middle;"><path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72a162.55 162.55 0 1 1-162.55-162.55c8.95 0 17.52.84 25.85 2.4v78.51a82.48 82.48 0 1 0-25.85 161.46c45.51 0 82.48-36.97 82.48-82.48V0h82.48a127.19 127.19 0 0 0 127.19 127.19v82.72z"/></svg>
              </a>
              <a href="https://www.instagram.com/cafe.kof/" target="_blank" class="social-icon-link ml-3">
                <i class="fa fa-instagram"></i>
              </a>
            </div>
            
            <div class="dropdown is-right is-hoverable ml-2">
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
    .nav-btn {
      color: #fff;
      font-weight: 800;
      font-family: 'Montserrat', sans-serif;
      font-size: 0.95rem;
      text-transform: uppercase;
      padding: 0.5rem 1rem;
      border-radius: 12px;
      transition: all 0.3s;
    }
    .nav-btn:hover { 
      background: rgba(0, 210, 255, 0.15); 
      color: #00d2ff; 
    }
    
    .social-icon-link {
      color: #8b92a5;
      font-size: 1.2rem;
      transition: all 0.3s;
    }
    .social-icon-link:hover {
      color: #00d2ff;
      transform: scale(1.2);
      filter: drop-shadow(0 0 5px rgba(0,210,255,0.5));
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
      .nav-btn { padding: 0.5rem; font-size: 1.2rem; }
      .social-icon-link { font-size: 1.4rem; }
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
