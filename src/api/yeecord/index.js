import {delay, fetchAuto} from "../utils";
import {
  betaFeatures,
  ExampleOptions,
  ExampleRPGInfo,
  features,
  Notifications,
  ServerDetails,
  ServerDetailsAdvanced
} from "./example";

export * from "./action";
export * from "./auth";

/**
 * Get configurable features of a server
 * You may include other data
 *
 * example: {
 *     enabled: [],
 *     data: {} //nullable
 * }
 * @returns {enabled: string[], data: any} an object contains an array of enabled feature ids and custom data
 */
export async function getFeatures(serverId) {

  return await fetchAuto(`/guild/${serverId}/features`, {toJson: true})
}

/**
 * Enable a feature for a server
 */
export async function enableFeature(serverId, featureId) {
  await delay(2000);
}

/**
 *
 * @param serverId
 * @param featureId
 * @returns {Promise<{id: string, name: string, description: string, values: any}>} feature info and option values
 */
export async function getFeatureDetail(serverId, featureId) {
  return fetchAuto(`/guild/${serverId}/feature/${featureId}`, {toJson: true})
}

/**
 * Update Feature options value
 */
export async function updateFeatureOptions(serverId, featureId, options) {

  await fetchAuto(`/guild/${serverId}/feature/${featureId}`, {
    method: "PATCH",
    body: JSON.stringify(Object.fromEntries(options))
  })
}

/**
 * Get configuration settings values of a server
 * @return {values: any}
 */
export async function getSettings(serverId) {
  await delay(3000)
  return {
    values: {
      test: "Test"
    },
  }
}

export async function updateSettingsOptions(serverId, changes) {
  await delay(3000);
}

/**
 * Normal server details
 */
export async function getServerDetails(serverId) {
  await delay(3000)
  return ServerDetails
}

/**
 * Advanced Details of server
 */
export async function getServerAdvancedDetails(serverId) {
  await delay(3000)
  return ServerDetailsAdvanced
}

/**
 * get Notifications of server
 */
export async function getNotifications(serverId) {
  await delay(2000)
  return Notifications
}