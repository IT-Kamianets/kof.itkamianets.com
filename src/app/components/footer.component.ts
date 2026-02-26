import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer custom-footer">
      <div class="container has-text-centered">
        <img src="logo.png" alt="KoF" class="footer-logo">
        <div class="is-flex is-justify-content-center mt-4 mb-5">
          <a href="https://github.com/IT-Kamianets/kof.itkamianets.com" target="_blank" class="social-link">
            <i class="fa fa-github"></i>
          </a>
        </div>
        <p class="is-size-7 footer-text">
          &copy; 2026 KoF CAFE. DESIGNED FOR IT-KAMIANETS.
          <br>
          designed by Anatoliy
        </p>
      </div>
    </footer>
  `,
  styles: [`
    .custom-footer {
      background: #090a0f;
      padding: 4rem 1.5rem 6rem;
      border-top: 1px solid rgba(0, 210, 255, 0.1);
    }
    .footer-logo {
      max-height: 45px;
      filter: grayscale(1) opacity(0.2);
      transition: all 0.3s;
    }
    .footer-logo:hover {
      filter: grayscale(0) opacity(1) drop-shadow(0 0 10px rgba(0,210,255,0.5));
    }
    .social-link {
      display: inline-block;
      width: 48px; height: 48px;
      line-height: 48px;
      border-radius: 50%;
      background: #15171e;
      color: #8b92a5;
      font-size: 1.4rem;
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      border: 1px solid transparent;
      display: flex; justify-content: center; align-items: center;
    }
    .social-link:hover {
      background: rgba(0, 210, 255, 0.1);
      color: #00d2ff;
      border-color: rgba(0, 210, 255, 0.4);
      box-shadow: 0 5px 20px rgba(0,210,255,0.4);
      transform: translateY(-5px);
    }
    .footer-text {
      color: #4a4e5c;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      letter-spacing: 2px;
    }
  `]
})
export class FooterComponent {}
