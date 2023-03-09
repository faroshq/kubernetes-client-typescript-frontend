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
 * MetricStatus describes the last-read state of a single metric.
 */
export interface V2beta2MetricStatus {
    containerResource?: models.V2beta2ContainerResourceMetricStatus;

    external?: models.V2beta2ExternalMetricStatus;

    object?: models.V2beta2ObjectMetricStatus;

    pods?: models.V2beta2PodsMetricStatus;

    resource?: models.V2beta2ResourceMetricStatus;

    /**
     * type is the type of metric source.  It will be one of \"ContainerResource\", \"External\", \"Object\", \"Pods\" or \"Resource\", each corresponds to a matching field in the object. Note: \"ContainerResource\" type is available on when the feature-gate HPAContainerMetrics is enabled
     */
    type: string;

}