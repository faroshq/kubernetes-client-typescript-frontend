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
 * SecretEnvSource selects a Secret to populate the environment variables with.  The contents of the target Secret\'s Data field will represent the key-value pairs as environment variables.
 */
export interface V1SecretEnvSource {
    /**
     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     */
    name?: string;

    /**
     * Specify whether the Secret must be defined
     */
    optional?: boolean;

}
