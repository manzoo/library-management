import { InjectionToken } from '@angular/core';

export let TOASTR_TOKEN = new InjectionToken<Toastr>('Toastr')

export interface Toastr{
  success(message : string, title?: any);

  info(message : string, title?: any);

  warning(message : string, title?: any);

  error(message : string, title?: any);
}
