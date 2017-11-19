import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from "jquery";


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController) {
  }

  changeColor(){
  $('#signup-button3').text('white');
	  var form = new FormData();
		form.append("first_name", "Test");
		form.append("last_name", "Test");
		form.append("email", "Test");

	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": "http://martinpras.eu/meetzemup/user/create",
	  "method": "POST",
	  "headers": {},
	  "processData": false,
	  "contentType": false,
	  "mimeType": "multipart/form-data",
	  "data": form
	}

	$.ajax(settings).done(function (response) {
	  console.log(response);
	});
}
  
}
