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
 * Overhead structure represents the resource overhead associated with running a pod.
 */
export interface V1Overhead {
    /**
     * PodFixed represents the fixed resource overhead associated with running a pod.
     */
    podFixed?: { [key: string]: string; };

}
