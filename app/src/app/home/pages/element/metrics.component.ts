/**
 * Copyright 2018-2020 Pejman Ghorbanzade. All rights reserved.
 */

import { Component, HostListener, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import type { SuiteLookupResponse } from '@weasel/core/models/commontypes';
import type { FrontendElementCompareParams } from '@weasel/core/models/frontendtypes';
import { PageListComponent } from '@weasel/home/components/page-list.component';
import { FilterInput } from '@weasel/home/models/filter.model';
import { Subscription } from 'rxjs';

import { ElementPageItemType, ElementPageMetric } from './element.model';
import { ElementPageService, ElementPageTabType } from './element.service';

const filterInput: FilterInput<ElementPageMetric> = {
  filters: [
    {
      key: 'none',
      name: 'None',
      func: () => true
    },
    {
      key: 'faster',
      name: 'Faster',
      func: (a) =>
        a.data.src !== 0 && a.data.dst !== 0 && a.data.src < a.data.dst
    },
    {
      key: 'slower',
      name: 'Slower',
      func: (a) =>
        a.data.src !== 0 && a.data.dst !== 0 && a.data.dst < a.data.src
    }
  ],
  sorters: [
    {
      key: 'name',
      name: 'Name',
      func: (a, b) => b.data.name.localeCompare(a.data.name)
    },
    {
      key: 'duration',
      name: 'Duration',
      func: (a, b) => b.data.src - a.data.src
    },
    {
      key: 'change',
      name: 'Change',
      func: (a, b) => b.data.duration() - a.data.duration()
    }
  ],
  searchBy: ['data.name'],
  defaults: {
    filter: 'none',
    search: '',
    sorter: 'name',
    order: 'dsc',
    pagen: 1,
    pagel: 100
  },
  queryKeys: {
    filter: 'mf',
    search: 'mq',
    sorter: 'ms',
    order: 'mo',
    pagen: 'mn',
    pagel: 'ml'
  },
  placeholder: 'Find a metric'
};

@Component({
  selector: 'app-element-tab-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['../../styles/list.component.scss']
})
export class ElementListMetricsComponent
  extends PageListComponent<ElementPageMetric>
  implements OnDestroy {
  suite: SuiteLookupResponse;
  params: FrontendElementCompareParams;
  ItemType = ElementPageItemType;
  TabType = ElementPageTabType;

  private _subSuite: Subscription;
  private _subParams: Subscription;

  /**
   *
   */
  constructor(
    private elementPageService: ElementPageService,
    route: ActivatedRoute,
    router: Router
  ) {
    super(filterInput, Object.values(ElementPageItemType), route, router);
    this._subAllItems = this.elementPageService.allMetricKeys$.subscribe(
      (allItems) => {
        this.initCollections(allItems);
      }
    );
    this._subSuite = this.elementPageService.suite$.subscribe((v) => {
      this.suite = v;
    });
    this._subParams = this.elementPageService.params$.subscribe((v) => {
      this.params = v;
    });
  }

  /**
   *
   */
  ngOnDestroy() {
    this._subSuite.unsubscribe();
    this._subParams.unsubscribe();
    super.ngOnDestroy();
  }

  /**
   *
   */
  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    // pressing keys 'j' and 'k' should navigate through items on the list
    if (['j', 'k'].includes(event.key)) {
      super.keyboardNavigateList(event, '#wsl-element-metrics');
      return;
    }
  }
}
