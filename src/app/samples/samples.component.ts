import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.scss']
})
export class SamplesComponent implements OnInit {
  public samples = [
    {
      title: 'Love in wedlock',
      manifestUri: 'https://api.nb.no/catalog/v1/iiif/9131beeda6ec58e02180ebc90e68fc1f/manifest',
      thumbnailUri: 'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digibok_2015090106098_C1/full/0,600/0/native.jpg'
    },
    {
      title: 'Ibsen\'s poems',
      manifestUri: 'https://api.nb.no/catalog/v1/iiif/7716380e60cafeae66c0f8948d15a7b3/manifest',
      thumbnailUri: 'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digibok_2010051812002_C1/full/0,600/0/native.jpg'
    },
    {
      title: 'Tales of two countries',
      manifestUri: 'https://api.nb.no/catalog/v1/iiif/75011cf1a6307c5644f02058404bfe62/manifest',
      thumbnailUri: 'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digibok_2009102012002_C1/full/0,600/0/native.jpg'
    },
    {
      title: 'Selected stories and poems',
      manifestUri: 'https://api.nb.no/catalog/v1/iiif/e3e35c5ca464dd8c31471651316c2d04/manifest',
      thumbnailUri: 'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digibok_2015021108146_C1/full/0,600/0/native.jpg'
    },
    {
      Title: '3f047. Nentse- (entse?) kvinner, barn og menn samlet ved et telt',
      manifestUri: 'https://api.nb.no/catalog/v1/iiif/a75e98acde151a27ddfe16c8acea5167/manifest',
      thumbnailUri: 'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digifoto_20150803_00015_BLDSA_FN_g03f022/full/0,600/0/native.jpg'
    },
    {
      title: '17de mai 1918',
      manifestUri: 'https://api.nb.no/catalog/v1/iiif/17779451f040dc94349ca14b9ead2d12/manifest',
      thumbnailUri: 'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digifoto_20160310_00030_NB_NS_NM_09634/full/0,600/0/native.jpg'
    },
    {
      title: 'Den 17de mai',
      manifestUri: 'https://api.nb.no/catalog/v1/iiif/ae53eed10e0775c9c097a64879db2e72/manifest',
      thumbnailUri: 'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digavis_den17demai_null_null_18960815_3_95_1-1_001_null/full/0,600/0/native.jpg'
    },
    {
      title: 'Hardanger Folkeblad',
      manifestUri: 'https://api.nb.no/catalog/v1/iiif/93cb7172c539d256148797ff809ba08a/manifest',
      thumbnailUri: 'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digavis_hardangerfolkeblad_null_null_20170908_68_97_1-1_01_hovedavis/full/0,200/0/native.jpg'
    },
    {
      title: 'Ms.fol. 406 \"De Danske Ostindiske Etablissementers Historie ved Henning Engelhart.\"',
      manifestUri: 'https://api.nb.no/catalog/v1/iiif/2e0ab7b747d4666f3578cbde20a56ee9/manifest',
      thumbnailUri: 'https://www.nb.no/services/image/resolver/URN:NBN:no-nb_digimanus_270695_0001/full/0,200/0/native.jpg'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public open(sample: any) {
    this.router.navigate(['viewer', { manifestUri: sample.manifestUri }]);
  }

}
