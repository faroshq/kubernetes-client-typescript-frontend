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
 * APIServiceCondition describes the state of an APIService at a particular point
 */
export interface V1APIServiceCondition {
    /**
     * Last time the condition transitioned from one status to another.
     */
    lastTransitionTime?: string;

    /**
     * Human-readable message indicating details about last transition.
     */
    message?: string;

    /**
     * Unique, one-word, CamelCase reason for the condition\'s last transition.
     */
    reason?: string;

    /**
     * Status is the status of the condition. Can be True, False, Unknown.
     */
    status: string;

    /**
     * Type is the type of the condition.
     */
    type: string;

}
