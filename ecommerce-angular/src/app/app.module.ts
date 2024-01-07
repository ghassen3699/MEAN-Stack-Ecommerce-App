import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ShopComponent } from './shop/shop.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ErrorsComponent } from './errors/errors.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeShowComponent } from './home-show/home-show.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: HomeShowComponent },
  { path: 'authentification/signIn', component: SignInComponent },
  { path: 'authentification/signUp', component: SignUpComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'shop/:id', component: ShopDetailsComponent},
  { path: 'cart', component: CartComponent },
  { path: 'cart/checkout', component: CheckoutComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'checkout', component: CheckoutComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    ContactsComponent,
    ShopComponent,
    AboutUsComponent,
    CartComponent,
    CheckoutComponent,
    ErrorsComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }