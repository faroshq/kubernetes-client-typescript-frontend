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
 * VolumeError captures an error encountered during a volume operation.
 */
export interface V1VolumeError {
    /**
     * String detailing the error encountered during Attach or Detach operation. This string may be logged, so it should not contain sensitive information.
     */
    message?: string;

    /**
     * Time the error was encountered.
     */
    time?: string;

}
