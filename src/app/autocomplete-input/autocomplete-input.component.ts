import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Observable, Subscription} from 'rxjs';
import { MapboxService} from '../services/mapbox.service';

@Component({
  selector: 'app-autocomplete-input',
  templateUrl: './autocomplete-input.component.html',
  styleUrls: ['./autocomplete-input.component.scss']
})
export class AutocompleteInputComponent {
  @Input() strictOption = false;
  searchResults$: Observable<any> = this._mapbox.listenSearchResult$();
  autoCompleteGroup: FormGroup = this._fb.group({
    searchControl: this._fb.control(''),
  });
  subscriptions: Subscription;

  constructor(
    private _fb: FormBuilder,
    public _mapbox: MapboxService
  ) { }

  public handleSearchInput(event: Event | any): void {
    if (this.strictOption) {
      console.log('Snap', this._mapbox.getSearchReusltsSnapShot());
      console.log(this.autoCompleteGroup.controls['searchControl'].value in this._mapbox.getSearchReusltsSnapShot());
    }
    this._mapbox.search(event.target.value);
  }
}
