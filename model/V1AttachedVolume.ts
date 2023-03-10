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
 * AttachedVolume describes a volume attached to a node
 */
export interface V1AttachedVolume {
    /**
     * DevicePath represents the device path where the volume should be available
     */
    devicePath: string;

    /**
     * Name of the attached volume
     */
    name: string;

}
