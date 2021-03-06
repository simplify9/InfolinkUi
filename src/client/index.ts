import axios from "axios";
import {ExchangeFindQuery} from "../types/xchange";
import {
  AdapterFindQuery,
  ICreateSubscription, ISubscription,
  SubscriptionFindQuery
} from "../types/subscriptions";
import {LoginRequest} from "../types/accounts";
import {ApiResponse} from "./types";
import {PartnerFindQuery, UpdatePartner} from "../types/partners";
import {
  CreateDocument,
  DocumentFindQuery,
  UpdateDocument
} from "../types/document";
import {OptionType} from "../types/common";

export const client = axios.create();

export const apiClient = {

  login: async (req: LoginRequest) => {
    let res: ApiResponse = await client.post("accounts/login", req);
    console.log("token", res.data.refreshToken)
    return res
  },

  findExchanges: async (req: ExchangeFindQuery) => {
    let res = await client.get(`xchanges${formulateQueryString(req)}`)
    return {
      total: res.data.totalCount,
      data: res.data.result
    }
  },
  retryExchanges: async (id: string, reset: boolean) => {
    let res: ApiResponse = await client.post(`xchanges/${id}/retry`, {
      reason: null,
      reset: reset
    })
    return res;
  },
  findDocuments: async (req: DocumentFindQuery) => {
    let res = await client.get(`documents${formulateQueryString(req)}`)
    return {
      total: res.data.totalCount,
      data: res.data.result
    }
  },
  findDocument: async (id: string) => {
    let res: ApiResponse = await client.get(`documents/${id}`)
    return res
  },
  createDocument: async (req: CreateDocument) => {
    let res: ApiResponse = await client.post("documents", req)
    return res
  },
  updateDocument: async (id: string, req: UpdateDocument) => {
    let res: ApiResponse = await client.post(`documents/${id}`, req)
    return res
  },
  deleteDocument: async (id: string) => {
    let res: ApiResponse = await client.delete(`documents/${id}`)
    return res
  },
  findPartners: async (req: PartnerFindQuery) => {
    let res = await client.get(`partners${formulateQueryString(req)}`)
    return {
      total: res.data.totalCount,
      data: res.data.result
    }
  },
  findPartner: async (id: string) => {
    let res: ApiResponse = await client.get(`partners/${id}`)
    return res
  },
  createPartner: async (name: string) => {
    let res: ApiResponse = await client.post("partners", { name })
    return res
  },
  updatePartner: async (id: string, req: UpdatePartner) => {
    let res: ApiResponse = await client.post(`partners/${id}`, req)
    return res
  },
  deletePartner: async (id: string) => {
    let res: ApiResponse = await client.delete(`partners/${id}`)
    return res
  },
  generatePartnerKey: async () => {
    let res: ApiResponse = await client.get(`partners/generatekey`)
    return res
  },
  findAdapters: async (req: AdapterFindQuery) => {

    let res = await client.get(`adapters?prefix=${req.prefix}`)
    let arr: OptionType[] = [];
    if (!res.data) return [];
    Object.keys(res.data).forEach(k => {
      arr.push({
        id: k,
        title: k
      })
    })
    return arr;

  },
  findAdapterProperties: async (id: string) => {
    let res = await client.get(`adapters/${id}/properties`)
    let arr: OptionType[] = [];
    if (!res.data) return [];
    Object.keys(res.data).forEach(k => {
      arr.push({
        id: k,
        title: k
      })
    })
    return arr;

  },
  findSubscriptions: async (req: SubscriptionFindQuery) => {

    let res = await client.get(`subscriptions${formulateQueryString(req)}`)
    return {
      total: res.data.totalCount,
      data: res.data.result
    }

  },
  findSubscription: async (id: string) => {
    let res: ApiResponse = await client.get(`subscriptions/${id}`)
    return res
  },
  createSubscription: async (req: ICreateSubscription) => {
    let res: ApiResponse = await client.post("subscriptions", req)
    return res
  },
  updateSubscription: async (id: string, req: ISubscription) => {
    let res: ApiResponse = await client.post(`subscriptions/${id}`, req)
    return res
  },
  deleteSubscription: async (id: string) => {
    let res: ApiResponse = await client.delete(`subscriptions/${id}`)
    return res
  },

}

const formulateQueryString = (req: any) => {
  let query = `?page=${Math.floor(req.offset / req.limit)}&size=${req.limit}`;
  if ('nameContains' in req && req.nameContains) query += `&filter=name:4:${req.nameContains}`;

  if ('status' in req && req.status && req.status != '') query += `&filter=StatusFilter:1:${req.status}`;
  if ('subscription' in req && req.subscription && req.subscription != '') query += `&filter=SubscriptionId:1:${req.subscription}`;
  if ('id' in req && req.id && req.id != '') query += `&filter=Id:1:${req.id}`;
  if ('correlationId' in req && req.correlationId && req.correlationId != '') query += `&filter=CorrelationId:1:${req.correlationId}`;
  // if ('promotedProperties' in req && req.promotedProperties && req.promotedProperties != '') query += `&filter=PromotedPropertiesRaw:1:${req.promotedProperties}`;
  // if ('creationDateFrom' in req && req.creationDateFrom && req.creationDateFrom != '') query += `&filter=StartedOn:6:${req.creationDateFrom}`;
  // if ('creationDateTo' in req && req.creationDateTo && req.creationDateTo != '') query += `&filter=StartedOn:8:${req.creationDateTo}`;


  return query;
}





