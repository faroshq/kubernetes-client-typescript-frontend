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
 * FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
 */
export interface V1FlexVolumeSource {
    /**
     * driver is the name of the driver to use for this volume.
     */
    driver: string;

    /**
     * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". The default filesystem depends on FlexVolume script.
     */
    fsType?: string;

    /**
     * options is Optional: this field holds extra command options if any.
     */
    options?: { [key: string]: string; };

    /**
     * readOnly is Optional: defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     */
    readOnly?: boolean;

    secretRef?: models.V1LocalObjectReference;

}
