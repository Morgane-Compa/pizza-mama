import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  // Get an item from local storage
  getItem(key: string): any {
    const value = localStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
    return null;
  }

  // Set an item in local storage
  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Remove an item from local storage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
