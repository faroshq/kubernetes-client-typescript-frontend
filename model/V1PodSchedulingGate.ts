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
 * PodSchedulingGate is associated to a Pod to guard its scheduling.
 */
export interface V1PodSchedulingGate {
    /**
     * Name of the scheduling gate. Each scheduling gate must have a unique name field.
     */
    name: string;

}
