import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ICharacter } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getCharacters(): Observable<ICharacter[]> {
    return this.http
      .get<ICharacter[]>(`${this.apiUrl}/characters`)
      .pipe(
        catchError(this.handleError<ICharacter[]>('getCharacters', []))
      )
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** esta funcion usaria un messageService, el cual se injectaria a este dataservice y lo ke haria es
      enviar mensajes, de error o success, a un MessageComponent ke se encargaria de mostrarlos en pantalla
  */
  // private log(message: string) {
  //   this.messageService.add(`HeroService: ${message}`);
  // }
}
