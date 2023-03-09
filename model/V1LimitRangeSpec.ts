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
 * LimitRangeSpec defines a min/max usage limit for resources that match on kind.
 */
export interface V1LimitRangeSpec {
    /**
     * Limits is the list of LimitRangeItem objects that are enforced.
     */
    limits: Array<models.V1LimitRangeItem>;

}
