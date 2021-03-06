import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component( {
	selector: 'hyper-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
} )
export class HomeComponent implements OnInit {

	constructor( private layout: LayoutService ) {
	}

	ngOnInit() {
	}

}
