import {Pipe, PipeTransform} from '@angular/core';

import {Images} from '../../../../../../both/collections/images.collection';

import {Country} from '../../../../../../both/models/country.model';


@Pipe({

    name: 'displayMainImage'

})

export class DisplayMainImagePipe implements PipeTransform {

    transform(country: Country) {

        if (!country) {

            return;

        }


        let imageUrl: string;

        let imageId: string = (country.images || [])[0];


        const found = Images.findOne(imageId);


        if (found) {

            imageUrl = found.url;

        }


        return imageUrl;

    }

}