/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.22.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as models from './models';

/**
 * NodeAddress contains information for the node\'s address.
 */
export interface V1NodeAddress {
    /**
     * The node address.
     */
    address: string;

    /**
     * Node address type, one of Hostname, ExternalIP or InternalIP.
     */
    type: string;

}
