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
 * Represents storage that is managed by an external CSI volume driver (Beta feature)
 */
export interface V1CSIPersistentVolumeSource {
    controllerExpandSecretRef?: models.V1SecretReference;

    controllerPublishSecretRef?: models.V1SecretReference;

    /**
     * driver is the name of the driver to use for this volume. Required.
     */
    driver: string;

    /**
     * fsType to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\".
     */
    fsType?: string;

    nodeExpandSecretRef?: models.V1SecretReference;

    nodePublishSecretRef?: models.V1SecretReference;

    nodeStageSecretRef?: models.V1SecretReference;

    /**
     * readOnly value to pass to ControllerPublishVolumeRequest. Defaults to false (read/write).
     */
    readOnly?: boolean;

    /**
     * volumeAttributes of the volume to publish.
     */
    volumeAttributes?: { [key: string]: string; };

    /**
     * volumeHandle is the unique volume name returned by the CSI volume plugin’s CreateVolume to refer to the volume on all subsequent calls. Required.
     */
    volumeHandle: string;

}
