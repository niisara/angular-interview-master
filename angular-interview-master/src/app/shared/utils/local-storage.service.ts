import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  getItem(key: string, callback: (data: any) => void): void {
    localStorage.getItem(key);
  }

  setItem(key: string, value: string, callback?: any): void {
    localStorage.setItem(key, value);
  }

  removeItem(key: string, callback?: any): void {
    localStorage.removeItem(key);
  }
}
