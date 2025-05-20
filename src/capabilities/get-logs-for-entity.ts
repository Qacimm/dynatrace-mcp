import { _OAuthHttpClient } from "@dynatrace-sdk/http-client";
import { executeDql } from "./execute-dql";



export const getLogsForEntity = async (dtClient: _OAuthHttpClient, entityId: string) => {
   const dql=`fetch logs | filter matchesValue(service,"${entityId}") | fields timestamp, content, loglevel, careem_domain, city_id, cluster_id, domain, error, headers.http_host, host, lat, lng, meta, method, span_id, url, user_id`
  return executeDql(dtClient, dql);
};
