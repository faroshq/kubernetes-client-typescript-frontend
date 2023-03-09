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
 * UserSubject holds detailed information for user-kind subject.
 */
export interface V1beta1UserSubject {
    /**
     * `name` is the username that matches, or \"*\" to match all usernames. Required.
     */
    name: string;

}
