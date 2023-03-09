/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.26.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as models from './models';

/**
 * An API server instance reports the version it can decode and the version it encodes objects to when persisting objects in the backend.
 */
export interface V1alpha1ServerStorageVersion {
    /**
     * The ID of the reporting API server.
     */
    apiServerID?: string;

    /**
     * The API server can decode objects encoded in these versions. The encodingVersion must be included in the decodableVersions.
     */
    decodableVersions?: Array<string>;

    /**
     * The API server encodes the object to this version when persisting it in the backend (e.g., etcd).
     */
    encodingVersion?: string;

}
