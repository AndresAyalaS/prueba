import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ListarService implements Resolve<any> {

  onItemsChanged: BehaviorSubject<any>;
  onMunicipiosChanged: BehaviorSubject<any>;


  constructor(
    private _httpClient: HttpClient
  ) {
    this.onItemsChanged = new BehaviorSubject({});
    this.onMunicipiosChanged = new BehaviorSubject({});
  }

  /**
   * Resolver
   *
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    return new Promise((resolve, reject) => {
      Promise.all([
        this.getDepartamentos()
      ]).then(
        () => {
          resolve();
        },
        reject
      );
    });
  }


  public getDepartamentos(): Promise<any> {
    const url = `${environment.servicio}/api/common/ListDepartamento`;
    return new Promise((resolve, reject) => {
      this._httpClient.get(url)
        .subscribe((response: any) => {
          this.onItemsChanged.next(response);
          resolve();
        }, reject);
    });
  }

  public getMunicipios(id: number): Promise<any> {
    const url = `${environment.servicio}/api/common/ListMunicipiosByIdDepartamento?idDepartamento=${id}`;
    return new Promise((resolve, reject) => {
      this._httpClient.get(url)
        .subscribe((response: any) => {
          this.onMunicipiosChanged.next(response);
          resolve();
        }, reject);
    });
  }


}
