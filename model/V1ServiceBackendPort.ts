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
 * ServiceBackendPort is the service port being referenced.
 */
export interface V1ServiceBackendPort {
    /**
     * Name is the name of the port on the Service. This is a mutually exclusive setting with \"Number\".
     */
    name?: string;

    /**
     * Number is the numerical port number (e.g. 80) on the Service. This is a mutually exclusive setting with \"Name\".
     */
    number?: number;

}
