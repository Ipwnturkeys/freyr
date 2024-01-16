import type { Schema, Attribute } from '@strapi/strapi';

export interface CardCard extends Schema.Component {
  collectionName: 'components_card_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    Title: Attribute.String;
    Content: Attribute.Blocks;
    Image: Attribute.Media;
  };
}

export interface ProductProduct extends Schema.Component {
  collectionName: 'components_product_products';
  info: {
    displayName: 'Product';
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media;
  };
}

export interface QuestionQuestion extends Schema.Component {
  collectionName: 'components_question_questions';
  info: {
    displayName: 'Question';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Content: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'card.card': CardCard;
      'product.product': ProductProduct;
      'question.question': QuestionQuestion;
    }
  }
}
