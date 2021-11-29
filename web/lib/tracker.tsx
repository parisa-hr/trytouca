// Copyright 2021 Touca, Inc. Subject to Apache-2.0 License.

import mixpanel from 'mixpanel-browser';

type GTagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
};

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const gtag_pageview = (url: string) => {
  window.gtag('config', GTM_ID, {
    page_path: url
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const gtag_event = ({ action, category, label, value }: GTagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};

class Tracker {
  constructor() {
    if (MIXPANEL_TOKEN) {
      mixpanel.init(MIXPANEL_TOKEN);
    }
  }
  enabled() {
    return !!MIXPANEL_TOKEN && !!GTM_ID;
  }
  track(event: { action: string }, data?: Record<string, unknown>): void {
    if (MIXPANEL_TOKEN) {
      mixpanel.track(event.action, data);
    }
    if (GTM_ID) {
      gtag_event(event);
    }
  }
  view(url: string): void {
    if (GTM_ID) {
      gtag_pageview(url);
    }
  }
}

export const tracker = new Tracker();
