import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Judge } from '../judge';
import { Injectable } from '@angular/core';
import { Gymnast } from '../gymnast';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const judges: Judge[] = [
      {
        id: 1,
        firstName: 'Kiril',
        middleName: 'Kirilov',
        lastName: 'Yordanov',
        category: ['individual'],
        licenseNumber: 1234
      },
      {
        id: 2,
        firstName: 'Todor',
        middleName: 'Stoyanov',
        lastName: 'Asenov',
        category: ['individual', 'group'],
        licenseNumber: 32144
      },
      {
        id: 3,
        firstName: 'Martin',
        middleName: 'Petrov',
        lastName: 'Emilov',
        category: ['individual'],
        licenseNumber: 5642
      },
      {
        id: 4,
        firstName: 'Martin',
        middleName: 'Sashov',
        lastName: 'Kasabov',
        category: ['individual', 'group'],
        licenseNumber: 6412
      },
      {
        id: 5,
        firstName: 'Aleksandar',
        middleName: 'Veselinov',
        lastName: 'Popov',
        category: ['individual', 'group'],
        licenseNumber: 23341
      }
    ];
    const gymnasts: Gymnast[] = [
      {
        firstName: 'Anelia',
        middleName: 'Zetova',
        lastName: 'Bareva',
        dateOfBirth: new Date(1990, 10, 22),
        age:1,
        ageCategory: 1,
        club: 'CSKA',
        licenseNumber: 121343,
        filedThisYear: true,
        technicalLevel: 'pro',
        competitions: ['individual', 'group']
      },
      {
        firstName: 'Maria',
        middleName: 'Chaneva',
        lastName: 'Karaslavova',
        dateOfBirth: new Date(1997, 2, 3),
        age:1,
        ageCategory: 1,
        club: 'Levski',
        licenseNumber: 213432,
        filedThisYear: true,
        technicalLevel: 'beginner',
        competitions: ['individual']
      },
      {
        firstName: 'Kalina',
        middleName: 'Asenova',
        lastName: 'Emilova',
        dateOfBirth: new Date(2010, 0, 11),
        age:1,
        ageCategory: 3,
        club: 'Slavia',
        licenseNumber: 413243,
        filedThisYear: true,
        technicalLevel: 'noob',
        competitions: ['individual', 'group']
      },
      {
        firstName: 'Eli',
        middleName: 'Borisova',
        lastName: 'Bineva',
        dateOfBirth: new Date(2001, 6, 12),
        age:1,
        ageCategory: 2,
        club: 'CSKA',
        licenseNumber: 67843,
        filedThisYear: true,
        technicalLevel: 'pro',
        competitions: ['individual']
      },
      {
        firstName: 'Daniela',
        middleName: 'Vasileva',
        lastName: 'Draganova',
        dateOfBirth: new Date(2008, 7, 22),
        age:1,
        ageCategory: 1,
        club: 'CSKA',
        licenseNumber: 921343,
        filedThisYear: true,
        technicalLevel: 'begginer',
        competitions: ['individual', 'group']
      },
      {
        firstName: 'Tanya',
        middleName: 'Lazarova',
        lastName: 'Naydenova',
        dateOfBirth: new Date(2007, 7, 22),
        age:1,
        ageCategory: 2,
        club: 'Levski',
        licenseNumber: 212343,
        filedThisYear: true,
        technicalLevel: 'pro',
        competitions: ['individual']
      },
      {
        firstName: 'Hristina',
        middleName: 'Nikolaeva',
        lastName: 'Chepinska',
        dateOfBirth: new Date(2008, 9, 22),
        age:1,
        ageCategory: 3,
        club: 'Slavia',
        licenseNumber: 331343,
        filedThisYear: true,
        technicalLevel: 'noob',
        competitions: ['individual']
      },
      {
        firstName: 'Milena',
        middleName: 'Antonova',
        lastName: 'Kaleina',
        dateOfBirth: new Date(2003, 8, 22),
        age:1,
        ageCategory: 1,
        club: 'Levski',
        licenseNumber: 521323,
        filedThisYear: true,
        technicalLevel: 'pro',
        competitions: ['individual', 'group']
      },
      {
        firstName: 'Petya',
        middleName: 'Simeonova',
        lastName: 'Nisova',
        dateOfBirth: new Date(2005, 10, 22),
        age:1,
        ageCategory: 2,
        club: 'CSKA',
        licenseNumber: 421343,
        filedThisYear: true,
        technicalLevel: 'pro',
        competitions: ['individual', 'group']
      }
    ];
    for(const gymnast of gymnasts){
      gymnast.age=this.ageFromDateOfBirth(gymnast.dateOfBirth)

  }

    return { judges, gymnasts };

  }
  ageFromDateOfBirth(dateOfBirth:any):number{
    return moment().diff(dateOfBirth, 'years');
    }


  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.

  // genId(heroes: Judge[]): number {
  //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  // }
}
