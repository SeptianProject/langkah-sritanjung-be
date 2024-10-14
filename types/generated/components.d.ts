import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutsRecomendationSection extends Schema.Component {
  collectionName: 'components_layouts_recomendation_sections';
  info: {
    displayName: 'Recomendation Section';
  };
  attributes: {
    title: Attribute.String;
    card: Attribute.Component<'components.card', true>;
  };
}

export interface LayoutsMainSection extends Schema.Component {
  collectionName: 'components_layouts_main_sections';
  info: {
    displayName: 'Main Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    timelist: Attribute.Component<'components.time-list', true>;
    actions: Attribute.Component<'components.time-list', true>;
  };
}

export interface LayoutsHeroSection extends Schema.Component {
  collectionName: 'components_layouts_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    link: Attribute.Component<'components.link', true>;
  };
}

export interface LayoutsActionSection extends Schema.Component {
  collectionName: 'components_layouts_action_sections';
  info: {
    displayName: 'Action Section';
  };
  attributes: {
    list: Attribute.Component<'components.time-list', true>;
    Header: Attribute.String &
      Attribute.DefaultTo<'Hal Yang Bisa Kamu Lakukan Di Tempat Ini'>;
  };
}

export interface ComponentsTimeList extends Schema.Component {
  collectionName: 'components_components_time_lists';
  info: {
    displayName: 'time-list';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface ComponentsCard extends Schema.Component {
  collectionName: 'components_components_cards';
  info: {
    displayName: 'card';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    image: Attribute.Media<'images'>;
    link: Attribute.Component<'components.link', true>;
    price: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layouts.recomendation-section': LayoutsRecomendationSection;
      'layouts.main-section': LayoutsMainSection;
      'layouts.hero-section': LayoutsHeroSection;
      'layouts.action-section': LayoutsActionSection;
      'components.time-list': ComponentsTimeList;
      'components.link': ComponentsLink;
      'components.card': ComponentsCard;
    }
  }
}
