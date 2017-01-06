import { Component } from '@angular/core';

import { Router } from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../Artist';

@Component({
    moduleId:module.id,
    selector: 'search',
    templateUrl: 'search.component.html',
    providers:[SpotifyService],
})


export class SearchComponent { 
    searchStr:string;
    searchRes: Artist[];
    
    constructor(private _spotifyService:SpotifyService){
        
    }
    
    searchMusic(){
        this._spotifyService.searchMusic(this.searchStr)
            .subscribe(res => 
                this.searchRes = res.artists.items,
                error =>alert(error),
            () =>console.log("Finished"))
            
    }
    
}
