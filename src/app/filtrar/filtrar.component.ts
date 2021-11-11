import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-filtrar',
  templateUrl: './filtrar.component.html',
  styleUrls: ['./filtrar.component.css']
})
export class FiltrarComponent {

showMenu(){this.route.navigate(['/filter'])}

 constructor(private route: Router ) {}
}



