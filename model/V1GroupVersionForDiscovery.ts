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
 * GroupVersion contains the \"group/version\" and \"version\" string of a version. It is made a struct to keep extensibility.
 */
export interface V1GroupVersionForDiscovery {
    /**
     * groupVersion specifies the API group and version in the form \"group/version\"
     */
    groupVersion: string;

    /**
     * version specifies the version in the form of \"version\". This is to save the clients the trouble of splitting the GroupVersion.
     */
    version: string;

}
