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
 * LimitRangeItem defines a min/max usage limit for any resource that matches on kind.
 */
export interface V1LimitRangeItem {
    /**
     * Default resource requirement limit value by resource name if resource limit is omitted.
     */
    _default?: { [key: string]: string; };

    /**
     * DefaultRequest is the default resource requirement request value by resource name if resource request is omitted.
     */
    defaultRequest?: { [key: string]: string; };

    /**
     * Max usage constraints on this kind by resource name.
     */
    max?: { [key: string]: string; };

    /**
     * MaxLimitRequestRatio if specified, the named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value; this represents the max burst for the named resource.
     */
    maxLimitRequestRatio?: { [key: string]: string; };

    /**
     * Min usage constraints on this kind by resource name.
     */
    min?: { [key: string]: string; };

    /**
     * Type of resource that this limit applies to.
     */
    type: string;

}
