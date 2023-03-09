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
 * NodeSpec describes the attributes that a node is created with.
 */
export interface V1NodeSpec {
    configSource?: models.V1NodeConfigSource;

    /**
     * Deprecated. Not all kubelets will set this field. Remove field after 1.13. see: https://issues.k8s.io/61966
     */
    externalID?: string;

    /**
     * PodCIDR represents the pod IP range assigned to the node.
     */
    podCIDR?: string;

    /**
     * podCIDRs represents the IP ranges assigned to the node for usage by Pods on that node. If this field is specified, the 0th entry must match the podCIDR field. It may contain at most 1 value for each of IPv4 and IPv6.
     */
    podCIDRs?: Array<string>;

    /**
     * ID of the node assigned by the cloud provider in the format: <ProviderName>://<ProviderSpecificNodeID>
     */
    providerID?: string;

    /**
     * If specified, the node\'s taints.
     */
    taints?: Array<models.V1Taint>;

    /**
     * Unschedulable controls node schedulability of new pods. By default, node is schedulable. More info: https://kubernetes.io/docs/concepts/nodes/node/#manual-node-administration
     */
    unschedulable?: boolean;

}