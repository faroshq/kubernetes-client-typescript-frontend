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
 * ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export interface V2beta1ObjectMetricStatus {
    /**
     * averageValue is the current value of the average of the metric across all relevant pods (as a quantity)
     */
    averageValue?: string;

    /**
     * currentValue is the current value of the metric (as a quantity).
     */
    currentValue: string;

    /**
     * metricName is the name of the metric in question.
     */
    metricName: string;

    selector?: models.V1LabelSelector;

    target: models.V2beta1CrossVersionObjectReference;

}
