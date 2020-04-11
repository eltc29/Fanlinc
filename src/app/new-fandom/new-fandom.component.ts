import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FandomService } from '../fandom.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
	selector: 'app-new-fandom',
	templateUrl: './new-fandom.component.html',
	styleUrls: ['./new-fandom.component.css']
  })
export class NewFandomComponent implements OnInit {

	constructor(private router: Router, private fandomService: FandomService, private session: LocalStorageService) {}

	ngOnInit() {}

	createFandom(name, desc) {
		if (name != '' && desc != '') {
			this.fandomService.addFandom(name, desc, this.session.retrieve('logged-in')).subscribe(
				res => {
					if (res.status == 200) {
						console.log(res.body);
						this.router.navigate(['/fandom-page'], {queryParams: {fandom: name}});
					}
				},
				err => {
					console.log(err);
					this.router.navigate(['/page-not-found']);
				}
			);
		}
		else {
			alert('some fields are still missing');
		}
	}
}
