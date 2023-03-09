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
 * ContainerStateTerminated is a terminated state of a container.
 */
export interface V1ContainerStateTerminated {
    /**
     * Container\'s ID in the format \'<type>://<container_id>\'
     */
    containerID?: string;

    /**
     * Exit status from the last termination of the container
     */
    exitCode: number;

    /**
     * Time at which the container last terminated
     */
    finishedAt?: string;

    /**
     * Message regarding the last termination of the container
     */
    message?: string;

    /**
     * (brief) reason from the last termination of the container
     */
    reason?: string;

    /**
     * Signal from the last termination of the container
     */
    signal?: number;

    /**
     * Time at which previous execution of the container started
     */
    startedAt?: string;

}
