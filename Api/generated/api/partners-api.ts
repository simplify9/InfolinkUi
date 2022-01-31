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


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Dictionarystringstring } from '../models';
// @ts-ignore
import { InlineResponse2005 } from '../models';
// @ts-ignore
import { ModelBoolean } from '../models';
// @ts-ignore
import { PartnerCreate } from '../models';
// @ts-ignore
import { PartnerUpdate } from '../models';
/**
 * PartnersApi - axios parameter creator
 * @export
 */
export const PartnersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPartnersGeneratekeyGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/partners/generatekey`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} [filter] 
         * @param {string} [sort] 
         * @param {string} [size] 
         * @param {string} [page] 
         * @param {string} [count] 
         * @param {ModelBoolean} [lookup] 
         * @param {string} [searchPhrase] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPartnersGet: async (filter?: string, sort?: string, size?: string, page?: string, count?: string, lookup?: ModelBoolean, searchPhrase?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/partners`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (lookup !== undefined) {
                localVarQueryParameter['lookup'] = lookup;
            }

            if (searchPhrase !== undefined) {
                localVarQueryParameter['searchPhrase'] = searchPhrase;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} [key] 
         * @param {ModelBoolean} [lookup] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPartnersKeyGet: async (key?: number, lookup?: ModelBoolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/partners/{key}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)))
                .replace(`{${"lookup"}}`, encodeURIComponent(String(lookup)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {PartnerUpdate} partnerUpdate Command Body
         * @param {number} [key] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPartnersKeyPost: async (partnerUpdate: PartnerUpdate, key?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'partnerUpdate' is not null or undefined
            assertParamExists('apiPartnersKeyPost', 'partnerUpdate', partnerUpdate)
            const localVarPath = `/api/partners/{key}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(partnerUpdate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {PartnerCreate} partnerCreate Command Body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPartnersPost: async (partnerCreate: PartnerCreate, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'partnerCreate' is not null or undefined
            assertParamExists('apiPartnersPost', 'partnerCreate', partnerCreate)
            const localVarPath = `/api/partners`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(partnerCreate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PartnersApi - functional programming interface
 * @export
 */
export const PartnersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PartnersApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiPartnersGeneratekeyGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiPartnersGeneratekeyGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} [filter] 
         * @param {string} [sort] 
         * @param {string} [size] 
         * @param {string} [page] 
         * @param {string} [count] 
         * @param {ModelBoolean} [lookup] 
         * @param {string} [searchPhrase] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiPartnersGet(filter?: string, sort?: string, size?: string, page?: string, count?: string, lookup?: ModelBoolean, searchPhrase?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2005>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiPartnersGet(filter, sort, size, page, count, lookup, searchPhrase, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} [key] 
         * @param {ModelBoolean} [lookup] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiPartnersKeyGet(key?: number, lookup?: ModelBoolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiPartnersKeyGet(key, lookup, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {PartnerUpdate} partnerUpdate Command Body
         * @param {number} [key] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiPartnersKeyPost(partnerUpdate: PartnerUpdate, key?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiPartnersKeyPost(partnerUpdate, key, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {PartnerCreate} partnerCreate Command Body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiPartnersPost(partnerCreate: PartnerCreate, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiPartnersPost(partnerCreate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PartnersApi - factory interface
 * @export
 */
export const PartnersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PartnersApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPartnersGeneratekeyGet(options?: any): AxiosPromise<string> {
            return localVarFp.apiPartnersGeneratekeyGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [filter] 
         * @param {string} [sort] 
         * @param {string} [size] 
         * @param {string} [page] 
         * @param {string} [count] 
         * @param {ModelBoolean} [lookup] 
         * @param {string} [searchPhrase] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPartnersGet(filter?: string, sort?: string, size?: string, page?: string, count?: string, lookup?: ModelBoolean, searchPhrase?: string, options?: any): AxiosPromise<InlineResponse2005> {
            return localVarFp.apiPartnersGet(filter, sort, size, page, count, lookup, searchPhrase, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} [key] 
         * @param {ModelBoolean} [lookup] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPartnersKeyGet(key?: number, lookup?: ModelBoolean, options?: any): AxiosPromise<object> {
            return localVarFp.apiPartnersKeyGet(key, lookup, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {PartnerUpdate} partnerUpdate Command Body
         * @param {number} [key] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPartnersKeyPost(partnerUpdate: PartnerUpdate, key?: number, options?: any): AxiosPromise<void> {
            return localVarFp.apiPartnersKeyPost(partnerUpdate, key, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {PartnerCreate} partnerCreate Command Body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPartnersPost(partnerCreate: PartnerCreate, options?: any): AxiosPromise<number> {
            return localVarFp.apiPartnersPost(partnerCreate, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PartnersApi - object-oriented interface
 * @export
 * @class PartnersApi
 * @extends {BaseAPI}
 */
export class PartnersApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PartnersApi
     */
    public apiPartnersGeneratekeyGet(options?: AxiosRequestConfig) {
        return PartnersApiFp(this.configuration).apiPartnersGeneratekeyGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} [filter] 
     * @param {string} [sort] 
     * @param {string} [size] 
     * @param {string} [page] 
     * @param {string} [count] 
     * @param {ModelBoolean} [lookup] 
     * @param {string} [searchPhrase] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PartnersApi
     */
    public apiPartnersGet(filter?: string, sort?: string, size?: string, page?: string, count?: string, lookup?: ModelBoolean, searchPhrase?: string, options?: AxiosRequestConfig) {
        return PartnersApiFp(this.configuration).apiPartnersGet(filter, sort, size, page, count, lookup, searchPhrase, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} [key] 
     * @param {ModelBoolean} [lookup] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PartnersApi
     */
    public apiPartnersKeyGet(key?: number, lookup?: ModelBoolean, options?: AxiosRequestConfig) {
        return PartnersApiFp(this.configuration).apiPartnersKeyGet(key, lookup, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {PartnerUpdate} partnerUpdate Command Body
     * @param {number} [key] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PartnersApi
     */
    public apiPartnersKeyPost(partnerUpdate: PartnerUpdate, key?: number, options?: AxiosRequestConfig) {
        return PartnersApiFp(this.configuration).apiPartnersKeyPost(partnerUpdate, key, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {PartnerCreate} partnerCreate Command Body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PartnersApi
     */
    public apiPartnersPost(partnerCreate: PartnerCreate, options?: AxiosRequestConfig) {
        return PartnersApiFp(this.configuration).apiPartnersPost(partnerCreate, options).then((request) => request(this.axios, this.basePath));
    }
}