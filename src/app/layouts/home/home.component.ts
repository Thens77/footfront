import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, 
   FormGroup, 
   UntypedFormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Login } from 'src/app/auth/login.model';
import { LoginService } from 'src/app/auth/login.service';
import { TokenStorageService } from 'src/app/config/token-storage.service';
import { Client } from 'src/app/entities/client/client.model';
import { Register } from 'src/app/signup/register.model';
import { SignupService } from 'src/app/signup/signup.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  token = localStorage.getItem('token');
   login:  Login = new Login();
   constructor(
     public dialog: MatDialog,
     public loginSerive : LoginService
     
   ) {
    
   }
 
   ngOnInit(): void {
    
   }
 
   openSignInDialog(): void {
     const dialogRef = this.dialog.open(SignInDialog, {
       panelClass: 'sign-in-dialog',
       data : this.login 
      
     });
 
   
   }
 
   openSignUpDialog(): void {
     const dialogRef = this.dialog.open(SignUpDialog, {
     
       panelClass: 'sign-in-dialog',
     });
 
     dialogRef.afterClosed().subscribe(result => {
       
       
     });
   }
 
   
 }



export interface DialogData {
  username: string;
  password: string;

}
@Component({
  selector: 'sign-in',
  templateUrl: 'sign-in-dialog.html',
})
export class SignInDialog {
  editForm = this.fb.group({
    username: [],
    password: []
    
  });

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(
    public dialogRef: MatDialogRef<SignInDialog>,
    private loginService : LoginService,
    
    private router : Router,
    protected fb: UntypedFormBuilder ,
    private tokenStorage: TokenStorageService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData 
    
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  doLogin() : void {
    console.log("clicked")
    let username = 
    this.loginService.login(new Login(this.editForm.get(['username'])!.value,this.editForm.get(['password'])!.value.toLowerCase())).subscribe(
      (  data: { accessToken: string; }) => {
        this.dialogRef.close();
        this.router.navigate(['dashboard']);
      },
      (      err: any) => {
        this.errorMessage = 'Utilisateur ou mot de passe incorrect';
        this.isLoginFailed = true;
      }
    );
  }
}

@Component({
  selector: 'sign-up',
  templateUrl: 'sign-up-dialog.html',
})
export class SignUpDialog {
  reader : any;
  picBytes : any;
  selectedFile!: File;
  imgURL: any;
  retrievedImage: any;
  base64Data: any;
  client: Client = new Client();
  retrieveResonse: any;
  editForm = this.fb.group({
    username: [],
    email: [],
    nom : [],
    prenom : [],
    cin:[],
    age : [] ,
    
    password: [] ,
    passconf: [] ,
    },
    {
      validator: this.ConfirmedValidator('password', 'passconf'),
    }
    
  );
  passMessage = '';
  userMessage = '';
  emailMessage = '';
  isPasswordVerified = true ;
  isRegisterFailedbyuser = false ;
  isRegisterFailedbyemail = false ;
  constructor(
    public signupServcie : SignupService,
    public dialogRef: MatDialogRef<SignUpDialog>,
    public fb : FormBuilder,
    public router : Router
    
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

 


  doRegister() : void {
    if (!this.editForm?.valid) {
      
      this.isPasswordVerified = false;
      this.passMessage = "Les mot de passes ne sont pas identiques!"
      setTimeout(() => {
        this.isPasswordVerified = true ;
        
       // this.isDeleteSucces = false ;
       
      }, 3000);
      return;
    }
    this.signupServcie.register(new Register(this.editForm.get(['username'])!.value ,
                                             this.editForm.get(['email'])!.value,
                                             this.editForm.get(['nom'])!.value,
                                             this.editForm.get(['prenom'])!.value,
                                             this.editForm.get(['cin'])!.value, 
                                             this.editForm.get(['age'])!.value , 
                                             this.editForm.get(['password'])!.value,
                                             ))
                                             .subscribe(
      (  data: { accessToken: string; }) => {
       
        this.dialogRef.close();
        this.router.navigate(['dashboard/']);
      },
      (      err: any) => {
        console.log(err.error.message)
        
        
        if(err.error.message === "Invalid: cet nom d'utilisateur exist deja!"){
          this.userMessage = err.error.message 
          this.isRegisterFailedbyuser = true
        }
        else
       {
          this.emailMessage = err.error.message 
          this.isRegisterFailedbyemail= true
        }

        setTimeout(() => {
          this.isRegisterFailedbyemail = false ;
          this.isRegisterFailedbyuser = false ; 
           this. passMessage = '';
          this.userMessage = '';
          this.emailMessage = '';

         // this.isDeleteSucces = false ;
         
        }, 3000);
      //  this.errorMessage = 'Utilisateur ou mot de passe incorrect';
        //this.isLoginFailed = true;
      }
    );
  }

  ConfirmedValidator(controlName: string, matchingControlName: string) {
    alert("touched")
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors['confirmedValidator']
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
