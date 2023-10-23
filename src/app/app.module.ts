import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { EvenementComponent } from './evenement/evenement.component';
import { BlogComponent } from './blog/blog.component';
import { RessourceComponent } from './ressource/ressource.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { EchangeComponent } from './echange/echange.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { CarouselModule } from 'primeng/carousel';
import { ProfileComponent } from './profile/profile.component';
import { ImageModule } from 'primeng/image';
import { AutoCompleteModule } from "primeng/autocomplete";
import { ChipsModule } from "primeng/chips";
import { ChipModule } from "primeng/chip";
import { InputMaskModule } from "primeng/inputmask";
import { MultiSelectModule } from "primeng/multiselect";
import { InputSwitchModule } from 'primeng/inputswitch';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SliderModule } from 'primeng/slider';
import { ProgrammeComponent } from './programme/programme.component';
import { PayementComponent } from './payement/payement.component';
import { DetailsPayementComponent } from './details-payement/details-payement.component';
import { DividerModule } from 'primeng/divider';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { SplitterModule } from 'primeng/splitter';
import { AccordionModule } from 'primeng/accordion';
import { FieldsetModule } from 'primeng/fieldset';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TabViewModule } from 'primeng/tabview';
import { ParticipantComponent } from './participant/participant.component';

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent, UtilisateurComponent,  EvenementComponent, BlogComponent, RessourceComponent, ReclamationComponent, ProfileComponent,EchangeComponent, ProgrammeComponent, PayementComponent, DetailsPayementComponent, ParticipantComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        TableModule,
        FileUploadModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        RatingModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule,
        CommonModule,
        CalendarModule,
        CarouselModule,
        ImageModule,
        AutoCompleteModule,
        ChipsModule,
        ChipModule,
        InputSwitchModule,
        ToggleButtonModule,
        SliderModule,
        ColorPickerModule,
        InputMaskModule,
        MultiSelectModule,
        ToolbarModule,
		ButtonModule,
		RippleModule,
		SplitButtonModule,
		AccordionModule,
		TabViewModule,
		FieldsetModule,
		MenuModule,
		InputTextModule,
		DividerModule,
		SplitterModule,
		PanelModule


    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
