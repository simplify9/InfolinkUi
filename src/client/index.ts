import axios, {Axios, AxiosInstance} from "axios";
import { ExchangeFindQuery} from "../types/xchange";
import {SubscriptionFindQuery} from "../types/subscriptions";
import {LoginRequest, LoginResponse} from "../types/accounts";
import {ApiResponse} from "./types";
import {PartnerFindQuery, UpdatePartner} from "../types/partners";
import {CreateDocument, DocumentFindQuery, UpdateDocument} from "../types/document";

export const client = axios.create();

export const apiClient = {

    login: async (req: LoginRequest) => {
        let res:ApiResponse = await client.post("accounts/login", req)
        return res
    },

    findExchanges: async (req: ExchangeFindQuery) => {
        let res = await client.get("xchanges")
        return {
            total: res.data.total,
            data: res.data.result
        }
    },
    findDocuments: async (req: DocumentFindQuery) => {
        let res = await client.get("documents")
        return {
            total: res.data.total,
            data: res.data.result
        }
    },
    findDocument: async (id: string) => {
        let res:ApiResponse = await client.get(`documents/${id}`)
        return res
    },
    createDocument: async (req: CreateDocument) => {
        let res:ApiResponse = await client.post("documents",req)
        return res
    },
    updateDocument: async (id:string,req: UpdateDocument) => {
        let res:ApiResponse = await client.post(`documents/${id}`,req)
        return res
    },
    deleteDocument: async (id:string) => {
        let res:ApiResponse = await client.delete(`documents/${id}`)
        return res
    },
    findPartners: async (req: PartnerFindQuery) => {
        let res = await client.get("partners")
        return {
            total: res.data.total,
            data: res.data.result
        }
    },
    findPartner: async (id: string) => {
        let res:ApiResponse = await client.get(`partners/${id}`)
        return res
    },
    createPartner: async (name: string) => {
        let res:ApiResponse = await client.post("partners",{name})
        return res
    },
    updatePartner: async (id:string,req: UpdatePartner) => {
        let res:ApiResponse = await client.post(`partners/${id}`,req)
        return res
    },
    deletePartner: async (id:string) => {
        let res:ApiResponse = await client.delete(`partners/${id}`)
        return res
    },
    generatePartnerKey: async () => {
        let res:ApiResponse = await client.get(`partners/generatekey`)
        return res
    },
    findSubscriptions: async (req: SubscriptionFindQuery) => {

        let res = await client.get("subscriptions")
        return {
            total: res.data.total,
            data: res.data.result
        }

    }

}

