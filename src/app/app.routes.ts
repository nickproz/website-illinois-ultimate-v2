// Route Configuration
import { Routes } from "@angular/router";
import { OurStoryComponent } from "./our-story/our-story.component";
import { WeddingPartyComponent } from "./wedding-party/wedding-party.component";
import { CeremonyComponent } from "./ceremony/ceremony.component";
import { HomeComponent } from "./home/home.component";
import { AccommodationsComponent } from "./accomodations/accommodations.component";
import { RegistryComponent } from "./registry/registry.component";
import { RsvpComponent } from "./rsvp/rsvp.component";

export const ROUTES: Routes = [
    {path: '',                  component: HomeComponent},
    {path: 'our-story',         component: OurStoryComponent},
    {path: 'wedding-party',     component: WeddingPartyComponent},
    {path: 'ceremony',          component: CeremonyComponent},
    {path: 'home',              component: HomeComponent},
    {path: 'accommodations',    component: AccommodationsComponent},
    {path: 'registry',          component: RegistryComponent},
    {path: 'rsvp',              component: RsvpComponent},
    {path: '**',                component: HomeComponent},
];