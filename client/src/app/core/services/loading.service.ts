import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: "root",
})
export class LoadingService {
  private requestsCount = 0;

  constructor(private spinnerService: NgxSpinnerService) {}

  showSpinner() {
    this.requestsCount++;
    this.spinnerService.show(undefined, {
      bdColor: "rgba(255,255,255,0.7)",
      color: "#333333",
      type: "timer",
    });
  }

  hideSpinner() {
    if(this.requestsCount < 0) {
      this.requestsCount = 0;
    }
    this.spinnerService.hide();
  }
}
