import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsComponent } from './pages/home/details/details.component';
import { BooksitemComponent } from './pages/home/booksitem/booksitem.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { FilterbookPipe } from './pipes/filterbook.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    NavbarComponent,
    DetailsComponent,
    BooksitemComponent,
    DiscountPipe,
    FilterbookPipe,
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
