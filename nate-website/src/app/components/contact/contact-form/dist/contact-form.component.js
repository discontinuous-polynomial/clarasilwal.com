"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactFormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.subjects = [
            { value: 'research', viewValue: 'Research Collaboration' },
            { value: 'discussion', viewValue: 'Discussion' },
            { value: 'errata', viewValue: 'Errata' },
            { value: 'other', viewValue: 'Other' },
        ];
        this.name = new forms_1.FormControl("", [forms_1.Validators.required]);
        this.email = new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.email]);
        this.message = new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.maxLength(600)]);
        this.subject = new forms_1.FormControl("");
        this.selectedSubject = new forms_1.FormControl("");
        this.honeypot = new forms_1.FormControl(""); // we will use this to prevent spam
        this.submitted = false; // show and hide the success message
        this.isLoading = false; // disable the submit button if we're loading
        this.form = this.formBuilder.group({
            name: this.name,
            email: this.email,
            message: this.message,
            subject: this.subject,
            selectedSubject: this.selectedSubject,
            honeypot: this.honeypot
        });
    }
    ContactFormComponent.prototype.buildForm = function () {
        this.form = this.formBuilder.group({
            name: this.formBuilder.control(null),
            email: this.formBuilder.control(null),
            message: this.formBuilder.control(null),
            subject: this.formBuilder.control(null),
            selectedSubject: this.formBuilder.control(null)
        });
    };
    ContactFormComponent.prototype.ngOnInit = function () {
    };
    ContactFormComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.status == "VALID" && this.honeypot.value == "") {
            this.form.disable(); // disable the form if it's valid to disable multiple submissions
            var formData = new FormData();
            formData.append("name", this.form.get("name").value);
            formData.append("email", this.form.get("email").value);
            formData.append("message", this.form.get("message").value);
            formData.append("subject", this.form.get("subject").value);
            formData.append("selectedSubject", this.form.get("selectedSubject").value);
            this.isLoading = true; // sending the post request async so it's in progress
            this.submitted = false; // hide the response message on multiple submits
            this.http.post("https://script.google.com/macros/s/AKfycbxS-GLfzYefTw8JF1NukMi8wekuD1jINgZQPIHtCJPlLFvL0EVVvYKoaJQwRbtSND6pug/exec", formData).subscribe(function (response) {
                // choose the response message
                if (response["result"] == "success") {
                    _this.responseMessage = "Thanks for the message! I will get back to you soon!";
                }
                else {
                    _this.responseMessage = "Thanks for the message! I will get back to you soon!";
                    // this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
                }
                _this.form.enable(); // re enable the form after a success
                _this.submitted = true; // show the response message
                _this.isLoading = false; // re enable the submit button
                console.log(response);
            }, function (error) {
                _this.responseMessage = "Oops! An error occurred... Reload the page and try again.";
                _this.form.enable(); // re enable the form after a success
                _this.submitted = true; // show the response message
                _this.isLoading = false; // re enable the submit button
                console.log(error);
            });
        }
    };
    ContactFormComponent = __decorate([
        core_1.Component({
            selector: 'app-contact-form',
            templateUrl: './contact-form.component.html',
            styleUrls: ['./contact-form.component.scss']
        })
    ], ContactFormComponent);
    return ContactFormComponent;
}());
exports.ContactFormComponent = ContactFormComponent;
