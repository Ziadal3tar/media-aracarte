import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import { Header } from "../header/header";
import { OurServices } from '../our-services/our-services';
import { Solution } from "../solution/solution";
import { Experts } from '../experts/experts';
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-home',
  imports: [Nav, Header, OurServices, Solution, Experts, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
