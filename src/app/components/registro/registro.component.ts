import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service'
import { FormControl, Validators, FormGroup, FormsModule, FormBuilder } from '@angular/forms';
import {PHONE,EMAIL_REGEX,ALPHANUMERIC} from '../../shared/data';




@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})

export class RegistroComponent implements OnInit {

  public  form: any = new FormGroup({ //acuerdate de tipar en any
    name: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.required,Validators.pattern(EMAIL_REGEX)]),
    cellphone: new FormControl('',[Validators.required,Validators.pattern(PHONE)]),
    password: new FormControl('',[Validators.required,Validators.pattern(ALPHANUMERIC)]),
    type: new FormControl('',[Validators.required]),
   });

  emailCtrl = new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(4)]);



  constructor(
    private formBuilder: FormBuilder, //es una funcionalidad para construir grupos de array y api de forma mas comoda
    private usersServices: UsersService
  ){
    //a medida que se vaya escribiendo el valor dentro del input se muestra en la consola lo que se
    //escribe de manera reactiva, es decir al momento
    /*this.emailCtrl.valueChanges
    .pipe(
      debounceTime(500) //para permitir que el usuario termine de escribir antes de que se envien los datos se usa un debounce times
    )
    .subscribe(value => {
      console.log(value);
    });*/

    this.buildForm(); //en este caso como no depende de una API se coloca aqui, en dado caso que fuece una API si se hace en el ngOnInit

   }

  ngOnInit(): void {
  }

  createUser(){
    this.usersServices.create(
      this.form)
    .subscribe(rta => {
      console.log(rta);
    });
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastname:  ['', [Validators.required]],
      email:  ['', [Validators.required,Validators.pattern(EMAIL_REGEX)]],
      cellphone: ['',[Validators.required,Validators.pattern(PHONE)]],
      password:['',[Validators.required,Validators.pattern(ALPHANUMERIC),Validators.minLength(0)]],
      type: ['',[Validators.required]]
    });

    //para asegurar que todo el formulario es valido se utilizan las siguientes variables que devuelven el valor de un boolean
    //this.form.valid
    //this.form.invalid

    //es recomendable hacer la validacion desde el metodo de save

   /*this.form.valueChanges //ver reactivamente los cambios en el formulario
    .pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      console.log(value)
    });*/
  }


  //este metodo envia las entradas al formulario

  save(event: Event) {
    event.preventDefault();// se recibe el envento y se cancela
    if(this.form.valid){
      const value = this.form.value; //con esto se obtiene el valor de todo el objeto
      console.log(value);// se imprime ese valor
    }else{
      //habilitando el envio de los datos del formulario aun si no se llenaron, entonces se puede enviar un error
      this.form.markAllAsTouched();
    }
  }

//FUNCIONES PARA DECLARAR LOS CAMPOS A VALIDAR

  get nameField(){
    return this.form.get('name');
  }

  get lastNameField(){
    return this.form.get('lastname');
  }

  get emailField(){
    return this.form.get('email');
  }

  get cellphoneFiel(){
    return this.form.get('cellphone');
  }

  get passwordField(){
    return this.form.get('password');
  }

  get clienteField(){
    return this.form.get('type')
  }


  //para obtener el valor de input

  /*getEmail(event: Event){
    event.preventDefault();
    console.log(this.emailCtrl.value);
  }*/

}
