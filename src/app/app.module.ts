import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './inicio/header/header.component';
import { AboutComponent } from './inicio/about/about.component';
import { FactComponent } from './inicio/fact/fact.component';
import { ServiceStartComponent } from './inicio/service-start/service-start.component';
import { FeatureComponent } from './inicio/feature/feature.component';
import { PrincipalComponent } from './inicio/principal/principal.component';
import { ContactComponent } from './inicio/contact/contact.component';
import { ClientTestimoniosComponent } from './inicio/client-testimonios/client-testimonios.component';

import { Shipbroking1Component } from './servicios/shipbroking1/shipbroking1.component';
import { MarketintelligenceComponent } from './servicios/marketintelligence/marketintelligence.component';
import { MarineserviceComponent } from './servicios/marineservice/marineservice.component';
import { QueHacemosComponent } from './compañia/que-hacemos/que-hacemos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { CargarScriptsService } from './cargar-script.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Departments3Component } from './inicio/departments3/departments3.component';
import { CareersComponent } from './careers/careers.component';
import { PeopleNetworkComponent } from './people-network/people-network.component';
import { BulkComponent } from './departments/bulk/bulk.component';
import { TanquerosComponent } from './departments/tanqueros/tanqueros.component';
import { LinerComponent } from './departments/liner/liner.component';
import { QuimicosTanquerosPequenosComponent } from './departments/quimicos-tanqueros-pequenos/quimicos-tanqueros-pequenos.component';
import { LpgComponent } from './departments/lpg/lpg.component';
import { LngComponent } from './departments/lng/lng.component';
import { OffshoreComponent } from './departments/offshore/offshore.component';
import { NuevasConstruccionesComponent } from './departments/nuevas-construcciones/nuevas-construcciones.component';
import { PlaysoundService } from './playsound.service';

// firebase
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FirestoreModule } from '@angular/fire/firestore';

import { AngularFireModule } from '@angular/fire/compat'; //para conectar con Firestore
import { FormfireService } from './services/formfire.service';

///Importaciones para lenguajes
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    FactComponent,
    ServiceStartComponent,
    FeatureComponent,
    PrincipalComponent,
    ContactComponent,
    ClientTestimoniosComponent,

    Shipbroking1Component,
    MarketintelligenceComponent,
    MarineserviceComponent,
    QueHacemosComponent,
    NoticiasComponent,

    Departments3Component,
    CareersComponent,
    PeopleNetworkComponent,
    BulkComponent,
    TanquerosComponent,
    LinerComponent,
    QuimicosTanquerosPequenosComponent,
    LpgComponent,
    LngComponent,
    OffshoreComponent,
    NuevasConstruccionesComponent,


  ],
  imports: [
    FirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase), //para conectaracon Firestore

    ///Importaciones para lenguajes
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })

  ],
  providers: [CargarScriptsService,
    PlaysoundService, ScreenTrackingService, UserTrackingService, FormfireService],
  bootstrap: [AppComponent],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
