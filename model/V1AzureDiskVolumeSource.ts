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
 * AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
 */
export interface V1AzureDiskVolumeSource {
    /**
     * Host Caching mode: None, Read Only, Read Write.
     */
    cachingMode?: string;

    /**
     * The Name of the data disk in the blob storage
     */
    diskName: string;

    /**
     * The URI the data disk in the blob storage
     */
    diskURI: string;

    /**
     * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
     */
    fsType?: string;

    /**
     * Expected values Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared
     */
    kind?: string;

    /**
     * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     */
    readOnly?: boolean;

}
