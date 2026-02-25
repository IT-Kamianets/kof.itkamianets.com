import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero -->
    <section class="hero is-medium hero-glow">
      <div class="hero-body">
        <div class="container has-text-centered">
          <img src="logo.png" alt="KoF" style="max-height: 180px; filter: drop-shadow(0 0 30px rgba(0,210,255,0.6)); margin-bottom: 1.5rem;" class="hero-logo-hover">
          <p class="subtitle is-5 mt-2" style="color: #8b92a5 !important; font-weight: 800; letter-spacing: 6px; text-transform: uppercase;">
            Modern Food Culture
          </p>
        </div>
      </div>
    </section>

    <!-- Menu Section -->
    <section id="menu" class="section px-4 pt-0">
      <div class="container is-max-desktop">
        
        <div *ngFor="let category of translatedMenu()" class="mb-6">
          <div class="category-header">
            <h2>{{ category.name }}</h2>
            <div class="line"></div>
          </div>
          
          <div class="columns is-multiline is-mobile px-1">
            <div *ngFor="let item of category.items" class="column is-6-mobile is-4-tablet is-3-desktop mb-3 px-2">
              <div class="food-card">
                <div class="card-image-wrapper">
                  <img [src]="item.image" [alt]="item.title" (error)="onImgError($event, category.name)">
                </div>
                <div class="card-content-custom">
                  <div class="food-title">{{ item.title }}</div>
                  <div class="price-tag">{{ item.price }} ₴</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section px-4 pb-6" style="background: #101218; border-top: 1px solid #1f222d;">
      <div class="container is-max-desktop">
        <div class="columns is-vcentered py-6">
          <div class="column is-5">
            <h2 class="title is-2 mb-6" style="background: linear-gradient(135deg, #fff, #00d2ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
              {{ ls.t.visit.title }}
            </h2>
            
            <div class="is-flex is-align-items-center mb-5">
              <div class="icon-box"><i class="fa fa-map-marker"></i></div>
              <div>
                <p class="is-size-4 has-text-weight-bold">{{ ls.t.visit.address }}</p>
                <p class="is-size-6 has-text-grey">{{ ls.t.visit.city }}</p>
              </div>
            </div>
            
            <div class="is-flex is-align-items-center mb-6">
              <div class="icon-box"><i class="fa fa-clock-o"></i></div>
              <p class="is-size-4 has-text-weight-bold">10:00 — 20:45</p>
            </div>
            
            <div class="is-flex mt-5">
              <a href="https://www.instagram.com/cafe.kof/" target="_blank" class="social-circle-btn">
                <i class="fa fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/people/KOF/61570099032988/" target="_blank" class="social-circle-btn ml-4">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="https://www.google.com/maps" target="_blank" class="button is-primary is-outlined is-rounded is-large has-text-weight-bold map-btn ml-5">
                <i class="fa fa-map mr-2"></i> {{ ls.t.visit.route }}
              </a>
            </div>
          </div>
          
          <div class="column is-7 mt-5-mobile">
            <div class="map-wrapper">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.565342750343!2d26.5807197!3d48.6876723!2m3!1f0!2f0!3f0!3m2!1i1024!2i1024!4f13.1!3m3!1m2!1s0x4733c70055d72f1b%3A0xa28cdea40d72745d!2zS29G!5e0!3m2!1suk!2sua!4v1700000000000!5m2!1suk!2sua" 
                width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .icon-box {
      width: 60px; height: 60px;
      min-width: 60px;
      border-radius: 18px;
      background: rgba(0, 210, 255, 0.1);
      color: #00d2ff;
      display: flex; justify-content: center; align-items: center;
      font-size: 1.8rem;
      margin-right: 1.5rem;
      border: 1px solid rgba(0, 210, 255, 0.2);
    }
    .map-wrapper {
      border-radius: 30px;
      overflow: hidden;
      box-shadow: 0 20px 50px rgba(0,0,0,0.8);
      border: 2px solid #1f222d;
    }
    .social-circle-btn {
      width: 64px; height: 64px;
      border-radius: 50%;
      background: #15171e;
      color: #fff;
      display: flex; justify-content: center; align-items: center;
      font-size: 1.8rem;
      transition: all 0.3s;
      border: 1px solid rgba(255,255,255,0.05);
    }
    .social-circle-btn:hover {
      background: rgba(0, 210, 255, 0.1);
      color: #00d2ff;
      border-color: rgba(0, 210, 255, 0.4);
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0,210,255,0.2);
    }
    .map-btn { border-width: 2px; height: 64px; }
  `]
})
export class HomeComponent {
  ls = inject(LanguageService);

  categoryFallbacks: Record<string, string> = {
    'Шаурма': 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=800&q=80',
    'Бургери': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    'Хот-доги': 'https://images.unsplash.com/photo-1541214113241-21578d2d9b62?auto=format&fit=crop&w=800&q=80',
    'Напої': 'https://images.unsplash.com/photo-1543250606-2d9734aa2611?auto=format&fit=crop&w=800&q=80',
    'Соуси': 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80',
    'Фрітюр': 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    'Десерти': 'https://images.unsplash.com/photo-1551024601-bec78acc704b?auto=format&fit=crop&w=800&q=80'
  };

  onImgError(event: any, category: string) {
    event.target.src = this.categoryFallbacks[category] || 'logo.png';
  }

  translatedMenu = computed(() => [
    {
      name: this.ls.t.categories.shawarma,
      items: [
        { title: this.ls.t.items.sh_chicken, price: '120', image: 'https://kp.mixfood.ua/upload/catalog_products/images/adm_1742548907.jpg' },
        { title: this.ls.t.items.sh_beef, price: '130', image: 'https://kp.mixfood.ua/upload/catalog_products/images/adm_1742548907.jpg' },
        { title: this.ls.t.items.sh_double, price: '160', image: 'https://kp.mixfood.ua/upload/catalog_products/images/adm__z_fr%D1%96_kartopleu_1742548942.jpg' },
        { title: this.ls.t.items.sh_greek, price: '160', image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=800&q=80' }
      ]
    },
    {
      name: this.ls.t.categories.sandwiches,
      items: [
        { title: this.ls.t.items.snd_pork, price: '65', image: 'https://kp.mixfood.ua/upload/catalog_products/images/adm__standart_(byjin%D1%96na)_1742548848.jpg' },
        { title: this.ls.t.items.snd_chicken, price: '65', image: 'https://kp.mixfood.ua/upload/catalog_products/images/adm__standart_(kyrka)_1742548873.jpg' }
      ]
    },
    {
      name: this.ls.t.categories.burgers,
      items: [
        { title: this.ls.t.items.brg_classic, price: '130', image: 'https://kp.mixfood.ua/upload/catalog_products/images/adm__klasik_(ialovichina)_1742548238.jpg' },
        { title: this.ls.t.items.brg_cheese, price: '130', image: 'https://kp.mixfood.ua/upload/catalog_products/images/adm__(ialovichina)_1742548268.jpg' },
        { title: this.ls.t.items.brg_chicken, price: '120', image: 'https://kp.mixfood.ua/upload/catalog_products/images/adm__(kyrka)_1742548297.jpg' },
        { title: this.ls.t.items.brg_d_classic, price: '170', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80' },
        { title: this.ls.t.items.brg_d_cheese, price: '170', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80' },
        { title: this.ls.t.items.brg_d_chicken, price: '160', image: 'https://images.unsplash.com/photo-1510739859534-5ba574bc6979?auto=format&fit=crop&w=800&q=80' },
        { title: this.ls.t.items.brg_mega, price: '290', image: 'https://kp.mixfood.ua/upload/catalog_products/images/adm__byrger_xxl_1742548412.jpg' }
      ]
    },
    {
      name: this.ls.t.categories.hotdogs,
      items: [
        { title: this.ls.t.items.hd_white_m, price: '70', image: 'https://images.unsplash.com/photo-1541214113241-21578d2d9b62?auto=format&fit=crop&w=800&q=80' },
        { title: this.ls.t.items.hd_dark_m, price: '75', image: 'https://images.unsplash.com/photo-1541214113241-21578d2d9b62?auto=format&fit=crop&w=800&q=80' },
        { title: this.ls.t.items.hd_white_d, price: '75', image: 'https://images.unsplash.com/photo-1541214113241-21578d2d9b62?auto=format&fit=crop&w=800&q=80' },
        { title: this.ls.t.items.hd_dark_d, price: '80', image: 'https://images.unsplash.com/photo-1541214113241-21578d2d9b62?auto=format&fit=crop&w=800&q=80' }
      ]
    },
    {
      name: this.ls.t.categories.fry,
      items: [
        { title: this.ls.t.items.fries_100, price: '50', image: 'https://kp.mixfood.ua/upload/catalog_products/images/adm__fr%D1%96_7mm_ekstra_hrystka_100_grm._1742548470.jpg' },
        { title: this.ls.t.items.fries_150, price: '75', image: 'https://kp.mixfood.ua/upload/catalog_products/images/adm__fr%D1%96_7mm_ekstra_hrystka_100_grm._1742548470.jpg' },
        { title: this.ls.t.items.nuggets_7, price: '90', image: 'https://kp.mixfood.ua/upload/catalog_products/images/adm__nagetsi_obsmajen%D1%96_7_sht._1742548685.jpg' },
        { title: this.ls.t.items.nuggets_10, price: '110', image: 'https://kp.mixfood.ua/upload/catalog_products/images/adm__nagetsi_obsmajen%D1%96_7_sht._1742548685.jpg' },
        { title: this.ls.t.items.cheese_sticks, price: '150', image: 'https://kp.mixfood.ua/upload/catalog_products/images/adm__palichki_v_pan%D1%96rovc%D1%96_obsmajen%D1%96_1742548707.jpg' },
        { title: this.ls.t.items.mix_plate, price: '100', image: 'https://kp.mixfood.ua/upload/catalog_products/images/adm__kartoplia_po_-selianski1744374743.jpg' }
      ]
    },
    {
      name: this.ls.t.categories.desserts,
      items: [
        { title: this.ls.t.items.cr_choc, price: '40', image: 'https://kp.mixfood.ua/upload/catalog_products/images/adm__z_shokoladom_1742545741.jpg' },
        { title: this.ls.t.items.cr_caramel, price: '40', image: 'https://kp.mixfood.ua/upload/catalog_products/images/adm__z_solonou_karamellu_1742545770.jpg' },
        { title: this.ls.t.items.donuts, price: '50', image: 'https://kp.mixfood.ua/upload/catalog_products/images/adm_1742545805.jpg' },
        { title: this.ls.t.items.macaroon, price: '75', image: 'https://kp.mixfood.ua/upload/catalog_products/images/adm_1742545877.jpg' },
        { title: this.ls.t.items.tube, price: '50', image: 'https://kp.mixfood.ua/upload/catalog_products/images/adm_1742545908.jpg' },
        { title: this.ls.t.items.eclair, price: '50', image: 'https://kp.mixfood.ua/upload/catalog_products/images/adm_1742546314.jpg' },
        { title: this.ls.t.items.waffles, price: '100', image: 'https://kp.mixfood.ua/upload/catalog_products/images/adm__vafl%D1%96_z_fryktami1744374658.jpg' }
      ]
    },
    {
      name: this.ls.t.categories.drinks,
      items: [
        { title: this.ls.t.items.cola, price: '40', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80' },
        { title: this.ls.t.items.fanta, price: '40', image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=800&q=80' },
        { title: this.ls.t.items.sprite, price: '40', image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=800&q=80' },
        { title: this.ls.t.items.bonakva, price: '25', image: 'https://images.unsplash.com/photo-1560023907-5f339617ea30?auto=format&fit=crop&w=800&q=80' }
      ]
    },
    {
      name: this.ls.t.categories.sauces,
      items: [
        { title: this.ls.t.items.sauce_cheese, price: '15', image: 'сирний.png' },
        { title: this.ls.t.items.sauce_chili, price: '15', image: 'Солодкий чилі.png' },
        { title: this.ls.t.items.sauce_bbq, price: '15', image: 'баробекю.png' }
      ]
    }
  ]);
}
