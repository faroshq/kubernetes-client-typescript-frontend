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
 * HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod\'s hosts file.
 */
export interface V1HostAlias {
    /**
     * Hostnames for the above IP address.
     */
    hostnames?: Array<string>;

    /**
     * IP address of the host file entry.
     */
    ip?: string;

}
