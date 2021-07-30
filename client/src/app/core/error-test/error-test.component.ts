import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-error-test",
  templateUrl: "./error-test.component.html",
  styleUrls: ["./error-test.component.scss"],
})
export class ErrorTestComponent implements OnInit {
  baseUrl = environment.apiUrl;
  validationErrors: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  get404Error() {
    this.http.get(this.baseUrl + "products/55").subscribe(
      (response) => {
        console.log(response);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  get400Error() {
    this.http.get(this.baseUrl + "buggy/badrequest").subscribe(
      (response) => {
        console.log(response);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  get500Error() {
    this.http.get(this.baseUrl + "buggy/servererror").subscribe(
      (response) => {
        console.log(response);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  get400ValidationError() {
    this.http.get(this.baseUrl + "products/fiftyfive").subscribe(
      (response) => {
        console.log(response);
      },
      (err) => {
        console.log(err);
        this.validationErrors = err.errors;
      }
    );
  }
}
