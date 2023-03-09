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
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export interface V1DeploymentStrategy {
    rollingUpdate?: models.V1RollingUpdateDeployment;

    /**
     * Type of deployment. Can be \"Recreate\" or \"RollingUpdate\". Default is RollingUpdate.  
     */
    type?: string;

}
