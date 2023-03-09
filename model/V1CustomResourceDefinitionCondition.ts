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
 * CustomResourceDefinitionCondition contains details for the current condition of this pod.
 */
export interface V1CustomResourceDefinitionCondition {
    /**
     * lastTransitionTime last time the condition transitioned from one status to another.
     */
    lastTransitionTime?: string;

    /**
     * message is a human-readable message indicating details about last transition.
     */
    message?: string;

    /**
     * reason is a unique, one-word, CamelCase reason for the condition\'s last transition.
     */
    reason?: string;

    /**
     * status is the status of the condition. Can be True, False, Unknown.
     */
    status: string;

    /**
     * type is the type of the condition. Types include Established, NamesAccepted and Terminating.
     */
    type: string;

}
