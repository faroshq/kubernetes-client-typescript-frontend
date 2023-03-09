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
 * DaemonSetCondition describes the state of a DaemonSet at a certain point.
 */
export interface V1DaemonSetCondition {
    /**
     * Last time the condition transitioned from one status to another.
     */
    lastTransitionTime?: string;

    /**
     * A human readable message indicating details about the transition.
     */
    message?: string;

    /**
     * The reason for the condition\'s last transition.
     */
    reason?: string;

    /**
     * Status of the condition, one of True, False, Unknown.
     */
    status: string;

    /**
     * Type of DaemonSet condition.
     */
    type: string;

}