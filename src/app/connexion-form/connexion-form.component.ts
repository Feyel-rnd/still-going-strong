import { Component, VERSION } from '@angular/core';
import * as Realm from 'realm-web';
import { MainPageComponent } from '../main-page/main-page.component';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

async function loginEmailPassword(email, password) {
  // Create an anonymous credential
  const app = new Realm.App('data-icqqg');
  const credentials = Realm.Credentials.emailPassword(email, password);
  try {
    // Authenticate the user
    const user = await app.logIn(credentials);
    // `App.currentUser` updates to match the logged in user
    console.assert(user.id === app.currentUser.id);
    sessionStorage.setItem("userRefreshToken", user.refreshToken);
    
    return true;
  } catch (err) {
    console.error('Failed to log in', err);
    //return err.__zone_symbol__state
    return false
  }
}
//const user = loginEmailPassword("spalette@feyel-artzner.com", "FeyelR&D");
//console.log("Successfully logged in!", user);

@Component({
  selector: 'app-connexion-form',
  templateUrl: './connexion-form.component.html',
  styleUrls: ['./connexion-form.component.css'],
})
export class ConnexionFormComponent {
  connected = true;
  correctForm = true;
  hide = true;
  redirect = false;
   constructor(public router: Router){

   }
  loginUser() {
    if (
      this.signinForm.controls['email'].status == 'INVALID' ||
      this.signinForm.controls['password'].status == 'INVALID'
    ) {
      this.correctForm = false;
    } else {
      this.correctForm = true;
    }
  }
  signinForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  app = new Realm.App('data-icqqg');
  Log(a: string, b: string) {
    //console.log
    this.loginUser();
    if (this.correctForm) {
      //console.log(this.correctForm)

      loginEmailPassword(a, b).then((authorized) => {
        if (authorized) {
          console.log("Successfully logged in!")
          // this.redirect = true;
          // //console.log(user.__zone_symbol__value)
                  // Usually you would use the redirect URL from the auth service.
          // However to keep the example simple, we will always redirect to `/admin`.
          const redirectUrl = '/dashboard';
  
          // Redirect the user
          this.router.navigate([redirectUrl]);
        } else {
          this.connected = false;
        }
      })
      //console.log(user.__zone_symbol__value[0])
      
    }
  }
  async insert_doc() {
    const mongo = this.app.currentUser.mongoClient('Cluster0');
    const collection = mongo.db('Data').collection('test');
    const result = await collection.insertOne({
      name: 'lily of the valley',
      sunlight: 'full',
      color: 'white',
      type: 'perennial',
      _partition: 'Store 47',
    });
    console.log(result);
  }
}
