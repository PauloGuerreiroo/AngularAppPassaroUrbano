import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { Oferta } from './shared/oferta.model'

@Injectable()

export class OfertasService {

    constructor (private http: Http){}
    
    
    public getOfertas(): Promise<Oferta[]> {
        return this.ofertas
        //efetuar uma requisição http
        this.http.get()
        //retornar promise oferta[]
    }
    
}