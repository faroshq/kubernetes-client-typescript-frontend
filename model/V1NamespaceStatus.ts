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
 * NamespaceStatus is information about the current status of a Namespace.
 */
export interface V1NamespaceStatus {
    /**
     * Represents the latest available observations of a namespace\'s current state.
     */
    conditions?: Array<models.V1NamespaceCondition>;

    /**
     * Phase is the current lifecycle phase of the namespace. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/  
     */
    phase?: string;

}
