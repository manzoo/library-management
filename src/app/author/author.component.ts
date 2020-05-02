import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAuthor } from '../models';
import { AuthorService } from '../services/author.service';
import { ToastrService } from '../services/toastr.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authorForm: FormGroup;
  formData: any;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  constructor(private router: Router, private authorService: AuthorService,
    private notificationService: ToastrService) { }

  ngOnInit(): void {

    this.firstName = new FormControl("", Validators.required);
    this.lastName = new FormControl("", Validators.required);
    this.email = new FormControl("", [Validators.required, Validators.email]);

    this.authorForm = new FormGroup(
      {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email
      })
  }

  saveAuthor(formValues) {
    this.authorForm.markAllAsTouched();
    if (this.authorForm.valid) {
      var author: IAuthor = {
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email
      }
      this.authorService.add(author);
      this.notificationService.success("Author " + author.firstName + " Saved.")
      this.router.navigate(['/authors']);
    }
  }

  cancel() {
    this.router.navigate(['/authors']);
  }

  isFirstNameVald(){
    return this.firstName.valid || this.firstName.untouched;
  }

  isLastNameVald(){
    return this.lastName.valid || this.lastName.untouched;
  }
  isEmailVald(){
    return this.email.valid || this.email.untouched;
  }

}
