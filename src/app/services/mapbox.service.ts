import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { MAPBOX_API_KEY } from '../local/mapbox.local.js';

export interface MapboxFeatureResponse {
  bbox: any; // (4) [-179.9, -14.6528, -64.464198, 71.540724]
  center: any; // (2) [-97.922211, 39.381266]
  geometry: any; // {type: "Point", coordinates: Array(2)}
  id: any; // "country.3145"
  matching_place_name: any; // "America"
  matching_text: any; // " America"
  place_name: any; // "United States"
  place_type: any; // ["country"]
  properties: any; // {wikidata: "Q30", short_code: "us"}
  relevance: any; // 1
  text: any; // "United States"
  type: any; // "Feature"
}

@Injectable({
  providedIn: 'root'
})
export class MapboxService {
  // Search result store
  private searchResults_Source: BehaviorSubject<MapboxFeatureResponse[]> = new BehaviorSubject<MapboxFeatureResponse[]>([]);
  public URL = (endpoint: string, search_text: string): string =>
    encodeURI(`https://api.mapbox.com/geocoding/v5/${endpoint}/${search_text}.json?access_token=${MAPBOX_API_KEY}`)

  constructor(private _http: HttpClient) {
  }

  listenSearchResult$(): Observable<any> {
    return this.searchResults_Source.asObservable();
  }

  getSearchReusltsSnapShot() {
    return this.searchResults_Source.value.map(val => val.place_name);
  }

  // Fetch Search Query
  search(query: string, endpoint: string = 'mapbox.places', conditionals: {prop: string, val: string}[] = []): void {
    const url: string = this.URL(endpoint, query);
    this._http.get(url)
      .subscribe((response: {features: MapboxFeatureResponse[]}) => {
        // prepResults
        let results = response.features
          .filter(val => val.place_type === 'address');

        for (const condition of conditionals) {
          results = results.filter(val => {
            return val[condition.prop] === condition.val;
          });
        }

        console.log('response', response);
        this.searchResults_Source.next(response.features);
      });
  }
}
