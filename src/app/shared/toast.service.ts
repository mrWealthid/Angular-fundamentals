import { Injectable } from '@angular/core';
declare let toastr: any;

@Injectable()
export class ToastService {
  handleSuccess(msg: string, title?: string) {
    toastr.success(msg, title);
  }
  handleError(msg: string, title?: string) {
    toastr.error(msg, title);
  }
  handleWarning(msg: string, title?: string) {
    toastr.warning(msg, title);
  }
  handleInfo(msg: string, title?: string) {
    toastr.info(msg, title);
  }
}
