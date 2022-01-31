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


import { ModelBoolean } from './model-boolean';

/**
 * 
 * @export
 * @interface InlineResponse2002Result
 */
export interface InlineResponse2002Result {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002Result
     */
    'Id'?: string;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2002Result
     */
    'SubscriptionId'?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002Result
     */
    'SubscriptionName'?: string;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2002Result
     */
    'DocumentId'?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002Result
     */
    'DocumentName'?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002Result
     */
    'HandlerId'?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002Result
     */
    'MapperId'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof InlineResponse2002Result
     */
    'References'?: Array<string>;
    /**
     * 
     * @type {ModelBoolean}
     * @memberof InlineResponse2002Result
     */
    'Status'?: ModelBoolean;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2002Result
     */
    'StatusFilter'?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002Result
     */
    'StatusString'?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002Result
     */
    'Exception'?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002Result
     */
    'DeliveredOn'?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002Result
     */
    'FinishedOn'?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002Result
     */
    'AggregatedOn'?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002Result
     */
    'StartedOn'?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002Result
     */
    'InputFileName'?: string;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2002Result
     */
    'InputFileSize'?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002Result
     */
    'InputFileHash'?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002Result
     */
    'OutputFileName'?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002Result
     */
    'ResponseFileName'?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002Result
     */
    'InputUrl'?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002Result
     */
    'OutputUrl'?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002Result
     */
    'ResponseUrl'?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002Result
     */
    'Duration'?: string;
    /**
     * 
     * @type {object}
     * @memberof InlineResponse2002Result
     */
    'PromotedProperties'?: object;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002Result
     */
    'PromotedPropertiesRaw'?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002Result
     */
    'RetryFor'?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002Result
     */
    'AggregationXchangeId'?: string;
    /**
     * 
     * @type {ModelBoolean}
     * @memberof InlineResponse2002Result
     */
    'OutputBad'?: ModelBoolean;
    /**
     * 
     * @type {ModelBoolean}
     * @memberof InlineResponse2002Result
     */
    'ResponseBad'?: ModelBoolean;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002Result
     */
    'CorrelationId'?: string;
}
