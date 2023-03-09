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
 * VolumeAttachmentSpec is the specification of a VolumeAttachment request.
 */
export interface V1alpha1VolumeAttachmentSpec {
    /**
     * Attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName().
     */
    attacher: string;

    /**
     * The node that the volume should be attached to.
     */
    nodeName: string;

    source: models.V1alpha1VolumeAttachmentSource;

}
