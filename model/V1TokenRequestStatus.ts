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
 * TokenRequestStatus is the result of a token request.
 */
export interface V1TokenRequestStatus {
    /**
     * ExpirationTimestamp is the time of expiration of the returned token.
     */
    expirationTimestamp: string;

    /**
     * Token is the opaque bearer token.
     */
    token: string;

}
