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
 * PodCondition contains details for the current condition of this pod.
 */
export interface V1PodCondition {
    /**
     * Last time we probed the condition.
     */
    lastProbeTime?: string;

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
     * Status is the status of the condition. Can be True, False, Unknown. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
     */
    status: string;

    /**
     * Type is the type of the condition. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
     */
    type: string;

}
