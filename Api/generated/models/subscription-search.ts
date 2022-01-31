/* tslint:disable */
/* eslint-disable */
/**
 * 
 * This API includes ways to manipulate documents,xchanges,subscriptions,partners,notifiers,notifications,login and adapters. 
 *
 * The version of the OpenAPI document: V3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { InlineResponse2003Schedules } from './inline-response2003-schedules';
import { InlineResponse200PromotedProperties } from './inline-response200-promoted-properties';
import { ModelBoolean } from './model-boolean';

/**
 * 
 * @export
 * @interface SubscriptionSearch
 */
export interface SubscriptionSearch {
    /**
     * 
     * @type {number}
     * @memberof SubscriptionSearch
     */
    'Id'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionSearch
     */
    'DocumentName'?: string;
    /**
     * 
     * @type {ModelBoolean}
     * @memberof SubscriptionSearch
     */
    'IsRunning'?: ModelBoolean | null;
    /**
     * 
     * @type {ModelBoolean}
     * @memberof SubscriptionSearch
     */
    'Inactive'?: ModelBoolean | null;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionSearch
     */
    'HandlerId'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionSearch
     */
    'MapperId'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionSearch
     */
    'ReceiverId'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionSearch
     */
    'ValidatorId'?: string;
    /**
     * 
     * @type {ModelBoolean}
     * @memberof SubscriptionSearch
     */
    'Temporary'?: ModelBoolean | null;
    /**
     * 
     * @type {Array<InlineResponse200PromotedProperties>}
     * @memberof SubscriptionSearch
     */
    'HandlerProperties'?: Array<InlineResponse200PromotedProperties>;
    /**
     * 
     * @type {Array<InlineResponse200PromotedProperties>}
     * @memberof SubscriptionSearch
     */
    'ValidatorProperties'?: Array<InlineResponse200PromotedProperties>;
    /**
     * 
     * @type {Array<InlineResponse200PromotedProperties>}
     * @memberof SubscriptionSearch
     */
    'MapperProperties'?: Array<InlineResponse200PromotedProperties>;
    /**
     * 
     * @type {Array<InlineResponse200PromotedProperties>}
     * @memberof SubscriptionSearch
     */
    'ReceiverProperties'?: Array<InlineResponse200PromotedProperties>;
    /**
     * 
     * @type {Array<InlineResponse200PromotedProperties>}
     * @memberof SubscriptionSearch
     */
    'DocumentFilter'?: Array<InlineResponse200PromotedProperties>;
    /**
     * 
     * @type {Array<InlineResponse2003Schedules>}
     * @memberof SubscriptionSearch
     */
    'Schedules'?: Array<InlineResponse2003Schedules>;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionSearch
     */
    'ResponseSubscriptionId'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionSearch
     */
    'ResponseMessageTypeName'?: string;
    /**
     * 
     * @type {object}
     * @memberof SubscriptionSearch
     */
    'ReceiveOn'?: object | null;
    /**
     * 
     * @type {object}
     * @memberof SubscriptionSearch
     */
    'AggregateOn'?: object | null;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionSearch
     */
    'ConsecutiveFailures'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionSearch
     */
    'LastException'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionSearch
     */
    'AggregationTarget'?: SubscriptionSearchAggregationTargetEnum;
    /**
     * 
     * @type {object}
     * @memberof SubscriptionSearch
     */
    'PausedOn'?: object | null;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionSearch
     */
    'Name'?: string;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionSearch
     */
    'DocumentId'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionSearch
     */
    'Type'?: SubscriptionSearchTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionSearch
     */
    'PartnerId'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionSearch
     */
    'AggregationForId'?: number | null;
}

/**
    * @export
    * @enum {string}
    */
export enum SubscriptionSearchAggregationTargetEnum {
    Input = 'Input',
    Output = 'Output',
    Response = 'Response'
}
/**
    * @export
    * @enum {string}
    */
export enum SubscriptionSearchTypeEnum {
    Unknown = 'Unknown',
    Internal = 'Internal',
    ApiCall = 'ApiCall',
    Receiving = 'Receiving',
    Aggregation = 'Aggregation'
}

